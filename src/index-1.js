import { notes } from '/data/data.js';
import './style/style.css';
import '/components/note-form.js';
import '/components/note-item.js';



// Fungsi untuk merender catatan
function renderNotes() {
    const container = document.querySelector('.notes-container');
    container.innerHTML = '';

    notes.forEach(note => {
        const noteElement = document.createElement('note-item');
        noteElement.setAttribute('id', note.id);
        noteElement.setAttribute('title', note.title);
        noteElement.setAttribute('body', note.body);
        noteElement.setAttribute('date', note.createdAt); // Update to use createdAt
        container.appendChild(noteElement);
    });
}

// Event listener saat DOM sudah dimuat
document.addEventListener('DOMContentLoaded', () => {
    renderNotes();

    const noteFormModal = document.querySelector('#noteFormModal');
    const openFormBtn = document.querySelector('#openFormBtn');

    openFormBtn.addEventListener('click', () => {
        noteFormModal.style.display = 'flex';
    });

    document.querySelector('note-form').addEventListener('noteAdded', (event) => {
        const newNote = { id: `notes-${Date.now()}`, ...event.detail, createdAt: new Date().toISOString(), archived: false };
        notes.push(newNote);
        renderNotes();
        noteFormModal.style.display = 'none'; // Sembunyikan modal setelah menambahkan catatan
    });

    document.querySelector('.notes-container').addEventListener('deleteNote', (event) => {
        const { id } = event.detail;
        const index = notes.findIndex(note => note.id === id);
        if (index !== -1) {
            notes.splice(index, 1);
            renderNotes();
        }
    });
});
