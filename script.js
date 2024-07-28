const notes = [
    { id: '1', title: 'Cara Membuat Kue', body: 'Untuk membuat kue, Anda perlu bahan-bahan seperti tepung terigu, telur, gula, dan mentega. Campurkan bahan-bahan tersebut, lalu aduk hingga rata. Tuang adonan ke dalam loyang dan panggang dalam oven yang telah dipanaskan pada suhu 180°C selama 30-40 menit, atau sampai kue matang.', date: '2024-07-28' },
    { id: '2', title: 'Cara Memasak Opor Ayam', body: 'Opor Ayam adalah hidangan khas Indonesia yang menggunakan bahan-bahan seperti ayam, santan, dan berbagai rempah seperti kunyit, kemiri, dan serai. Untuk membuatnya, tumis bumbu halus hingga harum, kemudian masukkan ayam dan santan. Masak dengan api kecil hingga ayam empuk dan kuahnya mengental.', date: '2024-07-28' },
    { id: '3', title: 'Cara Membuat Kue Lebaran Hari Raya', body: 'Kue Lebaran termasuk berbagai kue kering seperti nastar, kastengel, dan putri salju. Untuk membuat nastar, campurkan tepung terigu, mentega, dan telur, lalu tambahkan selai nanas. Bentuk bulat dan panggang hingga berwarna keemasan. Untuk kastengel, campurkan keju parut dengan adonan kue dan panggang hingga garing. Putri salju dibuat dengan adonan yang dicetak kecil-kecil dan ditaburi gula halus.', date: '2024-07-28' },
    { id: '4', title: 'Cara Membuat Roti', body: 'Roti dibuat dari bahan-bahan seperti tepung terigu, ragi, air, dan garam. Campurkan tepung dengan ragi dan garam, lalu tambahkan air sedikit-sedikit hingga adonan bisa dipulung. Diamkan adonan hingga mengembang, lalu bentuk menjadi roti dan panggang dalam oven pada suhu 200°C selama 25-30 menit hingga roti berwarna coklat keemasan dan matang.', date: '2024-07-28' }
];

function renderNotes() {
    const container = document.querySelector('.notes-container');
    container.innerHTML = '';
    notes.forEach(note => {
        const noteElement = document.createElement('note-item');
        noteElement.setAttribute('id', note.id);
        noteElement.setAttribute('title', note.title);
        noteElement.setAttribute('body', note.body);
        noteElement.setAttribute('date', note.date);
        container.appendChild(noteElement);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderNotes();

    const noteFormModal = document.querySelector('#noteFormModal');
    const openFormBtn = document.querySelector('#openFormBtn');
    
    openFormBtn.addEventListener('click', () => {
        noteFormModal.style.display = 'flex';
    });

    document.querySelector('note-form').addEventListener('noteAdded', (event) => {
        const newNote = { id: String(Date.now()), ...event.detail };
        notes.push(newNote);
        renderNotes();
        noteFormModal.style.display = 'none'; // Hide modal after adding note
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
