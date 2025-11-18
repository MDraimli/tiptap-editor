import { Node } from '@tiptap/core';

export const ReviewNode = Node.create({
  name: 'review',

  group: 'block',

  content: 'block*',

  parseHTML() {
    return [
      {
        tag: 'div[id="reviews-design"]',
        getAttrs: (dom) => {
          // Extract the review text from the paragraph
          const reviewText = dom.querySelector('p')?.textContent || '';
          // Extract the author name
          const authorName = dom.querySelector('div[style*="font-style: italic"]')?.textContent || '';
          // Count the stars (SVG elements in the stars container)
          const starsContainer = dom.querySelector('div[style*="margin-bottom: 10px"][style*="display:flex"]');
          const starCount = starsContainer ? starsContainer.querySelectorAll('svg').length : 5;
          
          return {
            reviewText,
            authorName,
            starCount,
            outerStyle: dom.getAttribute('style') || '',
          };
        },
      },
    ];
  },

  renderHTML({ HTMLAttributes, node }) {
    const { reviewText, authorName, starCount, outerStyle } = node.attrs;
    
    // Generate star SVGs
    const starSVG = `<svg fill="#000000" height="19px" id="Capa_1" version="1.1" viewBox="0 0 47.94 47.94" width="20px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z" style="fill:#FFAE0C;"></path> </g></svg>`;
    const stars = Array(starCount).fill(starSVG).join('');

    return [
      'div',
      {
        id: 'reviews-design',
        style: outerStyle || 'border-radius: 17px; background-color: #F1F1F1; padding: 23px;',
        ...HTMLAttributes,
      },
      [
        'div',
        { style: 'background-color: white; padding: 27px; border-radius: 17px; position: relative;' },
        [
          'div',
          { style: 'position: absolute; top: 12px; left: 20px;' },
          [
            'div',
            { innerHTML: `<svg height="38.96" id="quote-left" viewBox="0 0 46.044 38.96" width="46.044" xmlns="http://www.w3.org/2000/svg"><path d="M21.251,23.022V33.647a5.291,5.291,0,0,1-5.313,5.313H5.313A5.123,5.123,0,0,1,1.55,37.41,5.123,5.123,0,0,1,0,33.647V14.167A13.8,13.8,0,0,1,1.121,8.675,14.03,14.03,0,0,1,8.675,1.121,13.8,13.8,0,0,1,14.167,0h1.771a1.7,1.7,0,0,1,1.245.526,1.7,1.7,0,0,1,.526,1.245V5.313a1.7,1.7,0,0,1-.526,1.245,1.7,1.7,0,0,1-1.245.526H14.167A6.825,6.825,0,0,0,9.159,9.159a6.825,6.825,0,0,0-2.075,5.008v.885A2.645,2.645,0,0,0,9.74,17.709h6.2a5.291,5.291,0,0,1,5.313,5.313Zm24.793,0V33.647a5.291,5.291,0,0,1-5.313,5.313H30.105a5.291,5.291,0,0,1-5.313-5.313V14.167a13.8,13.8,0,0,1,1.121-5.493,14.03,14.03,0,0,1,7.554-7.554A13.8,13.8,0,0,1,38.96,0h1.771a1.7,1.7,0,0,1,1.245.526A1.7,1.7,0,0,1,42.5,1.771V5.313a1.7,1.7,0,0,1-.526,1.245,1.7,1.7,0,0,1-1.245.526H38.96a6.825,6.825,0,0,0-5.008,2.075,6.825,6.825,0,0,0-2.075,5.008v.885a2.645,2.645,0,0,0,2.656,2.656h6.2a5.291,5.291,0,0,1,5.313,5.313Z" data-name="Path 1444" fill="#cecece" id="Path_1444" transform="translate(0 0)"></path></svg>` },
          ],
        ],
        [
          'div',
          { style: 'display: flex; flex-direction: column; align-items: center; justify-content: center; max-width: 622px; margin: auto;' },
          [
            'div',
            { class: 'review-text-content', style: 'font-size: 22px; font-weight: 500; color: #222222; font-family: sans-serif; text-align: center;' },
            0, // This is where the editable content will go
          ],
          [
            'div',
            { style: 'margin-bottom: 10px;display:flex;gap:2px', innerHTML: stars },
          ],
          [
            'div',
            { class: 'review-author-content', style: 'font-size: 18px; color: #919191; font-style: italic;' },
            authorName,
          ],
        ],
        [
          'div',
          { style: 'position: absolute; bottom: 12px; right: 20px;' },
          [
            'div',
            { innerHTML: `<svg height="38.96" viewBox="0 0 46.044 38.96" width="46.044" xmlns="http://www.w3.org/2000/svg"><g id="quote-left" transform="translate(46.044 38.96) rotate(180)"><path d="M21.251,23.022V33.647a5.291,5.291,0,0,1-5.313,5.313H5.313A5.123,5.123,0,0,1,1.55,37.41,5.123,5.123,0,0,1,0,33.647V14.167A13.8,13.8,0,0,1,1.121,8.675,14.03,14.03,0,0,1,8.675,1.121,13.8,13.8,0,0,1,14.167,0h1.771a1.7,1.7,0,0,1,1.245.526,1.7,1.7,0,0,1,.526,1.245V5.313a1.7,1.7,0,0,1-.526,1.245,1.7,1.7,0,0,1-1.245.526H14.167A6.825,6.825,0,0,0,9.159,9.159a6.825,6.825,0,0,0-2.075,5.008v.885A2.645,2.645,0,0,0,9.74,17.709h6.2a5.291,5.291,0,0,1,5.313,5.313Zm24.793,0V33.647a5.291,5.291,0,0,1-5.313,5.313H30.105a5.291,5.291,0,0,1-5.313-5.313V14.167a13.8,13.8,0,0,1,1.121-5.493,14.03,14.03,0,0,1,7.554-7.554A13.8,13.8,0,0,1,38.96,0h1.771a1.7,1.7,0,0,1,1.245.526A1.7,1.7,0,0,1,42.5,1.771V5.313a1.7,1.7,0,0,1-.526,1.245,1.7,1.7,0,0,1-1.245.526H38.96a6.825,6.825,0,0,0-5.008,2.075,6.825,6.825,0,0,0-2.075,5.008v.885a2.645,2.645,0,0,0,2.656,2.656h6.2a5.291,5.291,0,0,1,5.313,5.313Z" data-name="Path 1444" fill="#cecece" id="Path_1444" transform="translate(0 0)"></path></g></svg>` },
          ],
        ],
      ],
    ];
  },

  addNodeView() {
    return ({ node, editor, getPos }) => {
      const dom = document.createElement('div');
      dom.id = 'reviews-design';
      dom.style.cssText = node.attrs.outerStyle || 'border-radius: 17px; background-color: #F1F1F1; padding: 23px;';

      const { reviewText, authorName, starCount } = node.attrs;

      // Generate star SVGs
      const starSVG = `<svg fill="#000000" height="19px" id="Capa_1" version="1.1" viewBox="0 0 47.94 47.94" width="20px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z" style="fill:#FFAE0C;"></path> </g></svg>`;
      const stars = Array(starCount).fill(starSVG).join('');

      dom.innerHTML = `
        <div style="background-color: white; padding: 27px; border-radius: 17px; position: relative;">
          <div style="position: absolute; top: 12px; left: 20px;">
            <svg height="38.96" id="quote-left" viewBox="0 0 46.044 38.96" width="46.044" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.251,23.022V33.647a5.291,5.291,0,0,1-5.313,5.313H5.313A5.123,5.123,0,0,1,1.55,37.41,5.123,5.123,0,0,1,0,33.647V14.167A13.8,13.8,0,0,1,1.121,8.675,14.03,14.03,0,0,1,8.675,1.121,13.8,13.8,0,0,1,14.167,0h1.771a1.7,1.7,0,0,1,1.245.526,1.7,1.7,0,0,1,.526,1.245V5.313a1.7,1.7,0,0,1-.526,1.245,1.7,1.7,0,0,1-1.245.526H14.167A6.825,6.825,0,0,0,9.159,9.159a6.825,6.825,0,0,0-2.075,5.008v.885A2.645,2.645,0,0,0,9.74,17.709h6.2a5.291,5.291,0,0,1,5.313,5.313Zm24.793,0V33.647a5.291,5.291,0,0,1-5.313,5.313H30.105a5.291,5.291,0,0,1-5.313-5.313V14.167a13.8,13.8,0,0,1,1.121-5.493,14.03,14.03,0,0,1,7.554-7.554A13.8,13.8,0,0,1,38.96,0h1.771a1.7,1.7,0,0,1,1.245.526A1.7,1.7,0,0,1,42.5,1.771V5.313a1.7,1.7,0,0,1-.526,1.245,1.7,1.7,0,0,1-1.245.526H38.96a6.825,6.825,0,0,0-5.008,2.075,6.825,6.825,0,0,0-2.075,5.008v.885a2.645,2.645,0,0,0,2.656,2.656h6.2a5.291,5.291,0,0,1,5.313,5.313Z" data-name="Path 1444" fill="#cecece" id="Path_1444" transform="translate(0 0)"></path>
            </svg>
          </div>
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; max-width: 622px; margin: auto;">
            <p class="review-text-editable" contenteditable="true" style="font-size: 22px; font-weight: 500; color: #222222; font-family: sans-serif; text-align: center; margin: 0; padding: 10px; outline: none;">${reviewText}</p>
            <div style="margin-bottom: 10px;display:flex;gap:2px">${stars}</div>
            <div class="review-author-editable" contenteditable="true" style="font-size: 18px; color: #919191; font-style: italic; outline: none; padding: 5px;">${authorName}</div>
          </div>
          <div style="position: absolute; bottom: 12px; right: 20px;">
            <svg height="38.96" viewBox="0 0 46.044 38.96" width="46.044" xmlns="http://www.w3.org/2000/svg">
              <g id="quote-left" transform="translate(46.044 38.96) rotate(180)">
                <path d="M21.251,23.022V33.647a5.291,5.291,0,0,1-5.313,5.313H5.313A5.123,5.123,0,0,1,1.55,37.41,5.123,5.123,0,0,1,0,33.647V14.167A13.8,13.8,0,0,1,1.121,8.675,14.03,14.03,0,0,1,8.675,1.121,13.8,13.8,0,0,1,14.167,0h1.771a1.7,1.7,0,0,1,1.245.526,1.7,1.7,0,0,1,.526,1.245V5.313a1.7,1.7,0,0,1-.526,1.245,1.7,1.7,0,0,1-1.245.526H14.167A6.825,6.825,0,0,0,9.159,9.159a6.825,6.825,0,0,0-2.075,5.008v.885A2.645,2.645,0,0,0,9.74,17.709h6.2a5.291,5.291,0,0,1,5.313,5.313Zm24.793,0V33.647a5.291,5.291,0,0,1-5.313,5.313H30.105a5.291,5.291,0,0,1-5.313-5.313V14.167a13.8,13.8,0,0,1,1.121-5.493,14.03,14.03,0,0,1,7.554-7.554A13.8,13.8,0,0,1,38.96,0h1.771a1.7,1.7,0,0,1,1.245.526A1.7,1.7,0,0,1,42.5,1.771V5.313a1.7,1.7,0,0,1-.526,1.245,1.7,1.7,0,0,1-1.245.526H38.96a6.825,6.825,0,0,0-5.008,2.075,6.825,6.825,0,0,0-2.075,5.008v.885a2.645,2.645,0,0,0,2.656,2.656h6.2a5.291,5.291,0,0,1,5.313,5.313Z" data-name="Path 1444" fill="#cecece" id="Path_1444" transform="translate(0 0)"></path>
              </g>
            </svg>
          </div>
        </div>
      `;

      // Make text and author editable and sync changes back to the node
      const reviewTextElement = dom.querySelector('.review-text-editable');
      const authorElement = dom.querySelector('.review-author-editable');

      const updateNode = () => {
        if (typeof getPos === 'function') {
          const pos = getPos();
          const newAttrs = {
            ...node.attrs,
            reviewText: reviewTextElement.textContent,
            authorName: authorElement.textContent,
          };
          editor.view.dispatch(
            editor.view.state.tr.setNodeMarkup(pos, null, newAttrs)
          );
        }
      };

      reviewTextElement.addEventListener('blur', updateNode);
      authorElement.addEventListener('blur', updateNode);

      return {
        dom,
      };
    };
  },

  addAttributes() {
    return {
      reviewText: {
        default: 'Your review text here...',
      },
      authorName: {
        default: 'Author Name',
      },
      starCount: {
        default: 5,
      },
      outerStyle: {
        default: 'border-radius: 17px; background-color: #F1F1F1; padding: 23px;',
      },
    };
  },

  addCommands() {
    return {
      setReview:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: 'review',
            attrs: {
              reviewText: options.reviewText || 'Your review text here...',
              authorName: options.authorName || 'Author Name',
              starCount: options.starCount || 5,
              outerStyle: options.outerStyle || 'border-radius: 17px; background-color: #F1F1F1; padding: 23px;',
            },
          });
        },
    };
  },
});
