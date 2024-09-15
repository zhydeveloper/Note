// delete-alert.js
class DeleteAlert extends HTMLElement {
    connectedCallback() {
      const message = this.getAttribute("message") || "Note deleted successfully!";
      this.innerHTML = `
        <style>
          .alert {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #f44336; /* Red background */
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
  
  customElements.define('delete-alert', DeleteAlert);
  