<?php
/**
 * Plugin Name:       Toggle (Almost) Anything
 * Description:       A customizable slider toggle switch to control visibility of any block.
 * Requires at least: 6.5
 * Requires PHP:      7.4
 * Version:           0.1.0
 * Author:            Nick Pagazani
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       slider-toggle-anything
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
function nickpagz_slider_toggle_anything_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'nickpagz_slider_toggle_anything_block_init' );
