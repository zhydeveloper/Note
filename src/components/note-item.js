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
    width: 100%; 
    background-color: #fff; 
    border-radius: 10px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    overflow: hidden; 
    transition: transform 0.3s ease, box-shadow 0.3s ease; 
  }
  
  .note-item:hover {
    transform: translateY(-5px); 
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); 
  }
  
  .note-item h2 {
    margin: 0;
    padding: 15px;
    font-size: 1.5rem;
    color: #333; 
  }
  
  .note-item p {
    padding: 0 15px 15px;
    color: #666;
  }
  
  .note-item .button {
    padding: 10px;
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
   
      </style>
   
        <div class="note-item">
          <h2>${title}</h2>
          <p>${body}</p>
          <div class="button">  
            <button id="delete-button">Delete</button>
            <button id="archive-button">Archive</button>
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
    
    this.shadowRoot.querySelector("#archive-button").addEventListener("click", () => {
      this.dispatchEvent(new CustomEvent("archiveNote", {
        detail: { id: this.getAttribute("id") },
        bubbles: true,
        composed: true
      }));
    });
  }
}

customElements.define('note-item', NoteItem);
