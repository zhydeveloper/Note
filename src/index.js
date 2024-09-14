import "./style/style.css";
import "./components/note-form.js";
import "./components/note-item.js";
import "./components/app-bar.js";
import "./components/loading-indicator.js";

const API_URL = "https://notes-api.dicoding.dev/v2";

// Show loading indicator
function showLoading() {
  const container = document.querySelector(".note-container");
  container.innerHTML = "<loading-indicator></loading-indicator>";
}

// Hide loading indicator
function hideLoading() {
  const loading = document.querySelector("loading-indicator");
  if (loading) {
    loading.remove();
  }
}

// Render notes in the DOM
function renderNotes(notes) {
  const container = document.querySelector(".note-container");
  container.innerHTML = "";

  notes.forEach((note) => {
    const noteElement = document.createElement("note-item");
    noteElement.setAttribute("id", note.id);
    noteElement.setAttribute("title", note.title);
    noteElement.setAttribute("body", note.body);
    container.appendChild(noteElement);
  });
}

// Fetch notes from the API
async function getNotes() {
  showLoading();
  try {
    const response = await fetch(`${API_URL}/notes`);
    const { data: notes } = await response.json();
    renderNotes(notes);
  } catch (error) {
    alert("An error occurred while fetching notes. Please try again later.");
  } finally {
    hideLoading();
  }
}

// Add a new note
async function addNote(title, body) {
  try {
    const response = await fetch(`${API_URL}/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, body }),
    });

    const { data: newNote } = await response.json();
    const currentNotes = document.querySelectorAll("note-item");
    const notes = Array.from(currentNotes).map((noteItem) => ({
      id: noteItem.getAttribute("id"),
      title: noteItem.getAttribute("title"),
      body: noteItem.getAttribute("body"),
    }));
    renderNotes([newNote, ...notes]);
  } catch (error) {
    console.error(error);
  }
}

// Delete a note
async function deleteNoteElement(id, element) {
  try {
    await fetch(`${API_URL}/notes/${id}`, { method: "DELETE" });
    element.remove();
  } catch (error) {
    console.error("Failed to delete note:", error);
  }
}

// Event listener for DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
  getNotes();

  document.querySelector("note-form").addEventListener("noteAdded", (event) => {
    const { title, body } = event.detail;
    addNote(title, body);
  });

  document
    .querySelector(".note-container")
    .addEventListener("deleteNote", (event) => {
      const { id } = event.detail;
      const noteElement = event.target.closest("note-item");
      delete NoteElement(id, noteElement);
    });
});
