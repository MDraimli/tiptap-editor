import { Node } from '@tiptap/core';

export const ButtonWrapperNode = Node.create({
  name: 'buttonWrapper',

  group: 'block',

  content: 'block*',

  parseHTML() {
    return [
      {
        tag: 'div.button-wrapper',
        getAttrs: (dom) => ({
          content: dom.outerHTML,
        }),
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', { class: 'button-wrapper', ...HTMLAttributes }, 0];
  },

  addNodeView() {
    return ({ node }) => {
      const dom = document.createElement('div');
      dom.classList.add('button-wrapper');
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

