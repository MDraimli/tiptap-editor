import { Node, mergeAttributes } from '@tiptap/core';

export const AffiliateButtonNode = Node.create({
  name: 'affiliateButton',

  group: 'block',

  atom: true,

  draggable: true,

  parseHTML() {
    return [
      {
        tag: 'span',
        getAttrs: (dom) => {
          // Check if this span contains a button with onclick
          const button = dom.querySelector('button[onclick]');
          if (!button) return false;
          
          // Store the entire outer HTML to preserve everything
          return {
            spanStyle: dom.getAttribute('style') || '',
            fullHtml: dom.outerHTML,
          };
        },
        priority: 100, // Higher priority to parse before other nodes
      },
      {
        tag: 'div[data-affiliate-button]',
        getAttrs: (dom) => {
          return {
            spanStyle: dom.getAttribute('data-style') || '',
            fullHtml: dom.getAttribute('data-html') || '',
          };
        },
        priority: 100,
      }
    ];
  },

  renderHTML({ node, HTMLAttributes }) {
    return ['div', mergeAttributes(HTMLAttributes, { 
      'data-affiliate-button': 'true',
      'data-style': node.attrs.spanStyle,
      'data-html': node.attrs.fullHtml,
      class: 'affiliate-button-node',
    })];
  },

  addNodeView() {
    return ({ node }) => {
      const container = document.createElement('div');
      container.setAttribute('data-affiliate-button-container', 'true');
      container.setAttribute('contenteditable', 'false');
      container.style.cursor = 'pointer';
      
      // Create the span and button from stored HTML
      if (node.attrs.fullHtml) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = node.attrs.fullHtml;
        const spanElement = tempDiv.firstChild;
        
        if (spanElement) {
          container.appendChild(spanElement);
          
          // Re-attach onclick handlers to buttons
          const buttons = container.querySelectorAll('button[onclick]');
          buttons.forEach(button => {
            const onclickAttr = button.getAttribute('onclick');
            if (onclickAttr) {
              try {
                // Create a function from the onclick string
                const fn = new Function('event', onclickAttr);
                button.onclick = fn;
              } catch (e) {
                console.error('Error creating onclick handler:', e);
              }
            }
          });
        }
      }

      return {
        dom: container,
        contentDOM: null,
        ignoreMutation: () => true, // Ignore all mutations to preserve the button
      };
    };
  },

  addAttributes() {
    return {
      spanStyle: {
        default: '',
      },
      fullHtml: {
        default: '',
      },
    };
  },

  addCommands() {
    return {
      insertAffiliateButton: (html) => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: {
            fullHtml: html,
            spanStyle: '',
          },
        });
      },
    };
  },
});

