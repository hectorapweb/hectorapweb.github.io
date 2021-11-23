class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Alvarez Espinosa Hector.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
