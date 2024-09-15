class NoteForm extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
    this.shadowDOM.innerHTML = `
      <style>
        :host {
          display: block;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }
        form {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          justify-content: center;
          max-width: 400px;
          margin: 40px auto;
          background-color: #f9f9f9;
          border: 1px solid #ddd;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        @media (max-width: 768px) {
          form {
            max-width: 90%;
            margin: 20px auto;
          }
        }
        input[type="text"], textarea {
          padding: 10px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin-bottom: 10px;
          width: 100%;
          box-sizing: border-box;
        }
        button {
          background-color: #337ab7;
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #23527c;
        }
      </style>
      <form>
        <input type="text" id="title" placeholder="Title">
        <textarea id="body" name="body" placeholder="Isi"></textarea>
        <button id="submit">Add Note</button>
      </form>
    `;
    this.form = this.shadowDOM.querySelector('form');
    this.titleInput = this.shadowDOM.querySelector('#title');
    this.bodyInput = this.shadowDOM.querySelector('#body');
    this.submitButton = this.shadowDOM.querySelector('#submit');

    this.submitButton.addEventListener('click', (e) => {
      e.preventDefault();
      const title = this.titleInput.value;
      const body = this.bodyInput.value;
      this.dispatchEvent(new CustomEvent('noteAdded', { detail: { title, body } }));
      this.form.reset();
    });
  }
}

customElements.define('note-form', NoteForm);
