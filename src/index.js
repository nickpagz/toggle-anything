import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import Edit from './edit';
import save from './save';
import metadata from './block.json';

const toggleIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
		<path d="M384 128c70.7 0 128 57.3 128 128s-57.3 128-128 128l-192 0c-70.7 0-128-57.3-128-128s57.3-128 128-128l192 0zM576 256c0-106-86-192-192-192L192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192zM192 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"/>
	</svg>
);

registerBlockType( metadata.name, {
	icon: toggleIcon,
	edit: Edit,
	save,
} );
