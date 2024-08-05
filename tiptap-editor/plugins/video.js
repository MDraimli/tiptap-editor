import { Node } from '@tiptap/core';

export const Video = Node.create({
  name: 'video',
  group: 'block',
  draggable: true,

  addAttributes() {
    return {
      src: {
        default: null,
      },
      controls: {
        default: true,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'figure.wp-block-video',
        getAttrs: (dom) => ({
          src: dom.querySelector('video')?.getAttribute('src'),
          controls: dom.querySelector('video')?.hasAttribute('controls'),
        }),
      },
    ];
  },

  renderHTML({ node }) {
    return [
      'figure',
      { class: 'wp-block-video' },
      ['video', { src: node.attrs.src, controls: node.attrs.controls ? '' : null }],
    ];
  },
});