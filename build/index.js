/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");









const Edit = ({
  attributes,
  setAttributes,
  fontSizes,
  fontFamilies,
  colors,
  fontAppearanceOptions
}) => {
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
    displayType,
    defaultState
  } = attributes;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (!blockId) {
      setAttributes({
        blockId: (0,nanoid__WEBPACK_IMPORTED_MODULE_8__.nanoid)(8)
      });
    }
  }, [blockId, setAttributes]);
  const handleToggleChange = event => {
    const slider = event.target.nextElementSibling;
    if (event.target.checked) {
      slider.style.backgroundColor = onColor;
    } else {
      slider.style.backgroundColor = offColor;
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Toggle Settings', 'slider-toggle-anything'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Off Class', 'slider-toggle-anything'),
    value: offClass,
    onChange: value => setAttributes({
      offClass: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('On Class', 'slider-toggle-anything'),
    value: onClass,
    onChange: value => setAttributes({
      onClass: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default State', 'slider-toggle-anything'),
    value: defaultState,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Off', 'slider-toggle-anything'),
      value: 'off'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('On', 'slider-toggle-anything'),
      value: 'on'
    }],
    onChange: value => setAttributes({
      defaultState: value
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Non-JS browsers will also show the default state. See the "Additional Information" section below for more information on non-JS browser handling.', 'slider-toggle-anything')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Display Type', 'slider-toggle-anything'),
    value: displayType,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Block (default)', 'slider-toggle-anything'),
      value: 'block'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Flex', 'slider-toggle-anything'),
      value: 'flex'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Inline', 'slider-toggle-anything'),
      value: 'inline'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Inline-Block', 'slider-toggle-anything'),
      value: 'inline-block'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Grid', 'slider-toggle-anything'),
      value: 'grid'
    }],
    onChange: value => setAttributes({
      displayType: value
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Applies to the toggle on/off classes. If you don\'t know what this is, leave it as "block". If it breaks the layout, experiment with the other settings.', 'slider-toggle-anything')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Toggle Design Settings', 'slider-toggle-anything'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slider Width', 'slider-toggle-anything'),
    value: sliderWidth,
    onChange: value => setAttributes({
      sliderWidth: value
    }),
    min: 20,
    max: 500
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slider Height', 'slider-toggle-anything'),
    value: sliderHeight,
    onChange: value => setAttributes({
      sliderHeight: value
    }),
    min: 10,
    max: 200
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Width', 'slider-toggle-anything'),
    value: buttonWidth,
    onChange: value => setAttributes({
      buttonWidth: value
    }),
    min: 20,
    max: 500
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Border Radius', 'slider-toggle-anything'),
    value: borderRadius,
    onChange: value => setAttributes({
      borderRadius: value
    }),
    min: 0,
    max: 100
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Gap', 'slider-toggle-anything'),
    value: gap,
    onChange: value => setAttributes({
      gap: value
    }),
    min: -50,
    max: 50
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Toggle Text Settings', 'slider-toggle-anything'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Off Text', 'slider-toggle-anything'),
    value: offText,
    onChange: value => setAttributes({
      offText: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tweak Left Spacing', 'slider-toggle-anything'),
    value: paddingLeft,
    onChange: value => setAttributes({
      paddingLeft: value
    }),
    min: 0,
    max: 50
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('On Text', 'slider-toggle-anything'),
    value: onText,
    onChange: value => setAttributes({
      onText: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Tweak Right Spacing', 'slider-toggle-anything'),
    value: paddingRight,
    onChange: value => setAttributes({
      paddingRight: value
    }),
    min: 0,
    max: 50
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FontSizePicker, {
    value: fontSize,
    fontSizes: fontSizes,
    onChange: value => setAttributes({
      fontSize: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Appearance', 'slider-toggle-anything'),
    value: fontAppearance,
    options: fontAppearanceOptions,
    onChange: value => setAttributes({
      fontAppearance: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Weight', 'slider-toggle-anything'),
    value: fontWeight,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('100', 'slider-toggle-anything'),
      value: 100
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('200', 'slider-toggle-anything'),
      value: 200
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('300', 'slider-toggle-anything'),
      value: 300
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('400', 'slider-toggle-anything'),
      value: 400
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('500', 'slider-toggle-anything'),
      value: 500
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('600', 'slider-toggle-anything'),
      value: 600
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('700', 'slider-toggle-anything'),
      value: 700
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('800', 'slider-toggle-anything'),
      value: 800
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('900', 'slider-toggle-anything'),
      value: 900
    }],
    onChange: value => setAttributes({
      fontWeight: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Family', 'slider-toggle-anything'),
    value: fontFamily,
    options: fontFamilies,
    onChange: value => setAttributes({
      fontFamily: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color Settings', 'slider-toggle-anything'),
    initialOpen: false,
    enableAlpha: true,
    colorSettings: [{
      value: offColor,
      onChange: color => setAttributes({
        offColor: color
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Off Background Color', 'slider-toggle-anything'),
      colors
    }, {
      value: onColor,
      onChange: color => setAttributes({
        onColor: color
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('On Background Color', 'slider-toggle-anything'),
      colors
    }, {
      value: toggleColor,
      onChange: color => setAttributes({
        toggleColor: color
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Toggle Button Color', 'slider-toggle-anything'),
      colors
    }, {
      value: fontColor,
      onChange: color => setAttributes({
        fontColor: color
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color', 'slider-toggle-anything'),
      colors
    }]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Custom CSS', 'slider-toggle-anything'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Switch Wrapper', 'slider-toggle-anything'),
    value: customCSSSwitchWrapper,
    onChange: value => setAttributes({
      customCSSSwitchWrapper: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Switch Body', 'slider-toggle-anything'),
    value: customCSSSwitch,
    onChange: value => setAttributes({
      customCSSSwitch: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Slider', 'slider-toggle-anything'),
    value: customCSSSliderRound,
    onChange: value => setAttributes({
      customCSSSliderRound: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button', 'slider-toggle-anything'),
    value: customCSSButton,
    onChange: value => setAttributes({
      customCSSButton: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Activated', 'slider-toggle-anything'),
    value: customCSSButtonActivated,
    onChange: value => setAttributes({
      customCSSButtonActivated: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Wrapper', 'slider-toggle-anything'),
    value: customCSSTextWrapper,
    onChange: value => setAttributes({
      customCSSTextWrapper: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Off Text', 'slider-toggle-anything'),
    value: customCSSOff,
    onChange: value => setAttributes({
      customCSSOff: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('On Text', 'slider-toggle-anything'),
    value: customCSSOn,
    onChange: value => setAttributes({
      customCSSOn: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Additional Information', 'slider-toggle-anything'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('The toggle button will be hidden on non-JS browsers as it won\'t be functional anyways.', 'slider-toggle-anything')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('This block includes helper css classes to hide or show other selected blocks on non-JS browsers.', 'slider-toggle-anything')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add the classes mentioned below to the Advanced > ADDITIONAL CSS CLASS(ES) field of the blocks you want to show or hide on non-JS browsers.', 'slider-toggle-anything')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Use the classes "slider-toggle-noscript-hide__block", "__flex", etc., to hide selected blocks in non-JS browsers.', 'slider-toggle-anything')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Use the classes "slider-toggle-noscript-show__block", "__flex", etc., to show selected blocks in non-JS browsers', 'slider-toggle-anything')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `slider-toggle ${blockId}`,
    "data-on-class": onClass,
    "data-off-class": offClass,
    "data-default-state": defaultState,
    style: {
      '--slider-before-height': `${sliderHeight - 2 * gap}px`,
      '--slider-before-width': `${buttonWidth}px`,
      '--slider-before-border-radius': `${borderRadius}px`,
      '--slider-before-left': `${gap}px`,
      '--slider-before-bottom': `${gap}px`,
      '--slider-before-bg-color': toggleColor,
      '--slider-before-translate-x': `${sliderWidth - buttonWidth - 2 * gap}px`
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "switch",
    style: {
      width: `${sliderWidth}px`,
      height: `${sliderHeight}px`
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    onChange: handleToggleChange,
    defaultChecked: defaultState === 'on'
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "slider round",
    style: {
      backgroundColor: offColor,
      borderRadius: `${borderRadius}px`
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "slider-text",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      padding: `0 ${gap * 2 + paddingRight}px 0 ${gap * 2 + paddingLeft}px`,
      fontSize: fontSize,
      fontWeight: fontWeight,
      ...(fontFamily ? {
        fontFamily: fontFamily
      } : {}),
      fontStyle: fontAppearance === 'italic' ? 'italic' : 'normal',
      color: fontColor,
      pointerEvents: 'none'
    }
  }, offText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "off-text",
    style: {
      zIndex: 2
    }
  }, offText), onText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "on-text",
    style: {
      zIndex: 2
    }
  }, onText))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `
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
                `)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__.compose)((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)(select => {
  const settings = select('core/block-editor').getSettings();
  const typography = settings.__experimentalFeatures.typography || {};
  return {
    fontSizes: settings.fontSizes || [],
    fontFamilies: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Default', 'slider-toggle-anything'),
      value: ''
    }, ...(typography.fontFamilies?.theme || []).map(family => ({
      label: family.name,
      value: family.fontFamily
    }))],
    colors: settings.colors || [],
    fontAppearanceOptions: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Normal', 'slider-toggle-anything'),
      value: 'normal'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Italic', 'slider-toggle-anything'),
      value: 'italic'
    }]
  };
}))(Edit));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./block.json */ "./src/block.json");












const toggleIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 576 512"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M384 128c70.7 0 128 57.3 128 128s-57.3 128-128 128l-192 0c-70.7 0-128-57.3-128-128s57.3-128 128-128l192 0zM576 256c0-106-86-192-192-192L192 64C86 64 0 150 0 256S86 448 192 448l192 0c106 0 192-86 192-192zM192 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192z"
}));
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_11__.name, {
  icon: toggleIcon,
  edit: _edit__WEBPACK_IMPORTED_MODULE_9__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_10__["default"]
});

/**
 * Adds the 'toggleAnything' attribute to allblocks.
 *
 * @param {Object} settings The block settings for the registered block type.
 * @param {string} name     The block type name, including namespace.
 * @return {Object}         The modified block settings.
 */
function addtoggleAnythingAttribute(settings, name) {
  settings.attributes = {
    ...settings.attributes,
    toggleAnything: {
      type: 'string',
      default: ''
    }
  };
  return settings;
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('blocks.registerBlockType', 'slider-toggle-anything/add-toggle-anything-attribute', addtoggleAnythingAttribute);
function addInspectorControls(BlockEdit) {
  return props => {
    const {
      name,
      attributes,
      setAttributes
    } = props;

    // Bail if the block is this one.
    if (name === 'nickpagz/slider-toggle-anything') {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
        ...props
      });
    }

    // Retrieve all classes from toggle blocks
    const toggleClasses = getAllToggleClasses();
    const defaultOptions = [{
      label: 'No-script hide, block',
      value: 'slider-toggle-noscript-hide__block'
    }, {
      label: 'No-script hide, flex',
      value: 'slider-toggle-noscript-hide__flex'
    }, {
      label: 'No-script hide, inline',
      value: 'slider-toggle-noscript-hide__inline'
    }, {
      label: 'No-script hide, inline-block',
      value: 'slider-toggle-noscript-hide__inline-block'
    }, {
      label: 'No-script hide, grid',
      value: 'slider-toggle-noscript-hide__grid'
    }, {
      label: 'No-script show, block',
      value: 'slider-toggle-noscript-show__block'
    }, {
      label: 'No-script show, flex',
      value: 'slider-toggle-noscript-show__flex'
    }, {
      label: 'No-script show, inline',
      value: 'slider-toggle-noscript-show__inline'
    }, {
      label: 'No-script show, inline-block',
      value: 'slider-toggle-noscript-show__inline-block'
    }, {
      label: 'No-script show, grid',
      value: 'slider-toggle-noscript-show__grid'
    }];
    const options = [{
      label: 'None',
      value: ''
    }, ...toggleClasses.map(className => ({
      label: className,
      value: className
    })), ...defaultOptions];

    // Retrieve selected attributes from the block.
    const {
      toggleAnything
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Toggle Anything', 'slider-toggle-anything'),
      initialOpen: false
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
      label: "Choose a Toggle Class",
      value: attributes.toggleAnything || '',
      options: options,
      onChange: newClass => {
        setAttributes({
          toggleAnything: newClass
        });
      }
    })))));
  };
}
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_3__.addFilter)('editor.BlockEdit', 'slider-toggle-anything/add-inspector-controls', addInspectorControls);

/**
 * Collect all the onClass and offClass values from Toggle Anything' blocks.
 *
 * @param {Object} settings The block settings for the registered block type.
 * @param {string} name     The block type name, including namespace.
 * @return {Object}         The modified block settings.
 */
function getAllToggleClasses() {
  const blocks = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.useSelect)(select => select('core/block-editor').getBlocks());
  const toggleClassesSet = new Set(); // Use a Set to store unique class names

  function addClassesFromBlock(block) {
    if (block.name === 'nickpagz/slider-toggle-anything') {
      const {
        onClass,
        offClass
      } = block.attributes;
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

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
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
    defaultState
  } = attributes;
  const customStyles = `
		${customCSSSwitchWrapper ? `.slider-toggle.${blockId} {${customCSSSwitchWrapper}}` : ''}
		${customCSSSwitch ? `.slider-toggle.${blockId} .switch {${customCSSSwitch}}` : ''}
		${customCSSSliderRound ? `.slider-toggle.${blockId} .slider.round {${customCSSSliderRound}}` : ''}
		${customCSSButton ? `.slider-toggle.${blockId} .slider.round::before {${customCSSButton}}` : ''}
		${customCSSButtonActivated ? `.slider-toggle.${blockId} .switch input:checked + .slider::before {${customCSSButtonActivated}}` : ''}
		${customCSSTextWrapper ? `.slider-toggle.${blockId} .slider-text {${customCSSTextWrapper}}` : ''}
		${customCSSOff ? `.slider-toggle.${blockId} .off-text {${customCSSOff}}` : ''}
		${customCSSOn ? `.slider-toggle.${blockId} .on-text {${customCSSOn}}` : ''}
	`.trim();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save()
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `slider-toggle ${blockId}`,
    "data-on-class": onClass,
    "data-off-class": offClass,
    "data-on-color": onColor,
    "data-off-color": offColor,
    "data-display-type": displayType,
    "data-default-state": defaultState,
    style: {
      '--slider-before-height': `${sliderHeight - 2 * gap}px`,
      '--slider-before-width': `${buttonWidth}px`,
      '--slider-before-border-radius': `${borderRadius}px`,
      '--slider-before-left': `${gap}px`,
      '--slider-before-bottom': `${gap}px`,
      '--slider-before-bg-color': toggleColor,
      '--slider-before-translate-x': `${sliderWidth - buttonWidth - 2 * gap}px`
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "switch",
    style: {
      width: `${sliderWidth}px`,
      height: `${sliderHeight}px`
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "slider round",
    style: {
      backgroundColor: offColor,
      borderRadius: `${borderRadius}px`
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "slider-text",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      padding: `0 ${gap * 2 + paddingRight}px 0 ${gap * 2 + paddingLeft}px`,
      fontSize: fontSize,
      fontWeight: fontWeight,
      ...(fontFamily ? {
        fontFamily: fontFamily
      } : {}),
      fontStyle: fontAppearance === 'italic' ? 'italic' : 'normal',
      color: fontColor,
      pointerEvents: 'none'
    }
  }, offText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "off-text",
    style: {
      zIndex: 2
    }
  }, offText), onText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "on-text",
    style: {
      zIndex: 2
    }
  }, onText))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, customStyles), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("noscript", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `.slider-toggle.${blockId} {display: none;}`, `.${defaultState === 'on' ? offClass : onClass} {display: none;}`, `.${defaultState === 'on' ? onClass : offClass} {display: ${displayType};}`)));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customAlphabet: () => (/* binding */ customAlphabet),
/* harmony export */   customRandom: () => (/* binding */ customRandom),
/* harmony export */   nanoid: () => (/* binding */ nanoid),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   urlAlphabet: () => (/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet)
/* harmony export */ });
/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ "./node_modules/nanoid/url-alphabet/index.js");


let random = bytes => crypto.getRandomValues(new Uint8Array(bytes))
let customRandom = (alphabet, defaultSize, getRandom) => {
  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1
  let step = -~((1.6 * mask * defaultSize) / alphabet.length)
  return (size = defaultSize) => {
    let id = ''
    while (true) {
      let bytes = getRandom(step)
      let j = step
      while (j--) {
        id += alphabet[bytes[j] & mask] || ''
        if (id.length === size) return id
      }
    }
  }
}
let customAlphabet = (alphabet, size = 21) =>
  customRandom(alphabet, size, random)
let nanoid = (size = 21) => {
  let id = ''
  let bytes = crypto.getRandomValues(new Uint8Array(size))
  while (size--) {
    id += _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet[bytes[size] & 63]
  }
  return id
}


/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   urlAlphabet: () => (/* binding */ urlAlphabet)
/* harmony export */ });
const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict'


/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"nickpagz/slider-toggle-anything","version":"0.2.1","title":"Toggle Anything","category":"widgets","description":"A customizable slider toggle switch to control visibility of any block.","example":{},"attributes":{"onClass":{"type":"string","default":"toggle-on"},"offClass":{"type":"string","default":"toggle-off"},"onColor":{"type":"string","default":"#2196F3"},"offColor":{"type":"string","default":"#ccc"},"toggleColor":{"type":"string","default":"#fff"},"sliderWidth":{"type":"number","default":60},"sliderHeight":{"type":"number","default":34},"buttonWidth":{"type":"number","default":26},"borderRadius":{"type":"number","default":17},"gap":{"type":"number","default":4},"onText":{"type":"string","default":""},"offText":{"type":"string","default":""},"fontColor":{"type":"string","default":"#000"},"paddingLeft":{"type":"number","default":0},"paddingRight":{"type":"number","default":0},"fontSize":{"type":"string","default":""},"fontWeight":{"type":"number","default":400},"fontFamily":{"type":"string","default":""},"fontAppearance":{"type":"string","default":""},"blockId":{"type":"string","default":""},"offColorGradient":{"type":"string","default":""},"customCSSSwitchWrapper":{"type":"string","default":""},"customCSSSwitch":{"type":"string","default":""},"customCSSSliderRound":{"type":"string","default":""},"customCSSButton":{"type":"string","default":""},"customCSSButtonActivated":{"type":"string","default":""},"customCSSTextWrapper":{"type":"string","default":""},"customCSSOff":{"type":"string","default":""},"customCSSOn":{"type":"string","default":""},"displayType":{"type":"string","default":"block"},"defaultState":{"type":"string","default":"off"}},"supports":{"html":false},"textdomain":"slider-toggle-anything","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkslider_toggle_anything"] = globalThis["webpackChunkslider_toggle_anything"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map