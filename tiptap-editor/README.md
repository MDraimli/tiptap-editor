## Tiptap Editor (Vite) – Project Documentation

### Overview
This project is a minimal, framework-agnostic setup of the Tiptap editor, bundled with Vite. It includes a small toolbar scaffold in `index.html`, a styled editing surface in `style.css`, core Tiptap extensions, table support, and several custom nodes for handling media, templates, buttons, and iframes.

### Features
- **Editor core**: `@tiptap/core` with `@tiptap/starter-kit`
- **Common extensions**: Link, Underline, Highlight, TextAlign, HorizontalRule, Image, Text, Table family (Table, Row, Cell, Header)
- **Custom nodes** (in `plugins/`):
  - `Video`: Parses/outputs `figure.wp-block-video > video`
  - `IframeNode`: Atom node with command to insert customizable `iframe`
  - `CustomMediaNode`: Wraps arbitrary media markup found in `.media-container`
  - `TemplateContentNode`: Wraps content found in `.template-content`
  - `ButtonWrapperNode`: Wraps button blocks found in `.button-wrapper`
  - `AffiliateButtonNode`: Preserves Amazon affiliate buttons with onclick handlers
  - `ReviewNode`: Handles testimonial/review blocks with quote marks, star ratings, and editable content

### Requirements
- Node.js 18+ (Vite 5 requires Node 18 or newer)
- npm 8+

### Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
   Vite will print the local URL (typically `http://localhost:5173`).
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview the production build locally:
   ```bash
   npm run preview
   ```

### Project Structure
- `index.html` – Minimal page with a toolbar scaffold and an initial `#content` container. The initial HTML inside `#content` becomes the editor's starting document.
- `main.js` – Creates the Tiptap `Editor`, wires up extensions, and pulls initial content from `#content`.
- `style.css` – Styles for the editing surface, media blocks, and tables.
- `plugins/` – Custom Tiptap nodes:
  - `video.js`
  - `iframes.js`
  - `CustomMediaNode.js`
  - `TemplateContentNode.js`
  - `ButtonWrapperNode.js`
  - `AffiliateButtonNode.js`
  - `ReviewNode.js`
- `vite.config.js` – Vite configuration (excludes `jquery` from optimization/bundle).

### How the editor initializes
In `main.js`, the editor is created and attached to `#content`:
```js
const editor = window.editor = new Editor({
  element: document.querySelector('#content'),
  extensions: [ /* StarterKit, Link, Underline, ... custom nodes ... */ ],
  content: setContentHtml(),
});
```
The helper `setContentHtml()` grabs the initial HTML inside `#content` from `index.html` and feeds it to Tiptap, then clears the DOM container so Tiptap can render its own view.

You can access the instance via `window.editor` in the browser console or your own scripts.

### Available npm scripts
- `npm run dev` – Start Vite dev server
- `npm run build` – Build production assets
- `npm run preview` – Preview the production build

### Using the editor API
Because the instance is exposed on `window.editor`, you can run typical Tiptap commands:
```js
// Toggle marks, nodes, etc.
editor.chain().focus().toggleBold().run();

// Insert an image
editor.chain().focus().setImage({ src: 'https://example.com/cat.jpg' }).run();
```

### Custom nodes – details and usage

#### 1) Video (`plugins/video.js`)
- Parses HTML of the shape:
  ```html
  <figure class="wp-block-video"><video src="..." controls></video></figure>
  ```
- Insert programmatically:
  ```js
  editor.commands.insertContent({
    type: 'video',
    attrs: { src: 'https://example.com/video.mp4', controls: true },
  });
  ```

#### 2) Iframe (`plugins/iframes.js`)
- Atom block node with many configurable attributes: `src`, `width`, `height`, `allowfullscreen`, `autoplay`, `disablekbcontrols`, `enableiframeapi`, `modestbranding`, `start`, `endtime`, `loop`, `playlist`, `origin`, `ivloadpolicy`.
- Command helper:
  ```js
  editor.commands.setIframe({
    src: 'https://www.youtube.com/embed/VIDEO_ID',
    width: '720',
    height: '404',
    allowfullscreen: 'true',
    autoplay: 'false',
  });
  ```

#### 3) CustomMediaNode (`plugins/CustomMediaNode.js`)
- Parses any block with the selector `div.media-container` and stores its outer HTML in the `content` attribute.
- Renders a node view that wraps the original HTML in a `div.media-wrapper`.
- Insert by HTML import (place a `.media-container` block in the initial content) or programmatically:
  ```js
  editor.commands.insertContent({
    type: 'customMedia',
    attrs: { content: '<div class="media-container">...your markup...</div>' },
  });
  ```

#### 4) TemplateContentNode (`plugins/TemplateContentNode.js`)
- Parses `div.template-content` and preserves its markup in `content`.
- Insert:
  ```js
  editor.commands.insertContent({
    type: 'templateContent',
    attrs: { content: '<div class="template-content">...template...</div>' },
  });
  ```

#### 5) ButtonWrapperNode (`plugins/ButtonWrapperNode.js`)
- Parses `div.button-wrapper` and stores the outer HTML in `content`.
- Node view ensures it doesn't double-wrap if the incoming HTML already has the `button-wrapper` class.
- Insert:
  ```js
  editor.commands.insertContent({
    type: 'buttonWrapper',
    attrs: { content: '<div class="button-wrapper">...button block...</div>' },
  });
  ```

#### 6) AffiliateButtonNode (`plugins/AffiliateButtonNode.js`)
- **Purpose**: Preserves Amazon affiliate buttons (or any buttons with `onclick` handlers) that would normally be stripped by TipTap's default sanitization.
- **Parses**: Any `<span>` element containing a `<button>` with an `onclick` attribute. This is commonly used for affiliate links, CTA buttons, etc.
- **Key features**:
  - Stores the complete HTML including inline styles and onclick handlers
  - Re-attaches onclick handlers when rendered in the editor
  - Makes the button non-editable (`contenteditable="false"`) but clickable
  - Shows a visual outline on hover to indicate it's a special node
- **HTML structure it expects**:
  ```html
  <span style="display: flex; align-items: center; ...">
    <button onclick="window.open('https://amazon.com/...', '_blank');" style="...">
      Button Text
    </button>
  </span>
  ```
- **Insert programmatically**:
  ```js
  const buttonHtml = `<span style="display: flex; align-items: center; flex-direction: column;">
    <button onclick="window.open('https://amazon.com/product', '_blank');" 
            style="height: 60px; width: 412px; background-color: #FF9900; color: white;">
      Get Discount Price
    </button>
  </span>`;
  
  editor.commands.insertAffiliateButton(buttonHtml);
  ```
- **How it works**:
  1. When TipTap parses HTML, it looks for `<span>` elements containing buttons with onclick
  2. It stores the entire outer HTML in the node's attributes
  3. When rendering, it creates a non-editable container and injects the preserved HTML
  4. It programmatically re-creates the onclick handler from the stored attribute string
  5. The button remains fully functional and clickable within the editor

#### 7) ReviewNode (`plugins/ReviewNode.js`)
- Parses testimonial/review blocks with the structure `div[id="reviews-design"]`.
- Features decorative quote marks, star ratings, and editable review text and author name.
- The review text and author name are editable while preserving the visual structure (quotes, stars, styling).
- Command helper:
  ```js
  editor.commands.setReview({
    reviewText: 'Amazing service! Highly recommend...',
    authorName: 'John D.',
    starCount: 5,
    outerStyle: 'border-radius: 17px; background-color: #F1F1F1; padding: 23px;',
  });
  ```
- Insert by HTML import (place a `div[id="reviews-design"]` block in the initial content) or programmatically:
  ```js
  editor.commands.insertContent({
    type: 'review',
    attrs: {
      reviewText: 'Your review text here...',
      authorName: 'Author Name',
      starCount: 5,
    },
  });
  ```

### Tables
Table support is provided via:
- `@tiptap/extension-table`
- `@tiptap/extension-table-row`
- `@tiptap/extension-table-cell`
- `@tiptap/extension-table-header`

These are already configured in `main.js`. Use Tiptap’s table commands (e.g., `insertTable`, `addColumnAfter`, etc.) via `editor.chain()` as needed.

### Toolbar note
`index.html` includes a set of toolbar buttons for reference/demo, but no event handlers are wired up. You can attach listeners and call `window.editor` commands to implement the behavior you want.

### Vite configuration
`vite.config.js` excludes `jquery` from dependency optimization and the production bundle. If you add jQuery-dependent code at runtime, make sure jQuery is provided externally or revise the config.

### Troubleshooting
- Ensure Node 18+ is installed (`node -v`).
- If the page is blank, check the browser console for import errors. The project uses ES modules; serve it via Vite (`npm run dev`) or a proper static server.

#### Buttons with onclick handlers getting removed?
If you're loading HTML content that contains buttons with `onclick` handlers (like Amazon affiliate buttons) and they're disappearing:

1. **Make sure `AffiliateButtonNode` is registered**: Check that `main.js` includes the `AffiliateButtonNode` in the extensions array:
   ```js
   import { AffiliateButtonNode } from './plugins/AffiliateButtonNode';
   // ...
   extensions: [
     // ... other extensions
     AffiliateButtonNode,
     // ...
   ]
   ```

2. **Check your button HTML structure**: The `AffiliateButtonNode` looks for this pattern:
   - A `<span>` element (with any styles)
   - Containing a `<button>` element with an `onclick` attribute
   
   Example:
   ```html
   <span style="display: flex; ...">
     <button onclick="window.open('https://amazon.com/...', '_blank');" style="...">
       Click Here
     </button>
   </span>
   ```

3. **Buttons not clickable?**: The buttons should be clickable within the editor. If they're not:
   - Check the browser console for JavaScript errors
   - Verify the onclick handler is properly formatted (should be valid JavaScript)
   - Make sure the CSS hasn't been modified (check that `pointer-events: auto` is set)

4. **Multiple button types?**: If you have different button structures (not just the `<span><button>` pattern), you may need to:
   - Update the `parseHTML()` rules in `AffiliateButtonNode.js` to recognize your structure
   - Or create a separate custom node for that specific button type

### License
No license file is included. Add one if you plan to distribute or open-source the project.


