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
		sliderWidth,
		sliderHeight,
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
		customCSSSliderRound,
		customCSSButton,
		customCSSButtonActivated,
		customCSSTextWrapper,
		customCSSOff,
        customCSSOn,
	} = attributes;

	useEffect(() => {
        if (!blockId) {
            setAttributes({ blockId: nanoid(8) });
        }
    }, [blockId, setAttributes]);

	const handleToggleChange = (event) => {
		const slider = event.target.nextElementSibling;
		if (event.target.checked) {
			slider.style.backgroundColor = onColor;
		} else {
			slider.style.backgroundColor = offColor;
		}
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Toggle Design Settings', 'slider-toggle-anything')} initialOpen={false}>
					<TextControl
						label={__('Off Class', 'slider-toggle-anything')}
						value={offClass}
						onChange={(value) => setAttributes({ offClass: value })}
					/>
					<TextControl
						label={__('On Class', 'slider-toggle-anything')}
						value={onClass}
						onChange={(value) => setAttributes({ onClass: value })}
					/>
					<RangeControl
						label={__('Slider Width', 'slider-toggle-anything')}
						value={sliderWidth}
						onChange={(value) => setAttributes({ sliderWidth: value })}
						min={20}
						max={500}
					/>
					<RangeControl
						label={__('Slider Height', 'slider-toggle-anything')}
						value={sliderHeight}
						onChange={(value) => setAttributes({ sliderHeight: value })}
						min={10}
						max={200}
					/>
					<RangeControl
						label={__('Button Width', 'slider-toggle-anything')}
						value={buttonWidth}
						onChange={(value) => setAttributes({ buttonWidth: value })}
						min={20}
						max={500}
					/>
					<RangeControl
						label={__('Border Radius', 'slider-toggle-anything')}
						value={borderRadius}
						onChange={(value) => setAttributes({ borderRadius: value })}
						min={0}
						max={100}
					/>
					<RangeControl
						label={__('Gap', 'slider-toggle-anything')}
						value={gap}
						onChange={(value) => setAttributes({ gap: value })}
						min={-50}
						max={50}
					/>
				</PanelBody>
				<PanelBody title={__('Toggle Text Settings', 'slider-toggle-anything')} initialOpen={false}>
					<TextControl
						label={__('Off Text', 'slider-toggle-anything')}
						value={offText}
						onChange={(value) => setAttributes({ offText: value })}
					/>
					<RangeControl
						label={__('Tweak Left Spacing', 'slider-toggle-anything')}
						value={paddingLeft}
						onChange={(value) => setAttributes({ paddingLeft: value })}
						min={0}
						max={50}
					/>
					<TextControl
						label={__('On Text', 'slider-toggle-anything')}
						value={onText}
						onChange={(value) => setAttributes({ onText: value })}
					/>
					<RangeControl
						label={__('Tweak Right Spacing', 'slider-toggle-anything')}
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
						label={__('Font Appearance', 'slider-toggle-anything')}
						value={fontAppearance}
						options={fontAppearanceOptions}
						onChange={(value) => setAttributes({ fontAppearance: value })}
					/>
					<SelectControl
						label={__('Font Weight', 'slider-toggle-anything')}
						value={fontWeight}
						options={[
							{ label: __('100', 'slider-toggle-anything'), value: 100 },
							{ label: __('200', 'slider-toggle-anything'), value: 200 },
							{ label: __('300', 'slider-toggle-anything'), value: 300 },
							{ label: __('400', 'slider-toggle-anything'), value: 400 },
							{ label: __('500', 'slider-toggle-anything'), value: 500 },
							{ label: __('600', 'slider-toggle-anything'), value: 600 },
							{ label: __('700', 'slider-toggle-anything'), value: 700 },
							{ label: __('800', 'slider-toggle-anything'), value: 800 },
							{ label: __('900', 'slider-toggle-anything'), value: 900 },
						]}
						onChange={(value) => setAttributes({ fontWeight: value })}
					/>
					<SelectControl
						label={__('Font Family', 'slider-toggle-anything')}
						value={fontFamily}
						options={fontFamilies}
						onChange={(value) => setAttributes({ fontFamily: value })}
					/>
				</PanelBody>
				<PanelColorSettings
					title={__('Color Settings', 'slider-toggle-anything')}
					initialOpen={false}
					enableAlpha
					colorSettings={[
						{
							value: offColor,
							onChange: (color) => setAttributes({ offColor: color }),
							label: __('Off Background Color', 'slider-toggle-anything'),
							colors,
						},
						{
							value: onColor,
							onChange: (color) => setAttributes({ onColor: color }),
							label: __('On Background Color', 'slider-toggle-anything'),
							colors,
						},
						{
							value: toggleColor,
							onChange: (color) => setAttributes({ toggleColor: color }),
							label: __('Toggle Button Color', 'slider-toggle-anything'),
							colors,
						},
						{
							value: fontColor,
							onChange: (color) => setAttributes({ fontColor: color }),
							label: __('Text Color', 'slider-toggle-anything'),
							colors,
						},
					]}
				/>
				<PanelBody title={__('Custom CSS', 'slider-toggle-anything')} initialOpen={false}>
					<TextareaControl
                        label={__('Switch Wrapper', 'slider-toggle-anything')}
                        value={customCSSSwitchWrapper}
                        onChange={(value) => setAttributes({ customCSSSwitchWrapper: value })}
                    />
					<TextareaControl
                        label={__('Switch Body', 'slider-toggle-anything')}
                        value={customCSSSwitch}
                        onChange={(value) => setAttributes({ customCSSSwitch: value })}
                    />
					<TextareaControl
                        label={__('Slider', 'slider-toggle-anything')}
                        value={customCSSSliderRound}
                        onChange={(value) => setAttributes({ customCSSSliderRound: value })}
                    />
					<TextareaControl
                        label={__('Button', 'slider-toggle-anything')}
                        value={customCSSButton}
                        onChange={(value) => setAttributes({ customCSSButton: value })}
                    />
					<TextareaControl
                        label={__('Button Activated', 'slider-toggle-anything')}
                        value={customCSSButtonActivated}
                        onChange={(value) => setAttributes({ customCSSButtonActivated: value })}
                    />
					<TextareaControl
                        label={__('Text Wrapper', 'slider-toggle-anything')}
                        value={customCSSTextWrapper}
                        onChange={(value) => setAttributes({ customCSSTextWrapper: value })}
                    />
                    <TextareaControl
                        label={__('Off Text', 'slider-toggle-anything')}
                        value={customCSSOff}
                        onChange={(value) => setAttributes({ customCSSOff: value })}
                    />
                    <TextareaControl
                        label={__('On Text', 'slider-toggle-anything')}
                        value={customCSSOn}
                        onChange={(value) => setAttributes({ customCSSOn: value })}
                    />
                </PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<div
					className={`slider-toggle ${blockId}`}
					data-on-class={onClass}
					data-off-class={offClass}
					style={{
						'--slider-before-height': `${sliderHeight - 2 * gap}px`,
						'--slider-before-width': `${buttonWidth}px`,
						'--slider-before-border-radius': `${borderRadius}px`,
						'--slider-before-left': `${gap}px`,
						'--slider-before-bottom': `${gap}px`,
						'--slider-before-bg-color': toggleColor,
						'--slider-before-translate-x': `${sliderWidth - buttonWidth - 2 * gap}px`,
					}}
				>
				<label className="switch" style={{ width: `${sliderWidth}px`, height: `${sliderHeight}px` }}>
						<input type="checkbox" onChange={handleToggleChange} />
						<span className="slider round" style={{ backgroundColor: offColor, borderRadius: `${borderRadius}px` }}>
							<span className="slider-text" style={{
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
					.slider-toggle.${blockId} {
						${customCSSSwitchWrapper}
					}
					.slider-toggle.${blockId} .switch{
						${customCSSSwitch}
					}
					.slider-toggle.${blockId} .slider.round {
                        ${customCSSSliderRound}
                    }
                    .slider-toggle.${blockId} .slider.round::before {
                        ${customCSSButton}
                    }
					.slider-toggle.${blockId} .switch input:checked + .slider::before {
                        ${customCSSButtonActivated}
                    }
					.slider-toggle.${blockId} .slider-text {
                        ${customCSSTextWrapper}
                    }
                    .slider-toggle.${blockId} .off-text {
                        ${customCSSOff}
                    }
                    .slider-toggle.${blockId} .on-text {
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
				{ label: __('Default', 'slider-toggle-anything'), value: '' },
				...(typography.fontFamilies?.theme || []).map(family => ({ label: family.name, value: family.fontFamily }))
			],
			colors: settings.colors || [],
			fontAppearanceOptions: [
				{ label: __('Normal', 'slider-toggle-anything'), value: 'normal' },
				{ label: __('Italic', 'slider-toggle-anything'), value: 'italic' },
			]
		};
	}),
)(Edit);