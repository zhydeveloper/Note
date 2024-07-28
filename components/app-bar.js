class AppBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .app-bar {
                    text-align: center;
                    background: #021526;
                    color: white;
                    box-shadow: 1px 1px 6px white;
                    padding: 5px;
                }
            </style>
            <div class="app-bar">
                <h1>Write✍️</h1>
            </div>
        `;
    }
}

customElements.define('app-bar', AppBar);
