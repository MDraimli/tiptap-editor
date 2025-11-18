import { Editor } from '@tiptap/core'
import StarterKit from '@tiptap/starter-kit'
import { Link } from '@tiptap/extension-link';
import { Underline } from '@tiptap/extension-underline';
import { Highlight } from '@tiptap/extension-highlight';
import { TextAlign } from '@tiptap/extension-text-align';
import { Text } from '@tiptap/extension-text';
import { HorizontalRule } from '@tiptap/extension-horizontal-rule';
import { Image } from '@tiptap/extension-image'
import { Video } from './plugins/video';
import { CustomMediaNode } from './plugins/CustomMediaNode';
import { TemplateContentNode } from './plugins/TemplateContentNode';
import { ButtonWrapperNode } from './plugins/ButtonWrapperNode';
import { AffiliateButtonNode } from './plugins/AffiliateButtonNode';
import { ReviewNode } from './plugins/ReviewNode';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableCell } from '@tiptap/extension-table-cell';
import { TableHeader } from '@tiptap/extension-table-header';
import {IframeNode} from './plugins/iframes';

const editor = window.editor = new Editor({
  element: document.querySelector('#content'),
  extensions: [
    StarterKit,
    Link.configure({
      openOnClick: false
    }),
    Underline,
    Highlight,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    Text,
    HorizontalRule,
    Image,
    Video,
    IframeNode,
    CustomMediaNode,
    TemplateContentNode,
    ButtonWrapperNode,
    AffiliateButtonNode,
    ReviewNode,
    Table.configure({
      resizable: true,
    }),
    TableRow,
    TableCell,
    TableHeader,
  ],
  content: setContentHtml(),
});

function setContentHtml() {
  const content = document.querySelector('#content').innerHTML;
  document.querySelector('#content').innerHTML = "";
  return content;
}


/// to run npm run dev
/// to run npm run build