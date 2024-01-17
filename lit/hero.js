import {css} from 'lit';
export default css`
.hero{align-items:stretch;display:flex;flex-direction:column;justify-content:space-between}.hero.is-primary{background-color:var(--bgColor-primary, hsl(171, 100%, 41%));color:var(--fgColor-onEmphasis, var(--color-fg-on-emphasis))}.hero.is-primary .title,.hero.is-primary .subtitle{color:var(--fgColor-onEmphasis, var(--color-fg-on-emphasis))}.hero.is-light{background-color:color-mix(in srgb, rgb(128, 128, 128) 30%, var(--bgColor-default, var(--color-canvas-default)))}.hero.is-small .hero-body{padding:1.5rem}@media screen and (min-width: 769px),print{.hero.is-medium .hero-body{padding:9rem 4.5rem}}@media screen and (min-width: 769px),print{.hero.is-large .hero-body{padding:18rem 6rem}}.hero.is-halfheight .hero-body,.hero.is-fullheight .hero-body{align-items:center;display:flex}.hero.is-halfheight .hero-body>.container,.hero.is-fullheight .hero-body>.container{flex-grow:1;flex-shrink:1}.hero.is-halfheight{min-height:50vh}.hero.is-fullheight{min-height:100vh}.hero-video{bottom:0;left:0;position:absolute;right:0;top:0;overflow:hidden}.hero-video video{left:50%;min-height:100%;min-width:100%;position:absolute;top:50%;transform:translate3d(-50%, -50%, 0)}.hero-video.is-transparent{opacity:.3}@media screen and (max-width: 768px){.hero-video{display:none}}.hero-header,.hero-footer{flex-grow:0;flex-shrink:0}.hero-body{flex-grow:1;flex-shrink:0;padding:3rem 1.5rem}@media screen and (min-width: 769px),print{.hero-body{padding:3rem 3rem}}
`