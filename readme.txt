=== Toggle Anything ===
Contributors:      npagazani
Tags:              block, switch, toggle, hide
Tested up to:      6.6
Stable tag:        1.0.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

A customizable toggle switch used to control visibility of other blocks on the page.

== Description ==

The Toggle Anything block allows you to control visibility of other blocks on the page via user interaction.
A common example is a pricing page where a user can toggle between monthly vs yearly subscription pricing. With this plugin allows you to design your own pricing tables using core blocks, then control the which items are visible or hidden when the switch is toggled.

== Features ==
* Toggle visibility of any element on the page. Does not need to be a nested block.
* Set a default toggle state.
* Choose your own "On" and "Off" state class names.
* Non-Javascript friendly. Default state content displays, toggle is hidden.
* Additional classes to show or hide other related components on non-Javascript browsers.
* Multiple toggles allowed on the same page.
* Multiple design configurations for each toggle.
* Option for adding text in on/off positions.
* Easy Custom CSS additions for each toggle/switch component.


== Installation ==

Use the standard WordPress plugins installation page and install or upload the plugin. After plugin activation the block "Toggle Anything" will be visible in the editor.


== Frequently Asked Questions ==

= Can I add multiple blocks to the same page? =

Yes.

= Are the block styles customizable? =

Yes.

= What about non-Javascript enabled browsers? =

We've got you covered there too. The toggle will automatically be hidden, and the default toggle class will be displayed.
The block also includes other "no-JS" classes you can use for hiding/showing content.

== Screenshots ==

1. General block view and settings
2. Basic toggle settings for classes and default state
3. Optional text settings
4. Various styling options
5. Setting the show/hide classes on other blocks
6. Pricing page example


== Changelog ==

= 1.0.0 =
* Add selector components for making classes easier to add
* Use HTML Tag processor API for adding classes on rendered page
* Reduce whitespace in inline css in the save markup
* Conditionally add inline css selectors

= 0.2.1 =
* Tweak no-js functionality

= 0.2.0 =
* Option for display type (block, flex, etc)
* Default switch position on page load
* No JavaScript page load fallback

= 0.1.0 =
* Release
