class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <p>Indo Food - Copyright ©2023</p>
      </footer>         
      `;
  }
}
customElements.define('footer-bar', FooterBar);
