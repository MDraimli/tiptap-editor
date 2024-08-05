
import { Node } from '@tiptap/core';

export const CustomI = Node.create({
  name: 'customI',
  group: 'inline',
  inline: true,
  parseHTML() {
    return [
      {
        tag: 'i',
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ['i', HTMLAttributes, 0];
  },
  addAttributes() {
    return {
      class: {
        default: null,
        parseHTML: element => element.getAttribute('class'),
        renderHTML: attributes => {
          if (!attributes.class) return {};
          return { class: attributes.class };
        },
      },
    };
  },
});