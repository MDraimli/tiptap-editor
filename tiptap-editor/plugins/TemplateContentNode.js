import { Node } from '@tiptap/core';

export const TemplateContentNode = Node.create({
  name: 'templateContent',

  group: 'block',

  content: 'block*',

  parseHTML() {
    return [
      {
        tag: 'div.template-content',
        getAttrs: (dom) => ({
          content: dom.outerHTML,
        }),
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', { class: 'template-content', ...HTMLAttributes }, 0];
  },

  addNodeView() {
    return ({ node }) => {
      const dom = document.createElement('div');
      dom.classList.add('template-content');
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

