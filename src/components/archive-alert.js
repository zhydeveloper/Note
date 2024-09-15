class ArchiveAlert extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      const message = this.getAttribute('message');
      this.shadowRoot.innerHTML = `
        <style>
          .alert {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: blue;
            color: white;
            padding: 15px;
            border-radius: 5px;
            z-index: 1000;
          }
        </style>
        <div class="alert">${message}</div>
      `;
    }
  }
  
  customElements.define('archive-alert', ArchiveAlert);
  