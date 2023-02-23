/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import './custom.css';

import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import HtmlEmbed from '@ckeditor/ckeditor5-html-embed/src/htmlembed';
import GeneralHtmlSupport from '@ckeditor/ckeditor5-html-support/src/generalhtmlsupport';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Alignment,
	Autoformat,
	Bold,
	Italic,
	BlockQuote,
	CodeBlock,
	Font,
	GeneralHtmlSupport,
	Heading,
	HtmlEmbed,
	Image,
	ImageCaption,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	IndentBlock,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	RemoveFormat,
	SourceEditing,
	Strikethrough,
	Table,
	TableToolbar,
	Underline,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'sourceEditing',
			'|',
			'heading',
			'fontFamily',
			'fontSize',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'|',
			'removeFormat',
			'|',
			'numberedList',
			'bulletedList',
			'outdent',
			'indent',
			'|',
			'alignment',
			'|',
			'uploadImage',
			'blockQuote',
			'codeBlock',
			'insertTable',
			'|',
			'link',
			'mediaEmbed',
			'htmlEmbed',
			'|',
			'fontColor',
			'fontBackgroundColor',
		],
	},
	fontSize: {
		options: [8, 9, 10, 11, 12, 'default', 14, 18, 24, 30, 36, 48],
	},
	image: {
		toolbar: [
			{
				name: 'imageStyle:inlineImages',
				defaultItem: 'imageStyle:inline',
				items: ['imageStyle:inline', 'imageStyle:alignLeft', 'imageStyle:alignRight'],
			},
			{
				name: 'imageStyle:blockImages',
				defaultItem: 'imageStyle:block',
				items: ['imageStyle:alignBlockLeft', 'imageStyle:block', 'imageStyle:alignBlockRight'],
			},
			'|',
			'toggleImageCaption',
			'imageTextAlternative',
		],
	},
	indentBlock: {
		offset: 1,
		unit: 'em',
	},
	mediaEmbed: {
		extraProviders: [
			{
				name: 'loom',
				url: /^(www\.)?loom\.com/,
			},
		],
	},
	table: {
		contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en',
	htmlSupport: {
		allow: [
			{
				name: /.*/,
				classes: true,
				styles: true,
				attributes: true,
			},
			{
				name: 'img',
				attributes: 'data-cid',
			},
		],
		disallow: [
			{
				name: /.*/,
				attributes: /^on/,
			},
			{
				name: /^(script|style)$/,
			},
		],
	},
};
