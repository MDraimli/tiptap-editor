import { Node } from '@tiptap/core';

export const CustomMediaNode = Node.create({
  name: 'customMedia',

  group: 'block',

  content: 'block*',

  parseHTML() {
    return [
      {
        tag: 'div.media-container',
        getAttrs: (dom) => ({
          content: dom.outerHTML,
        }),
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', { class: 'media-container', ...HTMLAttributes }, 0];
  },

  addNodeView() {
    return ({ node }) => {
      const dom = document.createElement('div');
      dom.classList.add('media-container');
      dom.innerHTML = node.attrs.content;
      return {
        dom,
      };
    };
  },

  addAttributes() {
    return {
      content: {
        default: '',
      },
    };
  },
});

