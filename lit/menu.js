import {css} from 'lit';
export default css`
.menu{font-size:1rem}.menu-list{line-height:1.25}.menu-list a{border-radius:2px;color:var(--fgColor-default, hsl(0, 0%, 29%));padding:.5em .75em;display:flex;align-items:center}.menu-list a:hover{background-color:false;color:var(--fgColor-default, hsl(0, 0%, 21%))}.menu-list a.is-active{background-color:false;color:var(--fgColor-onEmphasis, #fff)}.menu-list li{position:relative}.menu-list li ul{border-left:1px solid;margin:.75em;padding-left:.75em}.menu-label{color:var(--fgColor-muted, hsl(0, 0%, 48%));font-size:.75em;letter-spacing:.1em;margin-top:1em}.menu-label:not(:last-child){margin-bottom:1em}
`