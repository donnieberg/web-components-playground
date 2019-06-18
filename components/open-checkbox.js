const openCheckbox = document.createElement('template');
openCheckbox.innerHTML = `
  <div class="slds-form-element">
    <div class="slds-form-element__control">
      <div class="slds-checkbox">
        <input id="input-1" type="checkbox" name="options" value="checkbox-44" checked="" />
        <label id="label-1" class="slds-checkbox__label">
          <span class="slds-checkbox_faux"></span>
          <span class="slds-form-element__label">Checkbox Label</span>
        </label>
      </div>
    </div>
  </div>
`;

class OpenCheckbox extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(openCheckbox.content.cloneNode(true));

    const label = this._shadowRoot.querySelector('label');
    const input = this._shadowRoot.querySelector('input');

    label.for = input;
  }
}

window.customElements.define('open-checkbox', OpenCheckbox);
