import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, TextControl, RangeControl, FontSizePicker, SelectControl, TextareaControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';
import { nanoid } from 'nanoid';
import './editor.scss';

const Edit = ({ attributes, setAttributes, fontSizes, fontFamilies, colors, fontAppearanceOptions }) => {
	const {
		onClass,
		offClass,
		onColor,
		offColor,
		toggleColor,
		toggleWidth,
		toggleHeight,
		buttonWidth,
		borderRadius,
		gap,
		onText,
		offText,
		fontSize,
		fontWeight,
		fontAppearance,
		fontFamily,
		fontColor,
		paddingLeft,
		paddingRight,
		blockId,
		customCSSSwitchWrapper,
		customCSSSwitch,
		customCSSToggleRound,
		customCSSButton,
		customCSSButtonActivated,
		customCSSTextWrapper,
		customCSSOff,
        customCSSOn,
		defaultState,
	} = attributes;

	useEffect(() => {
        if (!blockId) {
            setAttributes({ blockId: nanoid(8) });
        }
    }, [blockId, setAttributes]);

	const handleToggleChange = (event) => {
		const toggle = event.target.nextElementSibling;
		if (event.target.checked) {
			toggle.style.backgroundColor = onColor;
		} else {
			toggle.style.backgroundColor = offColor;
		}
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Toggle Settings', 'toggle-anything')} initialOpen={false}>
					<TextControl
						label={__('Off Class', 'toggle-anything')}
						value={offClass}
						onChange={(value) => setAttributes({ offClass: value })}
					/>
					<TextControl
						label={__('On Class', 'toggle-anything')}
						value={onClass}
						onChange={(value) => setAttributes({ onClass: value })}
					/>
					<SelectControl
						label={__('Default State', 'toggle-anything')}
						value={defaultState}
						options={[
							{ label: __('Off', 'toggle-anything'), value: 'off' },
							{ label: __('On', 'toggle-anything'), value: 'on' }
						]}
						onChange={(value) => setAttributes({ defaultState: value })}
						help={__('Non-JS browsers will also show the default state. See the "Additional Information" section below for more information on non-JS browser handling.', 'toggle-anything')}
					/>
				</PanelBody>
				<PanelBody title={__('Toggle Design Settings', 'toggle-anything')} initialOpen={false}>
					<RangeControl
						label={__('Toggle Width', 'toggle-anything')}
						value={toggleWidth}
						onChange={(value) => setAttributes({ toggleWidth: value })}
						min={20}
						max={500}
					/>
					<RangeControl
						label={__('Toggle Height', 'toggle-anything')}
						value={toggleHeight}
						onChange={(value) => setAttributes({ toggleHeight: value })}
						min={10}
						max={200}
					/>
					<RangeControl
						label={__('Button Width', 'toggle-anything')}
						value={buttonWidth}
						onChange={(value) => setAttributes({ buttonWidth: value })}
						min={20}
						max={500}
					/>
					<RangeControl
						label={__('Border Radius', 'toggle-anything')}
						value={borderRadius}
						onChange={(value) => setAttributes({ borderRadius: value })}
						min={0}
						max={100}
					/>
					<RangeControl
						label={__('Gap', 'toggle-anything')}
						value={gap}
						onChange={(value) => setAttributes({ gap: value })}
						min={-50}
						max={50}
					/>
				</PanelBody>
				<PanelBody title={__('Toggle Text Settings', 'toggle-anything')} initialOpen={false}>
					<TextControl
						label={__('Off Text', 'toggle-anything')}
						value={offText}
						onChange={(value) => setAttributes({ offText: value })}
					/>
					<RangeControl
						label={__('Tweak Left Spacing', 'toggle-anything')}
						value={paddingLeft}
						onChange={(value) => setAttributes({ paddingLeft: value })}
						min={0}
						max={50}
					/>
					<TextControl
						label={__('On Text', 'toggle-anything')}
						value={onText}
						onChange={(value) => setAttributes({ onText: value })}
					/>
					<RangeControl
						label={__('Tweak Right Spacing', 'toggle-anything')}
						value={paddingRight}
						onChange={(value) => setAttributes({ paddingRight: value })}
						min={0}
						max={50}
					/>
					<FontSizePicker
						value={fontSize}
						fontSizes={fontSizes}
						onChange={(value) => setAttributes({ fontSize: value })}
					/>
					<SelectControl
						label={__('Font Appearance', 'toggle-anything')}
						value={fontAppearance}
						options={fontAppearanceOptions}
						onChange={(value) => setAttributes({ fontAppearance: value })}
					/>
					<SelectControl
						label={__('Font Weight', 'toggle-anything')}
						value={fontWeight}
						options={[
							{ label: __('100', 'toggle-anything'), value: 100 },
							{ label: __('200', 'toggle-anything'), value: 200 },
							{ label: __('300', 'toggle-anything'), value: 300 },
							{ label: __('400', 'toggle-anything'), value: 400 },
							{ label: __('500', 'toggle-anything'), value: 500 },
							{ label: __('600', 'toggle-anything'), value: 600 },
							{ label: __('700', 'toggle-anything'), value: 700 },
							{ label: __('800', 'toggle-anything'), value: 800 },
							{ label: __('900', 'toggle-anything'), value: 900 },
						]}
						onChange={(value) => setAttributes({ fontWeight: value })}
					/>
					<SelectControl
						label={__('Font Family', 'toggle-anything')}
						value={fontFamily}
						options={fontFamilies}
						onChange={(value) => setAttributes({ fontFamily: value })}
					/>
				</PanelBody>
				<PanelColorSettings
					title={__('Color Settings', 'toggle-anything')}
					initialOpen={false}
					enableAlpha
					colorSettings={[
						{
							value: offColor,
							onChange: (color) => setAttributes({ offColor: color }),
							label: __('Off Background Color', 'toggle-anything'),
							colors,
						},
						{
							value: onColor,
							onChange: (color) => setAttributes({ onColor: color }),
							label: __('On Background Color', 'toggle-anything'),
							colors,
						},
						{
							value: toggleColor,
							onChange: (color) => setAttributes({ toggleColor: color }),
							label: __('Toggle Button Color', 'toggle-anything'),
							colors,
						},
						{
							value: fontColor,
							onChange: (color) => setAttributes({ fontColor: color }),
							label: __('Text Color', 'toggle-anything'),
							colors,
						},
					]}
				/>
				<PanelBody title={__('Custom CSS', 'toggle-anything')} initialOpen={false}>
					<TextareaControl
                        label={__('Switch Wrapper', 'toggle-anything')}
                        value={customCSSSwitchWrapper}
                        onChange={(value) => setAttributes({ customCSSSwitchWrapper: value })}
                    />
					<TextareaControl
                        label={__('Switch Body', 'toggle-anything')}
                        value={customCSSSwitch}
                        onChange={(value) => setAttributes({ customCSSSwitch: value })}
                    />
					<TextareaControl
                        label={__('Toggle', 'toggle-anything')}
                        value={customCSSToggleRound}
                        onChange={(value) => setAttributes({ customCSSToggleRound: value })}
                    />
					<TextareaControl
                        label={__('Button', 'toggle-anything')}
                        value={customCSSButton}
                        onChange={(value) => setAttributes({ customCSSButton: value })}
                    />
					<TextareaControl
                        label={__('Button Activated', 'toggle-anything')}
                        value={customCSSButtonActivated}
                        onChange={(value) => setAttributes({ customCSSButtonActivated: value })}
                    />
					<TextareaControl
                        label={__('Text Wrapper', 'toggle-anything')}
                        value={customCSSTextWrapper}
                        onChange={(value) => setAttributes({ customCSSTextWrapper: value })}
                    />
                    <TextareaControl
                        label={__('Off Text', 'toggle-anything')}
                        value={customCSSOff}
                        onChange={(value) => setAttributes({ customCSSOff: value })}
                    />
                    <TextareaControl
                        label={__('On Text', 'toggle-anything')}
                        value={customCSSOn}
                        onChange={(value) => setAttributes({ customCSSOn: value })}
                    />
                </PanelBody>
				<PanelBody title={__('Additional Information', 'toggle-anything')} initialOpen={false}>
					<p>{__('The toggle button will be hidden on non-JS browsers as it won\'t be functional anyways.', 'toggle-anything')}</p>
					<p>{__('This block includes helper css classes to hide or show other selected blocks on non-JS browsers.', 'toggle-anything')}</p>
					<p>{__('Add the classes mentioned below to the Advanced > ADDITIONAL CSS CLASS(ES) field of the blocks you want to show or hide on non-JS browsers.', 'toggle-anything')}</p>
					<p>{__('Use the classes "toggle-anything-noscript-hide__block", "__flex", etc., to hide selected blocks in non-JS browsers.', 'toggle-anything')}</p>
					<p>{__('Use the classes "toggle-anything-noscript-show__block", "__flex", etc., to show selected blocks in non-JS browsers', 'toggle-anything')}</p>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<div
					className={`toggle-anything ${blockId}`}
					data-on-class={onClass}
					data-off-class={offClass}
					data-default-state={defaultState}
					style={{
						'--toggle-before-height': `${toggleHeight - 2 * gap}px`,
						'--toggle-before-width': `${buttonWidth}px`,
						'--toggle-before-border-radius': `${borderRadius}px`,
						'--toggle-before-left': `${gap}px`,
						'--toggle-before-bottom': `${gap}px`,
						'--toggle-before-bg-color': toggleColor,
						'--toggle-before-translate-x': `${toggleWidth - buttonWidth - 2 * gap}px`,
					}}
				>
				<label className="switch" style={{ width: `${toggleWidth}px`, height: `${toggleHeight}px` }}>
						<input type="checkbox" onChange={handleToggleChange} defaultChecked={defaultState === 'on'} />
						<span className="toggle round" style={{ backgroundColor: offColor, borderRadius: `${borderRadius}px` }}>
							<span className="toggle-text" style={{
								display: 'flex',
								justifyContent: 'space-between',
								boxSizing: 'border-box',
								alignItems: 'center',
								width: '100%',
								height: '100%',
								padding: `0 ${gap * 2 + paddingRight}px 0 ${gap * 2 + paddingLeft}px`,
								fontSize: fontSize,
								fontWeight: fontWeight,
								...(fontFamily ? { fontFamily: fontFamily } : {}),
								fontStyle: fontAppearance === 'italic' ? 'italic' : 'normal',
								color: fontColor,
								pointerEvents: 'none',
							}}>
								{offText && <span className="off-text" style={{zIndex:2}}>{offText}</span>}
								{onText && <span className="on-text"  style={{zIndex:2}}>{onText}</span>}
							</span>
						</span>
					</label>
				</div>
				<style>
                {`
					.toggle-anything.${blockId} {
						${customCSSSwitchWrapper}
					}
					.toggle-anything.${blockId} .switch{
						${customCSSSwitch}
					}
					.toggle-anything.${blockId} .toggle.round {
                        ${customCSSToggleRound}
                    }
                    .toggle-anything.${blockId} .toggle.round::before {
                        ${customCSSButton}
                    }
					.toggle-anything.${blockId} .switch input:checked + .toggle::before {
                        ${customCSSButtonActivated}
                    }
					.toggle-anything.${blockId} .toggle-text {
                        ${customCSSTextWrapper}
                    }
                    .toggle-anything.${blockId} .off-text {
                        ${customCSSOff}
                    }
                    .toggle-anything.${blockId} .on-text {
                        ${customCSSOn}
                    }
                `}
            </style>
			</div>
		</>
	);
};

export default compose(
	withSelect(select => {
		const settings = select('core/block-editor').getSettings();
		const typography = settings.__experimentalFeatures.typography || {};
		return {
			fontSizes: settings.fontSizes || [],
			fontFamilies: [
				{ label: __('Default', 'toggle-anything'), value: '' },
				...(typography.fontFamilies?.theme || []).map(family => ({ label: family.name, value: family.fontFamily }))
			],
			colors: settings.colors || [],
			fontAppearanceOptions: [
				{ label: __('Normal', 'toggle-anything'), value: 'normal' },
				{ label: __('Italic', 'toggle-anything'), value: 'italic' },
			]
		};
	}),
)(Edit);