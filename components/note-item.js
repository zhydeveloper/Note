class NoteItem extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .note-item {
                    padding: 16px;
                    border-radius: 8px;
                    background: white;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    display: flex;
                    flex-direction: column;
                    height: 100%;
                    box-sizing: border-box;
                }
                .note-item h3 {
                    margin: 0;
                    font-size: 1.2em;
                }
                .note-item .date {
                    font-size: 0.9em;
                    color: #666;
                    margin-top: 10px;
                }
                p {
                    margin: 10px 0;
                    overflow: hidden;
                    word-wrap: break-word;
                }
                #deleteButton {
                    background: #e74c3c;
                    color: white;
                    border: none;
                    padding: 6px 12px;
                    border-radius: 4px;
                    cursor: pointer;
                    margin-top: auto;
                }
                #deleteButton:hover {
                    background: #c0392b;
                }
            </style>
            <div class="note-item">
                <h3></h3>
                <p></p>
                <div class="date"></div>
                <button id="deleteButton">Delete</button>
            </div>
        `;
    }

    connectedCallback() {
        this.shadowRoot.querySelector('h3').textContent = this.getAttribute('title');
        this.shadowRoot.querySelector('p').textContent = this.getAttribute('body');
        this.shadowRoot.querySelector('.date').textContent = this.getAttribute('date');

        this.shadowRoot.querySelector('#deleteButton').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('deleteNote', {
                detail: { id: this.getAttribute('id') },
                bubbles: true,
                composed: true
            }));
        });
    }
}

customElements.define('note-item', NoteItem);
