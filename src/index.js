import "./style/style.css";
import "./components/note-form.js";
import "./components/note-item.js";
import "./components/app-bar.js";
import "./components/loading-indicator.js";
import "./components/succes-note.js";
import "./components/delete-alert.js";  
import "./components/archive-alert.js"; // Import the new archive alert component

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
    loading.hideLoading();
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

    // Show success alert
    const successAlert = document.createElement("success-alert");
    successAlert.setAttribute("message", "Note added successfully!");
    document.body.appendChild(successAlert);

    // Remove success alert after 1.8 seconds
    setTimeout(() => successAlert.remove(), 1800);
  } catch (error) {
    console.error(error);
  }
}

// Archive a note
async function archiveNoteElement(id, element) {
  try {
    const response = await fetch(`${API_URL}/notes/${id}/archive`, {
      method: "POST",  // Changed from PUT to POST
    });

    if (response.ok) {
      element.remove();

      // Show archive alert
      const archiveAlert = document.createElement("archive-alert");
      archiveAlert.setAttribute("message", "Note archived successfully!");
      document.body.appendChild(archiveAlert);

      // Remove archive alert after 1.8 seconds
      setTimeout(() => archiveAlert.remove(), 1800);
    } else {
      alert("Failed to archive note. Please try again.");
    }
  } catch (error) {
    console.error("Failed to archive note:", error);
    alert("An error occurred while archiving the note. Please try again later.");
  }
}

// Delete a note and show red alert
async function deleteNoteElement(id, element) {
  try {
    const response = await fetch(`${API_URL}/notes/${id}`, { method: "DELETE" });

    if (response.ok) {
      element.remove();

      // Show delete alert
      const deleteAlert = document.createElement("delete-alert");
      deleteAlert.setAttribute("message", "Note deleted successfully!");
      document.body.appendChild(deleteAlert);

      // Remove delete alert after 1.8 seconds
      setTimeout(() => deleteAlert.remove(), 1800);
    } else {
      alert("Failed to delete note. Please try again.");
    }
  } catch (error) {
    console.error("Failed to delete note:", error);
    alert("An error occurred while deleting the note. Please try again later.");
  }
}

// Event listener for DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
  getNotes();

  document.querySelector("note-form").addEventListener("noteAdded", (event) => {
    const { title, body } = event.detail;
    addNote(title, body);
  });

  document.querySelector(".note-container").addEventListener("deleteNote", (event) => {
    const { id } = event.detail;
    const noteElement = event.target.closest("note-item");
    deleteNoteElement(id, noteElement);
  });

  document.querySelector(".note-container").addEventListener("archiveNote", (event) => {
    const { id } = event.detail;
    const noteElement = event.target.closest("note-item");
    archiveNoteElement(id, noteElement);
  });
});
