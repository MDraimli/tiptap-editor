import { Node } from '@tiptap/core';

export const CustomLink = Node.create({
  name: 'customLink',
  group: 'inline',
  inline: true,
  selectable: false,
  atom: true,
  parseHTML() {
    return [
      {
        tag: 'a[href]',
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ['a', HTMLAttributes, 0];
  },
  addAttributes() {
    return {
      href: {
        default: null,
        parseHTML: element => element.getAttribute('href'),
        renderHTML: attributes => {
          if (!attributes.href) return {};
          return { href: attributes.href };
        },
      },
      class: {
        default: null,
        parseHTML: element => element.getAttribute('class'),
        renderHTML: attributes => {
          if (!attributes.class) return {};
          return { class: attributes.class };
        },
      },
      'data-target': {
        default: null,
        parseHTML: element => element.getAttribute('data-target'),
        renderHTML: attributes => {
          if (!attributes['data-target']) return {};
          return { 'data-target': attributes['data-target'] };
        },
      },
      'data-toggle': {
        default: null,
        parseHTML: element => element.getAttribute('data-toggle'),
        renderHTML: attributes => {
          if (!attributes['data-toggle']) return {};
          return { 'data-toggle': attributes['data-toggle'] };
        },
      },
    };
  },
});