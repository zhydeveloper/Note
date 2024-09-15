// success-alert.js
class SuccessAlert extends HTMLElement {
    connectedCallback() {
      const message = this.getAttribute("message") || "Operation successful!";
      this.innerHTML = `
        <style>
          .alert {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #4CAF50;
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
  
  customElements.define('success-alert', SuccessAlert);
  