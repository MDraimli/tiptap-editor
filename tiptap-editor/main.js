import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import { Link } from '@tiptap/extension-link';
import { Underline } from '@tiptap/extension-underline';
import { Highlight } from '@tiptap/extension-highlight';
import { TextAlign } from '@tiptap/extension-text-align';
import { Text } from '@tiptap/extension-text';
import { HorizontalRule } from '@tiptap/extension-horizontal-rule';
import { Image } from '@tiptap/extension-image'
import { Video } from './plugins/video';
import {CustomMediaNode} from './plugins/CustomMediaNode';

const editor = new Editor({
  element: document.querySelector('#new-content'),
  extensions: [
    StarterKit,
    Link,
    Underline,
    Highlight,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    Text,
    HorizontalRule,
    Image,
    Video,
    CustomMediaNode
  ],
  content: setContentHtml(),
});

function setContentHtml (){
  const content = document.querySelector('#new-content').innerHTML;
  document.querySelector('#new-content').innerHTML = "";
  return content;
}

document.querySelector('#insert-custom-image').addEventListener('click', () => {
  const htmlContent = `
    <div id="img9766412" class="media-container image uploadingArea" contenteditable="false">
      <div class="media-editor" style="display: none;">
        <!-- Your content -->
      </div>
      <div>
        <img src="https://my.funnelpages.com/user-data/gallery/24/96803.png" class="image" alt="" data-imglink="">
        <div class="media-container-overlay" contenteditable="false">
          <div class="media-container-overlay-inner" contenteditable="false">
            <a href="#" class="gallerypopup upload-img dynamic-gallery parent-window">
              <i class="glyphicon glyphicon-edit"></i> Update
            </a>
          </div>
        </div>
      </div>
    </div>`;

  editor.chain().focus().insertContent({
    type: 'customMedia',
    attrs: {
      content: htmlContent,
    },
  }).run();
});


document.querySelector('#bold').addEventListener('click', () => {
  editor.chain().focus().toggleBold().run();
  checkBoldActive();
});

document.querySelector('#italic').addEventListener('click', () => {
  editor.chain().focus().toggleItalic().run();
  checkItalicActive();
});

document.querySelector('#underline').addEventListener('click', () => {
  editor.chain().focus().toggleUnderline().run();
  checkUnderlineActive();
});

document.querySelector('#strike').addEventListener('click', () => {
  editor.chain().focus().toggleStrike().run();
  checkStrikeActive();
});

document.querySelector('#link').addEventListener('click', () => {
  let url = prompt('Enter the URL');
  /// set link url
  editor.chain().focus().setLink({ href: url }).run();
  checkLinkActive();
});

document.querySelector('#code').addEventListener('click', () => {
  editor.chain().focus().toggleCode().run();
  checkCodeActive();
});

document.querySelector('#blockquote').addEventListener('click', () => {
  editor.chain().focus().toggleBlockquote().run();
  checkBlockquoteActive();
});

document.querySelector('#bullet_list').addEventListener('click', () => {
  editor.chain().focus().toggleBulletList().run();
  checkBulletListActive();
});

document.querySelector('#ordered_list').addEventListener('click', () => {
  editor.chain().focus().toggleOrderedList().run();
  checkOrderedListActive();
});

document.querySelector('#heading1').addEventListener('click', () => {
  editor.chain().focus().toggleHeading({ level: 1 }).run();
  checkHeadingActive(1);
});

document.querySelector('#heading2').addEventListener('click', () => {
  editor.chain().focus().toggleHeading({ level: 2 }).run();
  checkHeadingActive(2);
});

document.querySelector('#heading3').addEventListener('click', () => {
  editor.chain().focus().toggleHeading({ level: 3 }).run();
  checkHeadingActive(3);
});

document.querySelector('#heading4').addEventListener('click', () => {
  editor.chain().focus().toggleHeading({ level: 4 }).run();
  checkHeadingActive(4);
});

document.querySelector('#heading5').addEventListener('click', () => {
  editor.chain().focus().toggleHeading({ level: 5 }).run();
  checkHeadingActive(5);
});

document.querySelector('#heading6').addEventListener('click', () => {
  editor.chain().focus().toggleHeading({ level: 6 }).run();
  checkHeadingActive(6);
});

document.querySelector('#undo').addEventListener('click', () => {
  editor.chain().focus().undo().run();
  checkUndoActive();
});

document.querySelector('#redo').addEventListener('click', () => {
  editor.chain().focus().redo().run();
  checkRedoActive();
});

document.querySelector('#horizontal_rule').addEventListener('click', () => {
  editor.chain().focus().setHorizontalRule().run();
});

document.querySelector('#line_break').addEventListener('click', () => {
  editor.chain().focus().insertContent('<br>').run();
});


document.querySelector('#highlight').addEventListener('click', () => {
  if (editor.isActive('highlight')) {
    editor.chain().focus().unsetHighlight().run();
  }
  else {
    const color = prompt('Enter the highlight color (e.g., yellow, #ff0)'); // You can use a color picker instead
    if (color) {
      editor.chain().focus().setHighlight({ color }).run();
    }
  }
  checkHighlightActive();
});

document.querySelector('#align-left').addEventListener('click', () => {
  console.log('align-left');
  editor.chain().focus().setTextAlign('left').run();
  checkAlignmentActive();
});

document.querySelector('#align-center').addEventListener('click', () => {
  console.log('align-center');

  editor.chain().focus().setTextAlign('center').run();
  checkAlignmentActive();
});

document.querySelector('#align-right').addEventListener('click', () => {
  console.log('align-right');
  editor.chain().focus().setTextAlign('right').run();
  checkAlignmentActive();
});

document.querySelector('#align-justify').addEventListener('click', () => {
  console.log('align-justify');
  editor.chain().focus().setTextAlign('justify').run();
  checkAlignmentActive();
});



editor.on('selectionUpdate', ({ editor }) => {
  checkBoldActive();
  checkItalicActive();
  checkUnderlineActive();
  checkStrikeActive();
  checkLinkActive();
  checkCodeActive();
  checkBlockquoteActive();
  checkBulletListActive();
  checkOrderedListActive();
  checkHeadingActive(1);
  checkHeadingActive(2);
  checkHeadingActive(3);
  checkHeadingActive(4);
  checkHeadingActive(5);
  checkHeadingActive(6);
  checkUndoActive();
  checkRedoActive();
  checkHighlightActive();
  checkAlignmentActive();
});

const checkBoldActive = () => {
  const isActive = editor.isActive('bold');
  document.querySelector('#bold').classList.toggle('active', isActive);
}

const checkItalicActive = () => {
  const isActive = editor.isActive('italic');
  document.querySelector('#italic').classList.toggle('active', isActive);
}

const checkUnderlineActive = () => {
  const isActive = editor.isActive('underline');
  document.querySelector('#underline').classList.toggle('active', isActive);
}

const checkStrikeActive = () => {
  const isActive = editor.isActive('strike');
  document.querySelector('#strike').classList.toggle('active', isActive);
}

const checkLinkActive = () => {
  const isActive = editor.isActive('link');
  document.querySelector('#link').classList.toggle('active', isActive);
}

const checkCodeActive = () => {
  const isActive = editor.isActive('code');
  document.querySelector('#code').classList.toggle('active', isActive);
}

const checkBlockquoteActive = () => {
  const isActive = editor.isActive('blockquote');
  document.querySelector('#blockquote').classList.toggle('active', isActive);
}

const checkBulletListActive = () => {
  const isActive = editor.isActive('bulletList');
  document.querySelector('#bullet_list').classList.toggle('active', isActive);
}

const checkOrderedListActive = () => {
  const isActive = editor.isActive('orderedList');
  document.querySelector('#ordered_list').classList.toggle('active', isActive);
}

const checkHeadingActive = (level) => {
  const isActive = editor.isActive('heading', { level });
  document.querySelector(`#heading${level}`).classList.toggle('active', isActive);
}

const checkUndoActive = () => {
  const isActive = editor.can().undo();
  document.querySelector('#undo').classList.toggle('active', isActive);
}

const checkRedoActive = () => {
  const isActive = editor.can().redo();
  document.querySelector('#redo').classList.toggle('active', isActive);
}

const checkHighlightActive = () => {
  const isActive = editor.isActive('highlight');
  document.querySelector('#highlight').classList.toggle('active', isActive);
};

const checkAlignmentActive = () => {
  const alignment = editor.getAttributes('paragraph').textAlign;
  document.querySelector('#align-left').classList.toggle('active', alignment === 'left');
  document.querySelector('#align-center').classList.toggle('active', alignment === 'center');
  document.querySelector('#align-right').classList.toggle('active', alignment === 'right');
  document.querySelector('#align-justify').classList.toggle('active', alignment === 'justify');
};


console.log('TextAlign Extension:', TextAlign.config);


/// get selected text
const getSelectionCoordinates = () => {
  const selection = window.getSelection();
  if (!selection.rangeCount) return;

  const range = selection.getRangeAt(0);
  const rect = range.getBoundingClientRect();

  return {
    x: rect.left + window.scrollX,
    y: rect.top + window.scrollY
  };
};

// Event listener for text selection
editor.on('selectionUpdate', ({ editor }) => {
  const { from, to } = editor.state.selection;
  if (from !== to) { // Check if there is a selection
    const selectedText = editor.state.doc.textBetween(from, to);
    const coords = getSelectionCoordinates();

    console.log('Selected text:', selectedText);
    console.log('Selection starts at:', from);
    console.log('Selection ends at:', to);
    console.log('Selection position - x:', coords?.x, 'y:', coords?.y);
  }
});




// editor.on('selectionUpdate', () => {
//   const { state } = editor;
//   const { selection, doc } = state;
//   const { from, to } = selection;

//   doc.nodesBetween(from, to, (node, pos) => {
//     if (node.type.name === 'image') {
//       const img = editor.view.dom.querySelector(`img[src="${node.attrs.src}"]`);
//       if (img) {
//         img.classList.add('selected-image');
//         console.log('image selected');
//       }
//     } else {
//       const imgs = editor.view.dom.querySelectorAll('img.selected-image');
//       imgs.forEach(img => img.classList.remove('selected-image'));
//       console.log('image unselected');
//     }
//   });
// });