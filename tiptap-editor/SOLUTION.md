# Solution: Preserving Amazon Affiliate Buttons in TipTap Editor

## Problem
Amazon affiliate buttons with `onclick` handlers were being removed when HTML content was loaded into the TipTap editor. This happened because:
1. TipTap doesn't recognize `<button>` tags by default
2. The `onclick` attribute is stripped for security reasons
3. The specific HTML structure wasn't being parsed by any existing custom node

## Solution
I created a new custom TipTap node called **`AffiliateButtonNode`** that:
- Preserves the entire HTML structure of buttons with onclick handlers
- Re-attaches onclick functionality when rendering in the editor
- Makes buttons clickable within the editor
- Shows visual feedback when hovering over buttons

## Files Created/Modified

### 1. New Plugin: `plugins/AffiliateButtonNode.js`
This is the core of the solution. It:
- Parses `<span>` elements containing `<button>` tags with `onclick` attributes
- Stores the complete HTML in node attributes
- Renders buttons as non-editable but clickable elements
- Programmatically recreates onclick handlers from stored strings

### 2. Updated: `main.js`
Added the new extension to the editor:
```javascript
import { AffiliateButtonNode } from './plugins/AffiliateButtonNode';

extensions: [
  // ... other extensions
  AffiliateButtonNode,
  // ...
]
```

### 3. Updated: `style.css`
Added CSS rules to:
- Make buttons visible and clickable
- Show hover effects for better UX
- Prevent selection issues

### 4. Updated: `index.html`
Added a sample Amazon affiliate button for testing purposes

### 5. Updated: `README.md`
Comprehensive documentation including:
- How the node works
- Usage examples
- Troubleshooting guide

## How to Test

1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **Open the browser** (usually http://localhost:5173)

3. **You should see:**
   - A sample Amazon affiliate button (orange "Get Discount Price" button)
   - The button should be clickable
   - Hovering over it shows a dashed outline
   - Clicking opens Amazon in a new tab

4. **Test with your own HTML:**
   Replace the content in `index.html` with your full HTML containing buttons, or use the editor API:
   ```javascript
   // In browser console
   const buttonHtml = `<span style="display: flex; ...">
     <button onclick="window.open('https://amazon.com/...', '_blank');">
       Button Text
     </button>
   </span>`;
   
   editor.commands.insertAffiliateButton(buttonHtml);
   ```

## What Button Structure Works?

The node recognizes this pattern:
```html
<span style="...any styles...">
  <button onclick="...any valid JavaScript..." style="...">
    Button content (text, SVG, etc.)
  </button>
</span>
```

**Key requirements:**
- Must be a `<span>` containing a `<button>`
- The `<button>` must have an `onclick` attribute
- The onclick value must be valid JavaScript

## How It Works Technically

1. **Parsing Phase** (when HTML is loaded):
   - TipTap scans the HTML for `<span>` elements
   - `AffiliateButtonNode.parseHTML()` checks if the span contains a button with onclick
   - If found, it stores the complete outer HTML as a node attribute

2. **Rendering Phase** (display in editor):
   - `addNodeView()` creates a non-editable container
   - Injects the preserved HTML
   - Re-creates the onclick handler by converting the string to a function

3. **User Interaction**:
   - The button is clickable (opens links)
   - The container shows a visual outline on hover
   - The button cannot be edited directly (prevents accidental changes)

## Customization

### Support Different Button Structures?
Edit `plugins/AffiliateButtonNode.js` and modify the `parseHTML()` rules:

```javascript
parseHTML() {
  return [
    {
      tag: 'span',  // Change to match your structure
      getAttrs: (dom) => {
        // Add your custom logic here
        const button = dom.querySelector('button[onclick]');
        if (!button) return false;
        
        return {
          spanStyle: dom.getAttribute('style') || '',
          fullHtml: dom.outerHTML,
        };
      },
    },
    // Add more parsing rules if needed
  ];
}
```

### Change Visual Styling?
Edit `style.css` and modify these rules:
```css
[data-affiliate-button-container]:hover {
  outline: 2px dashed #3598db;  /* Change color/style */
}
```

## Troubleshooting

### Buttons still getting removed?
1. Check browser console for errors
2. Verify `AffiliateButtonNode` is imported and registered in `main.js`
3. Ensure your button HTML matches the expected structure

### Buttons not clickable?
1. Check if onclick attribute exists in the original HTML
2. Look for JavaScript errors in browser console
3. Verify the onclick code is valid JavaScript

### Multiple buttons on the page?
The node handles multiple buttons automatically. Each button becomes its own node instance.

### Want to edit button text?
Currently buttons are non-editable by design (to preserve onclick). To allow editing:
- You'd need to parse the button content separately
- Store text/SVG separately from the onclick
- Use a more complex node view with editable regions

## Next Steps

The solution is ready to use! You can:
1. Test with your existing HTML content
2. Customize the parsing rules if needed
3. Add more button types by extending the parseHTML rules
4. Integrate into your production workflow

## Questions?

Refer to:
- `README.md` - Full project documentation
- `plugins/AffiliateButtonNode.js` - Source code with comments
- TipTap docs: https://tiptap.dev/docs/editor/guide/custom-extensions

