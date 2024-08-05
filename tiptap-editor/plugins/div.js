import { Node } from '@tiptap/core';

export const CustomDiv = Node.create({
  name: 'customDiv',
  group: 'block',
  content: 'block*',
  parseHTML() {
    return [
      {
        tag: 'div',
      },
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ['div', HTMLAttributes, 0];
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
      id: {
        default: null,
        parseHTML: element => element.getAttribute('id'),
        renderHTML: attributes => {
          if (!attributes.id) return {};
          return { id: attributes.id };
        },
      },
      style: {
        default: null,
        parseHTML: element => element.getAttribute('style'),
        renderHTML: attributes => {
          if (!attributes.style) return {};
          return { style: attributes.style };
        },
      },
      'data-elementcontrolname': {
        default: null,
        parseHTML: element => element.getAttribute('data-elementcontrolname'),
        renderHTML: attributes => {
          if (!attributes['data-elementcontrolname']) return {};
          return { 'data-elementcontrolname': attributes['data-elementcontrolname'] };
        },
      },
      'data-elementcontrolicon': {
        default: null,
        parseHTML: element => element.getAttribute('data-elementcontrolicon'),
        renderHTML: attributes => {
          if (!attributes['data-elementcontrolicon']) return {};
          return { 'data-elementcontrolicon': attributes['data-elementcontrolicon'] };
        },
      },
      'data-id': {
        default: null,
        parseHTML: element => element.getAttribute('data-id'),
        renderHTML: attributes => {
          if (!attributes['data-id']) return {};
          return { 'data-id': attributes['data-id'] };
        },
      },
      'data-customelementtype': {
        default: null,
        parseHTML: element => element.getAttribute('data-customelementtype'),
        renderHTML: attributes => {
          if (!attributes['data-customelementtype']) return {};
          return { 'data-customelementtype': attributes['data-customelementtype'] };
        },
      },
      'data-customelementcode': {
        default: null,
        parseHTML: element => element.getAttribute('data-customelementcode'),
        renderHTML: attributes => {
          if (!attributes['data-customelementcode']) return {};
          return { 'data-customelementcode': attributes['data-customelementcode'] };
        },
      },
    };
  },
});