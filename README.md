# saira
Reduced CSS lib forked from [Bulma](https://github.com/jgthms/bulma) and [Primer](https://github.com/primer).

Lit CSS templates
------------

Saira includes a npm package currently available via `github:` scheme only:

```package.json
{
	"dependencies": {
		"saira": "github:chumaltd/saira",
    }
}
```

You can import each module under [lit/](./lit/) as a [Lit CSS template](https://lit.dev/docs/components/styles/):

```javascript
import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';

import padding from 'saira/lit/padding.js';

@customElement('my-element')
export class MyElement extends LitElement {
  static styles = [padding];

  render() {
    return html`
        <p class="p-4">Hello!</p>
    `;
  }
}
```


Priorities
------------
Saira is meant to be complemental to other CSS frameworks. It's named after a [rakugo](https://en.wikipedia.org/wiki/Rakugo) story "[Meguro no samma](https://ja.wikipedia.org/wiki/%E7%9B%AE%E9%BB%92%E3%81%AE%E3%81%95%E3%82%93%E3%81%BE)".

- Cherry-pick unique components
- Dehydrate theme potentially conflicting others
- Introduce SCSS
