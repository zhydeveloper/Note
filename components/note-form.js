class NoteForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .note-form {
                    display: flex;
                    background-color: white;
                    padding: 1rem;
                    border-radius: 10px;
                    width: 500px;
                    flex-direction: column;
                }
                .form-group {
                    margin-bottom: 16px;
                }

                 .date {
                   margin: 10px;
                 }
                label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: bold;
                }
                input, textarea {
                    width: 100%;
                    padding: 12px;
                    border-radius: 4px;
                    border: 1px solid #ddd;
                    box-sizing: border-box;
                }
                textarea {
                    height: 100px;
                    resize: vertical;
                }
                button {
                    background: #007bff;
                    color: white;
                    border: none;
                    padding: 12px 24px;
                    border-radius: 4px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }
                button:hover {
                    background: #0056b3;
                }
            </style>
            <form class="note-form" id="noteForm">
             <h3> Catat Kegiatan Anda Masa Lalu dan Masa Mendatang!</h3>
                <div class="form-group">
                    <label for="title">Judul</label>
                    <input type="text" id="title" name="title" required placeholder="Masukkan judul catatan!">
                </div>
                <div class="form-group">
                    <label for="body">Isi</label>
                    <textarea id="body" name="body" placeholder="Masukkan isi catatan!"  required></textarea>
                </div>
                <div class="form-group date">
                    <label for="date">Tanggal</label>
                    <input type="date" id="date" name="date" required>
                </div>
                <button type="submit">Tambah Catatan</button>
            </form>
        `;
    }

    connectedCallback() {
        this.shadowRoot.querySelector('#noteForm').addEventListener('submit', (event) => {
            event.preventDefault();
            const title = this.shadowRoot.querySelector('#title').value;
            const body = this.shadowRoot.querySelector('#body').value;
            const date = this.shadowRoot.querySelector('#date').value;
            this.dispatchEvent(new CustomEvent('noteAdded', {
                detail: { title, body, date },
                bubbles: true,
                composed: true
            }));
            this.shadowRoot.querySelector('#noteForm').reset();
        });
    }
}

customElements.define('note-form', NoteForm);
