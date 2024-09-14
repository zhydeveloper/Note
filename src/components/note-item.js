class NoteItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const id = this.getAttribute('id');
    const title = this.getAttribute('title');
    const body = this.getAttribute('body');

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 20px;
          border-bottom: 1px solid #ccc;
          margin-bottom: 20px;
        }
        
        :host h2 {
          font-weight: bold;
          margin-top: 0;
        }
        
        :host p {
          margin-bottom: 20px;
        }
        
        :host button {
          background-color: #ff3b3b;
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        
        :host button:hover {
          background-color: #ff0000;
        }

        #archive-button {
         background-color: blue;
         padding: 10px;
         width: 80px;         
        }

        .button {
          display: flex;
          gap: 5px;
          cursor: pointer;
          justify-content: flex-end; 
        }

        .note-item {
         width: 300px;
        }
        
        .container {
          width: 300px;     
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
          display: grid;
          grid-template-columns: repeat(3, 1fr); 
          gap: 20px; 
        }

        @media (max-width: 767px) {
          .container {
            grid-template-columns: repeat(2, 1fr); /* 2 kolom untuk mobile */
          }
        }
      </style>

      <div class="container">
        <div class="note-item">
          <h2>${title}</h2>
          <p>${body}</p>
          <div class="button">  
            <button id="delete-button">Delete</button>
            <button id="archive-button">Archive</button>
          </div>
        </div>
      </div>
    `;

    const deleteButton = this.shadowRoot.querySelector('#delete-button');
    deleteButton.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('deleteNote', { 
        detail: { id }, 
        bubbles: true, // Penting: agar event bisa ditangkap di luar shadow DOM
        composed: true  // Penting: agar event bisa menembus shadow boundary
      }));
    });
  }
}

customElements.define('note-item', NoteItem);
