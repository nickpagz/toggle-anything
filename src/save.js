import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
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
		customCSSToggleRound,
		customCSSButton,
		customCSSButtonActivated,
		customCSSTextWrapper,
		customCSSOff,
		customCSSOn,
		defaultState,
	} = attributes;

	const customStyles = `
		${customCSSSwitchWrapper ? `.toggle-anything.${blockId} {${customCSSSwitchWrapper}}` : ''}
		${customCSSSwitch ? `.toggle-anything.${blockId} .switch {${customCSSSwitch}}` : ''}
		${customCSSToggleRound ? `.toggle-anything.${blockId} .toggle.round {${customCSSToggleRound}}` : ''}
		${customCSSButton ? `.toggle-anything.${blockId} .toggle.round::before {${customCSSButton}}` : ''}
		${customCSSButtonActivated ? `.toggle-anything.${blockId} .switch input:checked + .toggle::before {${customCSSButtonActivated}}` : ''}
		${customCSSTextWrapper ? `.toggle-anything.${blockId} .toggle-text {${customCSSTextWrapper}}` : ''}
		${customCSSOff ? `.toggle-anything.${blockId} .off-text {${customCSSOff}}` : ''}
		${customCSSOn ? `.toggle-anything.${blockId} .on-text {${customCSSOn}}` : ''}
	`.trim();

	return (
		<div { ...useBlockProps.save() }>
			<div
				className={`toggle-anything ${blockId}`}
				data-on-class={onClass}
				data-off-class={offClass}
				data-on-color={onColor}
				data-off-color={offColor}	
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
					<input type="checkbox" />
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
							{onText && <span className="on-text" style={{zIndex:2}}>{onText}</span>}
						</span>
					</span>
				</label>
			</div>
			<style>
				{customStyles}
			</style>
			<noscript>
				<style>
					{`.toggle-anything.${blockId} {display: none;}`}
					{`.${defaultState === 'on' ? offClass : onClass} {display: none;}`}
				</style>
			</noscript>
		</div>
	);
}