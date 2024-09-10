import {css} from 'lit';
export default css`
.tags{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-start}.tags .tag{margin-bottom:.5rem}.tags .tag:not(:last-child){margin-right:.5rem}.tags:last-child{margin-bottom:-0.5rem}.tags:not(:last-child){margin-bottom:1rem}.tags.are-medium .tag:not(.is-normal):not(.is-large){font-size:1rem}.tags.are-large .tag:not(.is-normal):not(.is-medium){font-size:1.25rem}.tags.is-centered{justify-content:center}.tags.is-centered .tag{margin-right:.25rem;margin-left:.25rem}.tags.is-right{justify-content:flex-end}.tags.is-right .tag:not(:first-child){margin-left:.5rem}.tags.is-right .tag:not(:last-child){margin-right:0}.tags.has-addons .tag{margin-right:0}.tags.has-addons .tag:not(:first-child){margin-left:0;border-top-left-radius:0;border-bottom-left-radius:0}.tags.has-addons .tag:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.tag:not(body){align-items:center;background-color:var(--bgColor-emphasis);border-radius:4px;color:var(--fgColor-onEmphasis);display:inline-flex;font-size:.75rem;height:2em;justify-content:center;line-height:1.5;padding-left:.75em;padding-right:.75em;white-space:nowrap}.tag:not(body) .delete{margin-left:.25rem;margin-right:-0.375rem}.tag:not(body).is-primary{background-color:var(--bgColor-primary, hsl(171, 100%, 41%));color:var(--fgColor-onInverse)}.tag:not(body).is-link{background-color:var(--fgColor-link, var(--fgColor-saira-link, var(--fgColor-link, hsl(229, 53%, 53%))));color:var(--fgColor-onInverse)}.tag:not(body).is-info{background-color:var(--bgColor-accent-emphasis);color:var(--fgColor-onInverse)}.tag:not(body).is-success{background-color:var(--bgColor-success-emphasis);color:var(--fgColor-onInverse)}.tag:not(body).is-warning{background-color:var(--bgColor-attention-emphasis);color:var(--fgColor-onInverse)}.tag:not(body).is-danger{background-color:var(--bgColor-danger-emphasis);color:var(--fgColor-onInverse)}.tag:not(body).is-black{background-color:#111;color:#fff}.tag:not(body).is-normal{font-size:.75rem}.tag:not(body).is-medium{font-size:1rem}.tag:not(body).is-large{font-size:1.25rem}.tag:not(body) .icon:first-child:not(:last-child){margin-left:-0.375em;margin-right:.1875em}.tag:not(body) .icon:last-child:not(:first-child){margin-left:.1875em;margin-right:-0.375em}.tag:not(body) .icon:first-child:last-child{margin-left:-0.375em;margin-right:-0.375em}.tag:not(body).is-delete{margin-left:1px;padding:0;position:relative;width:2em}.tag:not(body).is-delete::before,.tag:not(body).is-delete::after{background-color:currentColor;content:"";display:block;left:50%;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%) rotate(45deg);transform-origin:center center}.tag:not(body).is-delete::before{height:1px;width:50%}.tag:not(body).is-delete::after{height:50%;width:1px}.tag:not(body).is-delete:hover,.tag:not(body).is-delete:active,.tag:not(body).is-delete:focus{background-color:color-mix(in srgb, var(--bgColor-emphasis), var(--bgColor-muted) 8%)}.tag:not(body).is-rounded{border-radius:9999px}
`