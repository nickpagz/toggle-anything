import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { InspectorControls } from '@wordpress/block-editor';
import { ExternalLink, PanelBody, PanelRow, ToggleControl, SelectControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';

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

/**
 * Adds the 'toggleAnything' attribute to allblocks.
 *
 * @param {Object} settings The block settings for the registered block type.
 * @param {string} name     The block type name, including namespace.
 * @return {Object}         The modified block settings.
 */
function addtoggleAnythingAttribute( settings, name ) {

	settings.attributes = {
		...settings.attributes,
		toggleAnything: {
			type: 'string',
			default: '',
		},
	};

	return settings;
}

addFilter(
	'blocks.registerBlockType',
	'toggle-anything/add-toggle-anything-attribute',
	addtoggleAnythingAttribute
);

function addInspectorControls( BlockEdit ) {
	return ( props ) => {
		const { name, attributes, setAttributes } = props;

		// Bail if the block is this one.
		if ( name === 'nickpagz/toggle-anything' ) {
			return <BlockEdit { ...props } />;
		}

		// Retrieve all classes from toggle blocks
        const toggleClasses = getAllToggleClasses();
        const defaultOptions = [
			{ label: 'No-script hide, block', value: 'toggle-anything-noscript-hide__block' },
			{ label: 'No-script hide, flex', value: 'toggle-anything-noscript-hide__flex' },
			{ label: 'No-script hide, inline', value: 'toggle-anything-noscript-hide__inline' },
			{ label: 'No-script hide, inline-block', value: 'toggle-anything-noscript-hide__inline-block' },
			{ label: 'No-script hide, grid', value: 'toggle-anything-noscript-hide__grid' },
			{ label: 'No-script show, block', value: 'toggle-anything-noscript-show__block' },
			{ label: 'No-script show, flex', value: 'toggle-anything-noscript-show__flex' },
			{ label: 'No-script show, inline', value: 'toggle-anything-noscript-show__inline' },
			{ label: 'No-script show, inline-block', value: 'toggle-anything-noscript-show__inline-block' },
			{ label: 'No-script show, grid', value: 'toggle-anything-noscript-show__grid' },
		];
        const options = [
			{ label: 'None', value: '' },
			...toggleClasses.map((className) => ({
				label: className,
				value: className,
			})),
			...defaultOptions,
		];

		// Retrieve selected attributes from the block.
		const { toggleAnything } = attributes;

		return (
			<>
					<BlockEdit { ...props } />
					<InspectorControls>
						<PanelBody
							title={ __(
								'Toggle Anything',
								'toggle-anything'
							) }
							initialOpen={false}
						>
							<PanelRow>
								<SelectControl
									label="Choose a Toggle Class"
									value={attributes.toggleAnything || ''}
									options={options}
									onChange={(newClass) => {
										setAttributes({ toggleAnything: newClass });
									}}
								/>
							</PanelRow>
						</PanelBody>
					</InspectorControls>
			</>
		);
	};
}

addFilter(
	'editor.BlockEdit',
	'toggle-anything/add-inspector-controls',
	addInspectorControls
);

/**
 * Collect all the onClass and offClass values from Toggle Anything' blocks.
 *
 * @param {Object} settings The block settings for the registered block type.
 * @param {string} name     The block type name, including namespace.
 * @return {Object}         The modified block settings.
 */
function getAllToggleClasses() {
	const blocks = useSelect((select) => 
		select('core/block-editor').getBlocks()
	);

	const toggleClassesSet = new Set();  // Use a Set to store unique class names

	function addClassesFromBlock(block) {
		if (block.name === 'nickpagz/toggle-anything') {
			const { onClass, offClass } = block.attributes;
			toggleClassesSet.add(onClass);
			toggleClassesSet.add(offClass);
		}
		if (block.innerBlocks.length) {
			block.innerBlocks.forEach(addClassesFromBlock);
		}
	}

	blocks.forEach(addClassesFromBlock);

	// Convert the Set back to an array before returning
	return Array.from(toggleClassesSet);
}
