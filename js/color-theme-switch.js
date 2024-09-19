import {html, css, LitElement} from 'lit';
import {save} from './color-theme.js';

// This componenet is build with Material Web
// https://github.com/material-components/material-web
//
export class ColorThemeSwitch extends LitElement {

    static properties = {
        k: {type: String}, // localStorage key
        _dark: {type: Boolean, state: true}
    };

    constructor() {
        this.k = "theme";
        super();
    }

    connectedCallback() {
        const md = document.querySelector('html').dataset.colorMode;
        if (md == "auto") {
            this._dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        } else {
            this._dark = md == "dark";
        }
        super.connectedCallback();
    }

    render() {
        return html`
    <md-switch icons
      ?selected=${this._dark}
      @change=${(e)=>switch_color_theme(e.target.selected, this.k)}
    >
      <md-icon slot="on-icon">dark_mode</md-icon>
    </md-switch>
    `;
    }
}

const switch_color_theme = (dark, key) => {
    const md = dark ? "dark" : "light";
    document.querySelector('html').dataset.colorMode = md;
    save(md, key);
}
