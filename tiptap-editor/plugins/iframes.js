import { Node } from '@tiptap/core';

export const IframeNode = Node.create({
  name: 'iframe',

  group: 'block',

  atom: true, // Ensures the iframe is treated as a single unit

  addAttributes() {
    return {
      src: {
        default: null,
      },
      width: {
        default: '720',
      },
      height: {
        default: '404',
      },
      allowfullscreen: {
        default: 'true',
      },
      autoplay: {
        default: 'false',
      },
      disablekbcontrols: {
        default: 'false',
      },
      enableiframeapi: {
        default: 'false',
      },
      modestbranding: {
        default: 'false',
      },
      start: {
        default: '0',
      },
      endtime: {
        default: '0',
      },
      loop: {
        default: 'false',
      },
      playlist: {
        default: '',
      },
      origin: {
        default: '',
      },
      ivloadpolicy: {
        default: '0',
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'iframe',
      },
    ];
  },

  renderHTML({ node }) {
    return [
      'iframe',
      {
        src: node.attrs.src,
        width: node.attrs.width,
        height: node.attrs.height,
        allowfullscreen: node.attrs.allowfullscreen,
        autoplay: node.attrs.autoplay,
        disablekbcontrols: node.attrs.disablekbcontrols,
        enableiframeapi: node.attrs.enableiframeapi,
        modestbranding: node.attrs.modestbranding,
        start: node.attrs.start,
        endtime: node.attrs.endtime,
        loop: node.attrs.loop,
        playlist: node.attrs.playlist,
        origin: node.attrs.origin,
        ivloadpolicy: node.attrs.ivloadpolicy,
      },
    ];
  },

  addCommands() {
    return {
      setIframe:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: 'iframe',
            attrs: options,
          });
        },
    };
  },
});