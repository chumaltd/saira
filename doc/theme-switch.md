Switching color theme
==============

Primer provides 3 color modes, including `light`, `dark` and `auto`.  
They can be switched by `data-color-mode` attribute.


Load color mode
----------

For example, you can store color-mode preference in `localStorage` across sessions.  
Loading preference looks like following:

```html
<script>
(()=>{
  const DEFAULT_MODE = 'light';
  const t = localStorage.getItem('theme');
  let mode;
  switch(t) {
    case '0':
      mode = 'auto';
      break;
    case '1':
      mode = 'light';
      break;
    case '2':
      mode = 'dark';
      break;
    default:
      mode = DEFAULT_MODE;
  }
  document.querySelector('html').dataset.colorMode = mode;
})()
</script>
```


Switching UI
-----------

Switching UI needs to select from 3 modes and write the corresponding code to localStorage.  
`auto` is checkbox, and `light`/`dark` are radio.
Lit implementation example is as follows:

```javascript
const switch_theme = () => {
  const t = localStorage.getItem('theme');

  return html`
    <!-- light/dark radio should be shown only if auto is unchecked -->
    <style>
      input#auto.checked ~ div#manual { display: none; }
    </style>

    <input type="checkbox" id="auto"
      ?checked=${t == '0'}
      class=${t == '0' ? 'checked' : ''}
      @change=${e => {
        const ds = document.querySelector('html').dataset;
        if(e.target.checked) {
          e.target.classList.add('checked');
          ds.colorMode = "auto";
          localStorage.setItem('theme', 0);
        } else {
          e.target.classList.remove('checked');
          ds.colorMode = "light";
          localStorage.setItem('theme', 1);
          e.target.parentNode.querySelector('input#light').checked = true;
        }
      }} />
    <label for="auto"> auto</label>

    <div id="manual"
      @change=${e => {
        const ds = document.querySelector('html').dataset;
        if(e.target.value == "light") {
          ds.colorMode = "light";
          localStorage.setItem('theme', 1);
        } else {
          ds.colorMode = "dark";
          localStorage.setItem('theme', 2);
        }
      }}
    >
    <label><input type="radio" id="light"
      ?checked=${ ! ['2'].includes(t)}
      name="manual" value="light" /> light</label>
    <label><input type="radio"
      ?checked=${t == '2'}
      name="manual" value="dark"/> dark</label>
    </div>
  `
}
```
