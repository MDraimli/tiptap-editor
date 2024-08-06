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

document.querySelector('#insert-custom-video').addEventListener('click', () => {
  const htmlContent = `<div id="vid73089839" class="media-container video" contenteditable="false"><div class="media-editor" style="display: block;">                   <div class="media-editor-wrapper">                     <a href="javascript:void(0)" class="itm itm-large" data-content="Large" data-toggle="popover" data-placement="bottom" data-trigger="hover" data-original-title="" title=""> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="28px" height="18px">                         <path fill-rule="evenodd" d="M2.000,-0.000 L26.000,-0.000 C27.105,-0.000 28.000,0.895 28.000,2.000 L28.000,16.000 C28.000,17.105 27.105,18.000 26.000,18.000 L2.000,18.000 C0.895,18.000 -0.000,17.105 -0.000,16.000 L-0.000,2.000 C-0.000,0.895 0.895,-0.000 2.000,-0.000 Z"></path>                       </svg> </a>                     <a href="javascript:void(0)" class="itm itm-medium" data-content="medium" data-toggle="popover" data-placement="bottom" data-trigger="hover" data-original-title="" title=""> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="23px" height="16px">                         <path fill-rule="evenodd" d="M2.000,-0.000 L21.000,-0.000 C22.104,-0.000 23.000,0.895 23.000,2.000 L23.000,14.000 C23.000,15.105 22.104,16.000 21.000,16.000 L2.000,16.000 C0.895,16.000 -0.000,15.105 -0.000,14.000 L-0.000,2.000 C-0.000,0.895 0.895,-0.000 2.000,-0.000 Z"></path>                       </svg> </a> <a href="javascript:void(0)" class="itm itm-small with-border active" data-content="small" data-toggle="popover" data-placement="bottom" data-trigger="hover" data-original-title="" title=""> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19px" height="14px">                         <path fill-rule="evenodd" d="M2.000,-0.000 L17.000,-0.000 C18.105,-0.000 19.000,0.895 19.000,2.000 L19.000,12.000 C19.000,13.105 18.105,14.000 17.000,14.000 L2.000,14.000 C0.895,14.000 -0.000,13.105 -0.000,12.000 L-0.000,2.000 C-0.000,0.895 0.895,-0.000 2.000,-0.000 Z"></path>                       </svg> </a> <a href="javascript:void(0)" class="itm itm-alignLeft" data-content="Align Left" data-toggle="popover" data-placement="bottom" data-trigger="hover" data-original-title="" title=""> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19px" height="16px">                         <path fill-rule="evenodd" d="M18.908,15.901 C18.841,15.974 18.761,16.009 18.669,16.009 L0.348,16.009 C0.256,16.009 0.176,15.974 0.109,15.901 C0.042,15.829 0.008,15.744 0.008,15.645 L0.008,13.461 C0.008,13.362 0.042,13.277 0.109,13.205 C0.176,13.133 0.256,13.097 0.348,13.097 L18.669,13.097 C18.761,13.097 18.841,13.133 18.908,13.205 C18.975,13.277 19.009,13.362 19.009,13.461 L19.009,15.645 C19.009,15.744 18.975,15.829 18.908,15.901 ZM18.669,11.640 L7.133,11.640 C7.042,11.640 6.962,11.605 6.895,11.533 C6.828,11.460 6.794,11.375 6.794,11.276 L6.794,9.092 C6.794,8.994 6.828,8.908 6.895,8.836 C6.962,8.764 7.042,8.728 7.133,8.728 L18.669,8.728 C18.761,8.728 18.841,8.764 18.908,8.836 C18.975,8.908 19.009,8.994 19.009,9.092 L19.009,11.276 C19.009,11.375 18.975,11.460 18.908,11.533 C18.841,11.605 18.761,11.640 18.669,11.640 ZM18.669,7.272 L7.133,7.272 C7.042,7.272 6.962,7.236 6.895,7.164 C6.828,7.092 6.794,7.006 6.794,6.908 L6.794,4.723 C6.794,4.625 6.828,4.539 6.895,4.467 C6.962,4.395 7.042,4.359 7.133,4.359 L18.669,4.359 C18.761,4.359 18.841,4.395 18.908,4.467 C18.975,4.539 19.009,4.625 19.009,4.723 L19.009,6.908 C19.009,7.006 18.975,7.092 18.908,7.164 C18.841,7.236 18.761,7.272 18.669,7.272 ZM0.348,4.359 C0.447,4.359 0.528,4.393 0.592,4.462 L3.645,7.738 C3.709,7.806 3.741,7.894 3.741,8.000 C3.741,8.106 3.709,8.193 3.645,8.262 L0.592,11.538 C0.528,11.606 0.447,11.640 0.348,11.640 C0.256,11.640 0.176,11.605 0.109,11.533 C0.042,11.460 0.009,11.375 0.009,11.276 L0.009,4.723 C0.009,4.625 0.042,4.539 0.109,4.467 C0.176,4.395 0.256,4.359 0.348,4.359 ZM18.669,2.903 L0.348,2.903 C0.256,2.903 0.176,2.867 0.109,2.795 C0.042,2.723 0.008,2.637 0.008,2.539 L0.008,0.354 C0.008,0.256 0.042,0.171 0.109,0.098 C0.176,0.026 0.256,-0.010 0.348,-0.010 L18.669,-0.010 C18.761,-0.010 18.841,0.026 18.908,0.098 C18.975,0.171 19.009,0.256 19.009,0.354 L19.009,2.539 C19.009,2.637 18.975,2.723 18.908,2.795 C18.841,2.867 18.761,2.903 18.669,2.903 Z"></path>                       </svg> </a> <a href="javascript:void(0)" class="itm itm-alignCenter active" data-content="Align Center" data-toggle="popover" data-placement="bottom" data-trigger="hover" data-original-title="" title=""> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="15px">                         <path fill-rule="evenodd" d="M-0.000,15.000 L-0.000,12.000 L18.000,12.000 L18.000,15.000 L-0.000,15.000 ZM4.000,11.000 L4.000,8.000 L14.000,8.000 L14.000,11.000 L4.000,11.000 ZM2.000,4.000 L17.000,4.000 L17.000,7.000 L2.000,7.000 L2.000,4.000 ZM4.000,-0.000 L14.000,-0.000 L14.000,3.000 L4.000,3.000 L4.000,-0.000 Z"></path>                       </svg> </a> <a href="javascript:void(0)" class="itm itm-alignRight with-border" data-content="Align Right" data-toggle="popover" data-placement="bottom" data-trigger="hover" data-original-title="" title=""> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19px" height="16px">                         <path fill-rule="evenodd" d="M18.891,15.901 C18.824,15.974 18.744,16.009 18.652,16.009 L0.331,16.009 C0.239,16.009 0.159,15.974 0.092,15.901 C0.025,15.829 -0.009,15.744 -0.009,15.645 L-0.009,13.461 C-0.009,13.362 0.025,13.277 0.092,13.205 C0.159,13.133 0.239,13.097 0.331,13.097 L18.652,13.097 C18.744,13.097 18.824,13.133 18.891,13.205 C18.958,13.277 18.991,13.362 18.991,13.461 L18.991,15.645 C18.991,15.744 18.958,15.829 18.891,15.901 ZM18.652,4.359 C18.744,4.359 18.823,4.395 18.891,4.467 C18.958,4.539 18.991,4.625 18.991,4.723 L18.991,11.276 C18.991,11.375 18.958,11.460 18.891,11.533 C18.823,11.605 18.744,11.640 18.652,11.640 C18.553,11.640 18.472,11.606 18.408,11.538 L15.355,8.262 C15.291,8.193 15.259,8.106 15.259,8.000 C15.259,7.894 15.291,7.806 15.355,7.738 L18.408,4.462 C18.472,4.393 18.553,4.359 18.652,4.359 ZM18.652,2.903 L0.331,2.903 C0.239,2.903 0.159,2.867 0.092,2.795 C0.025,2.723 -0.009,2.637 -0.009,2.539 L-0.009,0.354 C-0.009,0.256 0.025,0.171 0.092,0.098 C0.159,0.026 0.239,-0.010 0.331,-0.010 L18.652,-0.010 C18.744,-0.010 18.824,0.026 18.891,0.098 C18.958,0.171 18.991,0.256 18.991,0.354 L18.991,2.539 C18.991,2.637 18.958,2.723 18.891,2.795 C18.824,2.867 18.744,2.903 18.652,2.903 ZM0.331,4.359 L11.866,4.359 C11.958,4.359 12.038,4.395 12.105,4.467 C12.172,4.539 12.206,4.625 12.206,4.723 L12.206,6.908 C12.206,7.006 12.172,7.092 12.105,7.164 C12.038,7.236 11.958,7.272 11.866,7.272 L0.331,7.272 C0.239,7.272 0.159,7.236 0.092,7.164 C0.025,7.092 -0.009,7.006 -0.009,6.908 L-0.009,4.723 C-0.009,4.625 0.025,4.539 0.092,4.467 C0.159,4.395 0.239,4.359 0.331,4.359 ZM0.331,8.728 L11.866,8.728 C11.958,8.728 12.038,8.764 12.105,8.836 C12.172,8.908 12.206,8.994 12.206,9.092 L12.206,11.276 C12.206,11.375 12.172,11.460 12.105,11.533 C12.038,11.605 11.958,11.640 11.866,11.640 L0.331,11.640 C0.239,11.640 0.159,11.605 0.092,11.533 C0.025,11.460 -0.009,11.375 -0.009,11.276 L-0.009,9.092 C-0.009,8.994 0.025,8.908 0.092,8.836 C0.159,8.764 0.239,8.728 0.331,8.728 Z"></path>                       </svg> </a> <a href="javascript:void(0)" class="itm itm-update" data-content="update" data-toggle="popover" data-placement="bottom" data-trigger="hover" data-target="#videoElementModal" data-original-title="" title=""> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px">                         <path fill-rule="evenodd" d="M17.493,0.489 C18.151,1.149 18.150,2.218 17.493,2.878 L16.698,3.673 L14.314,1.285 L15.108,0.489 C15.767,-0.170 16.834,-0.170 17.493,0.489 ZM5.573,10.041 L4.779,13.225 L7.957,12.429 L15.904,4.469 L13.519,2.081 L5.573,10.041 ZM13.491,8.478 L13.491,15.754 L2.253,15.754 L2.253,4.497 L9.518,4.497 L11.765,2.246 L0.006,2.246 L0.006,18.005 L15.739,18.005 L15.739,6.226 L13.491,8.478 Z"></path>                       </svg> </a> <a href="javascript:void(0)" class="itm itm-remove" data-content="remove" data-toggle="popover" data-placement="bottom" data-trigger="hover" data-original-title="" title=""> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14px" height="14px">                         <path fill-rule="evenodd" d="M9.014,7.224 C8.886,7.096 8.886,6.904 9.014,6.776 L13.808,1.982 C13.936,1.854 14.000,1.662 14.000,1.534 C14.000,1.406 13.936,1.215 13.808,1.087 L12.913,0.192 C12.785,0.064 12.594,-0.000 12.466,-0.000 C12.274,-0.000 12.146,0.064 12.018,0.192 L7.224,4.986 C7.096,5.114 6.904,5.114 6.776,4.986 L1.982,0.192 C1.854,0.064 1.662,-0.000 1.534,-0.000 C1.406,-0.000 1.215,0.064 1.087,0.192 L0.192,1.087 C0.064,1.215 -0.000,1.406 -0.000,1.534 C-0.000,1.662 0.064,1.854 0.192,1.982 L4.986,6.776 C5.114,6.904 5.114,7.096 4.986,7.224 L0.192,12.018 C0.064,12.146 -0.000,12.338 -0.000,12.466 C-0.000,12.594 0.064,12.785 0.192,12.913 L1.087,13.808 C1.215,13.936 1.406,14.000 1.534,14.000 C1.662,14.000 1.854,13.936 1.982,13.808 L6.776,9.014 C6.904,8.886 7.096,8.886 7.224,9.014 L12.018,13.808 C12.146,13.936 12.338,14.000 12.466,14.000 C12.594,14.000 12.785,13.936 12.913,13.808 L13.808,12.913 C13.936,12.785 14.000,12.594 14.000,12.466 C14.000,12.338 13.936,12.146 13.808,12.018 L9.014,7.224 Z"></path>                       </svg> </a> </div>                 </div>                 <div class="elementVideoHolder">                   <div class="videoPlaceHolder darkGrey videoToBeEdited">                     <i class="glyphicon glyphicon-play-circle"></i>                     <div class="embed-responsive embed-responsive-16by9">                       <iframe class="embed-responsive-item"></iframe>                       <div style="display:none;" class="customEmbedCode">                       </div>                     </div>                   </div>                 </div>                 <div class="media-container-overlay" contenteditable="false">                   <div class="media-container-overlay-inner" contenteditable="false">                     <a class="videoModalTrigger" data-target="#videoElementModal" data-toggle="modal"><i class="glyphicon glyphicon-edit"></i> Update</a>                   </div>                 </div>              </div>`;

  editor.chain().focus().insertContent({
    type: 'customMedia',
    attrs: {
      content: htmlContent,
    },
  }).run();
});

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