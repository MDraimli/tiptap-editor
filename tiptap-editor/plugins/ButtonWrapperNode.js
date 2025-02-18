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

      /// check if node.attrs.content has class button-wrapper
      if (node.attrs.content.includes('button-wrapper')) {
        /// remove the class button-wrapper element
        const dom = document.createElement('div');
        dom.innerHTML = node.attrs.content;
        return {
          dom: dom.firstChild,
        };
      }

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

