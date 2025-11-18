# Quick Start: Testing the Affiliate Button Fix

## ✅ Problem Solved!
Your Amazon affiliate buttons with `onclick` handlers will now be preserved and remain clickable in the TipTap editor!

## 🚀 Test It Now (3 Simple Steps)

### Step 1: Start the Dev Server
```bash
cd tiptap-editor
npm run dev
```

### Step 2: Open Your Browser
Visit the URL shown in terminal (usually http://localhost:5173)

### Step 3: See It Working!
You should see:
- ✅ An orange "Get Discount Price" button (Amazon affiliate button)
- ✅ The button is visible and clickable
- ✅ Clicking it opens a new tab with the Amazon link
- ✅ A dashed outline appears when you hover over it

## 📝 Using Your Own HTML

### Option 1: Replace Content in index.html
Open `tiptap-editor/index.html` and find the `<div id="content">` section. Paste your full HTML there (including all your affiliate buttons).

### Option 2: Use the Editor API
Open browser console and run:
```javascript
// Example: Insert a new affiliate button
const buttonHtml = `
<span style="display: flex; align-items: center; flex-direction: column; justify-content: center; margin-top: 10px; margin-bottom: 10px;">
  <button onclick="window.open('https://www.amazon.com/your-product?tag=your-tag', '_blank');" 
          style="height: 60px; width: 412px; border-radius: 20px; background-color: #FF9900; font-weight: 500; font-size: 18px; color: white; border: none; display: flex; align-items: center; justify-content: center;">
    Your Button Text
  </button>
</span>`;

editor.commands.insertAffiliateButton(buttonHtml);
```

## 🎯 What Was Fixed?

### Created:
1. **`plugins/AffiliateButtonNode.js`** - Custom TipTap node that preserves buttons
2. **`SOLUTION.md`** - Detailed technical documentation
3. **`QUICK_START.md`** - This file!

### Updated:
1. **`main.js`** - Registered the new AffiliateButtonNode extension
2. **`style.css`** - Added styles for button visibility and hover effects
3. **`README.md`** - Added full documentation
4. **`index.html`** - Added sample button for testing

## 🔧 How It Works

When you load HTML with affiliate buttons:
1. TipTap detects `<span>` elements containing `<button onclick="...">`
2. Stores the complete HTML (including onclick handlers)
3. Renders buttons as non-editable but clickable elements
4. Re-attaches the onclick functionality

**Result:** Your buttons work exactly as before! 🎉

## 📋 Supported Button Structure

```html
<span style="any styles here">
  <button onclick="window.open('URL', '_blank');" style="any styles">
    Button Content (text, SVG, icons, etc.)
  </button>
</span>
```

**Requirements:**
- ✅ Must be a `<span>` containing a `<button>`
- ✅ Button must have an `onclick` attribute
- ✅ onclick must be valid JavaScript

## ❓ FAQ

### Q: Can I have multiple buttons on one page?
**A:** Yes! Each button becomes its own node. Add as many as you need.

### Q: Will this work with other affiliate links (not just Amazon)?
**A:** Yes! Any button with an onclick handler will work.

### Q: Can I edit the button text?
**A:** Not directly in the editor (to preserve onclick safety). Edit in the HTML source or use the API to replace the button.

### Q: What if my buttons use a different structure?
**A:** Check `SOLUTION.md` for customization instructions, or modify the parsing rules in `AffiliateButtonNode.js`.

## 🐛 Still Having Issues?

1. **Buttons disappearing?**
   - Check browser console for errors
   - Verify button structure matches the format above
   - Make sure `AffiliateButtonNode` is in main.js extensions array

2. **Buttons not clickable?**
   - Check onclick attribute exists
   - Verify onclick contains valid JavaScript
   - Look for JavaScript errors in console

3. **Different button format?**
   - See `SOLUTION.md` for customization guide
   - Modify `parseHTML()` in `AffiliateButtonNode.js`

## 📚 More Information

- **Full Documentation:** `README.md`
- **Technical Details:** `SOLUTION.md`
- **Source Code:** `plugins/AffiliateButtonNode.js`

---

**You're all set!** The affiliate buttons will now be preserved and clickable in your TipTap editor. 🎉

