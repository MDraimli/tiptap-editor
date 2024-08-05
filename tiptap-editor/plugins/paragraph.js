import { Node } from '@tiptap/core';

export const CustomParagraph = Node.create({
  name: 'paragraph',
  content: 'inline*',
  group: 'block',
  parseHTML() {
    return [
      {
        tag: 'p',
        getAttrs: (node) => {
          const element = node instanceof HTMLElement ? node : null;
          return element ? {
            class: element.getAttribute('class'),
            id: element.getAttribute('id'),
            style: element.getAttribute('style'),
          } : {};
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ['p', HTMLAttributes, 0];
  },
  addAttributes() {
    return {
      class: {
        default: null,
      },
      id: {
        default: null,
      },
      style: {
        default: null,
      },
    };
  },
});