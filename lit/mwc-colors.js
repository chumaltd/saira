import {css} from 'lit';
export default css`
:root{--md-sys-color-on-surface: var(--fgColor-default);--md-sys-color-on-surface-variant: var(--fgColor-muted);--md-sys-color-primary: var(--bgColor-primary);--md-sys-color-surface: var(--bgColor-inset);--md-sys-color-surface-container: var(--overlay-bgColor);--md-sys-color-surface-container-low: var(--overlay-bgColor);--md-sys-color-surface-container-high: var(--overlay-bgColor);--md-sys-color-surface-container-highest: var(--bgColor-inset);--md-fab-label-text-color: var(--fgColor-saira-link, var(--fgColor-link, var(--fgColor-saira-link, var(--fgColor-link, hsl(229, 53%, 53%)))));--md-text-button-label-text-color: var(--fgColor-saira-link, var(--fgColor-link, var(--fgColor-saira-link, var(--fgColor-link, hsl(229, 53%, 53%)))))}.is-inverse{--md-sys-color-surface: var(--bgColor-inverse);--md-sys-color-on-surface: var(--fgColor-onInverse);--md-sys-color-primary: var(--bgColor-inverse);--md-sys-color-on-primary: var(--fgColor-onInverse);--md-sys-color-secondary-container: var(--bgColor-emphasis);--md-sys-color-on-secondary-container: var(--fgColor-onEmphasis);--md-fab-label-text-color: var(--bgColor-inverse);--md-text-button-label-text-color: var(--bgColor-inverse);--md-text-button-icon-color: var(--bgColor-inverse)}.is-inverse md-list,.is-inverse md-tabs{--md-sys-color-surface: transparent}.is-inverse md-outlined-text-field,md-outlined-text-field.is-inverse{--md-sys-color-on-surface: var(--bgColor-inverse)}md-list .is-inverse,md-tabs .is-inverse{--md-sys-color-surface: transparent}.is-inverse md-tabs,md-tabs.is-inverse{--md-sys-color-on-surface: var(--bgColor-inverse);--md-sys-color-outline-variant: var(--bgColor-inverse)}
`