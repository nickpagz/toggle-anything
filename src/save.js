import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
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
		fontColor,
		fontSize,
		fontWeight,
		fontFamily,
		fontAppearance,
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
		displayType,
		defaultState,
	} = attributes;

	return (
		<div { ...useBlockProps.save() }>
			<div
				className={`slider-toggle ${blockId}`}
				data-on-class={onClass}
				data-off-class={offClass}
				data-on-color={onColor}
				data-off-color={offColor}
				data-display-type={displayType}
				data-default-state={defaultState}
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
					<input type="checkbox" />
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
							{onText && <span className="on-text" style={{zIndex:2}}>{onText}</span>}
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
			<noscript>
                <style>
                    {`
                        .slider-toggle.${blockId} {
                            display: none;
                        }
						.${defaultState === 'on' ? offClass : onClass} {
                            display: none;
                        }
                        .${defaultState === 'on' ? onClass : offClass} {
                            display: block;
                        }
                    `}
                </style>
            </noscript>
		</div>
	);
}