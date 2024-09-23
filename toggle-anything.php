<?php
/**
 * Plugin Name:       Toggle Anything
 * Description:       A customizable toggle switch to control visibility of any block.
 * Requires at least: 6.5
 * Requires PHP:      7.4
 * Version:           1.0.0
 * Author:            Nick Pagazani
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       toggle-anything
 *
 * @package Nickpagz
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Register the block using the metadata loaded from the `block.json` file.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function nickpagz_toggle_anything_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'nickpagz_toggle_anything_block_init' );

/**
 * Adds the on and off class attributes as classes for each element where one is specified.
 *
 * @param string $block_content The original HTML content of the block.
 * @param array  $block         The block details, including attributes.
 * @return string               The modified block content with the classes applied, or the original content if not set.
 */
function nickpagz_toggle_anything_add_onoff_classes( $block_content, $block ) {

	$is_onoff_class = $block['attrs']['toggleAnything'] ?? false;

	// Only apply the modifications if the attribute is set.
	if ( $is_onoff_class ) {

		// Modify the attributes using the HTML API.
		$processor = new WP_HTML_Tag_Processor( $block_content );

		if ( $processor->next_tag() ) {
			$processor->add_class( $is_onoff_class );
		}

		return $processor->get_updated_html();
	}

	return $block_content;
}
add_filter( 'render_block', 'nickpagz_toggle_anything_add_onoff_classes', 10, 2 );

/**
 * Enqueue view.js and stylesheet if any block has the toggleAnything attribute,
 * and if they are not already enqueued.
 *
 * @param string $block_content The original HTML content of the block.
 * @param array  $block         The block details, including attributes.
 * @return string               The modified block content with the classes applied, or the original content if not set.
 */
function nickpagz_maybe_enqueue_view_script_and_style( $block_content, $block ) {
	$is_onoff_class = $block['attrs']['toggleAnything'] ?? false;

	// Only enqueue the script if the attribute is set and not already enqueued.
	if ( $is_onoff_class ) {
		wp_enqueue_script(
			'nickpagz-toggle-anything-view-script',
			plugin_dir_url( __FILE__ ) . 'build/view.js',
			array(),
			filemtime( plugin_dir_path( __FILE__ ) . 'build/view.js' ),
			true
		);
	}

	if ( $is_onoff_class ) {
		wp_enqueue_style(
			'nickpagz-toggle-anything-style',
			plugin_dir_url( __FILE__ ) . 'build/style-index.css',
			array(),
			filemtime( plugin_dir_path( __FILE__ ) . 'build/style-index.css' ),
		);
	}

	return $block_content;
}
add_filter( 'render_block', 'nickpagz_maybe_enqueue_view_script_and_style', 10, 2 );
