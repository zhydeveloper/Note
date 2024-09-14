class AppBar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          .app-bar {
            display: flex;
            justify-content: center;
            align-items: center;
            background: #021526;
            color: white;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            padding: 10px;
            height: 60px; /* added a fixed height */
          }
          .app-bar h1 {
            font-size: 24px;
            font-weight: bold;
            margin: 0;
          }
        </style>
        <div class="app-bar">
          <h1>Write✍️</h1>
        </div>
      `;
    }
  }
  
  customElements.define('app-bar', AppBar);