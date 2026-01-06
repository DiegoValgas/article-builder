# article-builder

JavaScript application to build simple article pages.

## Initialize the Canva

After importing the canva library, set the element selector in the Canva class constructor.

```js
import { Canva } from 'article-builder/canva.js';

const canva = new Canva('#the-canva-element');

// To edit a previously saved article:
canva.setContent('the-content-string');
```

## Get the Article Content

You can save the article content to build your page or edit the article later.

```js
import { Canva } from 'article-builder/canva.js';

const canva = new Canva('#the-canva-element', {
    saveAction: content => {
        // Handle the saved content
    }
});

// OR

canva.saveAction(content => {
    // Handle the saved content
});
```

## Render the Article on Your Page

```js
import { Page } from 'article-builder/page.js';

const page = new Page('#the-page-element');

page.setContent('the-content-string');
```