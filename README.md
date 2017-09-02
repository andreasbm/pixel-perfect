# Pixel Perfect

A pixel perfect SCSS stylesheet (demo: [https://pixel-perfect-39e99.firebaseapp.com/](https://pixel-perfect-39e99.firebaseapp.com/)). Spiced with themeable mixins, custom CSS variables and other cool stuff you can handpick from.

Pixel perfect definition:

> Each pixel is intentionally being used to the fullest for the sharpest, cleanest look.

# How to use

## Step 1: Install Pixel Perfect

```
$ npm i pixel-perfect --save
```

## Step 2: Import the library
```
@import "~pixel-perfect/pixel-perfect.scss";
```

## Step 3: Include the layout

You can include everything from the layout.

```
@include pp-layout();
```

Or you can handpick the styles you want. Let's say you only want the grid and the typography.
```
@include pp-grid();
@include pp-typography();
```

## Step 4: Create a theme for your app

Create a theme (or multiple themes) for your app.
```
@mixin light-theme() {
  @include css-vars(pp-palette("primary", $pp-yellow));
  @include css-vars(pp-palette("accent", $pp-orange));
  @include css-vars(pp-palette("warn", $pp-red));
  @include css-vars(pp-palette("error", $pp-orange));
  @include css-vars(pp-palette("success", $pp-black-dirty));
  @include css-vars((
    --navbar-color: white,
    --navbar-bg: map-get($pp-yellow, 500),
    --app-text: black,
    --app-bg: white
  ));
}
```

Include the mixins in your stylesheet. You could for example scope the themes in classes to quickly switch between themes on runtime.

```
.theme-light {
  @include light-theme();
}

.theme-dark {
  @include dark-theme();
}
```

You might be wondering what variables the `css-vars(pp-palette(...))` spits out. The palette function spits out all the nessesary key-value pairs for the palette. Look below what variables we are talking about.

```
$pp-blue: (
  500: #4581F6,
  400: light-color(#4581F6),
  600: dark-color(#4581F6),
  contrast: (
    500: $white-87-opacity,
    400: $white-87-opacity,
    600: $white-87-opacity
  )
);

@include css-vars(pp-palette("primary", $pp-blue), $root: true);

:root {
  --primary-default: pp-map-get($colors, $default)
  --primary-lighter: pp-map-get($colors, $lighter),
  --primary-darker: pp-map-get($colors, $darker),
  --primary-default-contrast: pp-contrast($colors, $default),
  --primary-lighter-contrast: pp-contrast($colors, $lighter),
  --primary-darker-contrast: pp-contrast($colors, $darker)
  
  --primary-500: pp-map-get($colors, 500),
  --primary-500-contrast: pp-contrast($colors, 500)
  
  --primary-600: pp-map-get($colors, 600),
  --primary-600-contrast: pp-contrast($colors, 600)
  
  --primary-400: pp-map-get($colors, 400),
  --primary-400-contrast: pp-contrast($colors, 400)
}
```

## Step 5: Decide whether you want custom CSS variables or SASS variables.

The variables can be used in your stylesheets by using the `var(args...)` function. If you want the primary default color you could grab it by using `var(--primary-default)`. The theming in pixel-perfect uses custom CSS variables out of the box. Unfortunately, not all browsers support custom CSS variables yet ([See current state](http://caniuse.com/#feat=css-variables)). Therefore you can set the flag `$css-vars-use-native: false;` to tell pixel-perfect to use SASS variables instead. We recommend that you use custom CSS variables to get all the sweet benefits and either serve a seperate stylesheet for browsers without custom CSS variables or use polyfills.

If you want to deactivate you can do the following by extracting all of your theme related sass into one mixin that you can reuse with different variables:

```
// Deactive custom CSS variables :,(
$css-vars-use-native: true;

.theme-light {
  @include light-theme();
  @include demo-theme();
}

.theme-dark {
  @include dark-theme();
  @include demo-theme();
}
```

## Step 6: Customize the variables (optional)

Its possible to customize most of the variables used in pixel-perfect.

```
@import "~pixel-perfect/pixel-perfect.scss";

$font-size-h1: 20rem;
$font-size-h2: 17rem;

$space-s: 5rem;
$space-m: 10rem;
$space-l: 15rem;
...
```

## Step 7: Create your app-theme

Here is an example of what your theme could look like.

```
@mixin demo-theme() {
  body {
    color: var(--app-text);
    background: var(--app-bg);
  }
}
```

# SCSS naming

Go from general to concrete in the naming. Examples could be "property-element" or "property-state".

```
$font-size-base-screen-l:   17px !default;

$font-size-l:   px-to-rem(18) !default;
$font-size-m:   px-to-rem(15) !default; 

$font-size-h1:  px-to-rem(50) !default;
$font-size-h2:  px-to-rem(32) !default;

$font-weight-h1:  $font-weight-bold !default;
$font-weight-h2:  $font-weight-thin !default;

$space-screen-s: px-to-rem(20) !default;

```

Its fine to use the module name (eg. "button") as prefix. 
```
$button-border: none !default;
$button-border-radius: px-to-rem(6) !default;

$button-font-size: $font-size-h4 !default;
$button-line-height: 100% !default;
$button-transition: all 200ms ease !default;
```

# Mixin overview

Heres an overview of some of the sweet mixins that can generate classes for you.

```
@include pp-normalize();
@include pp-color-classes();
@include pp-elevation-classes();

@mixin pp-layout() {
	@include pp-normalize();
	@include pp-global();
	@include pp-typography();
	@include pp-grid();
}

@mixin pp-layout-helpers() {
  @include pp-layout-helpers-padding();
  @include pp-layout-helpers-margin();
  @include pp-layout-helpers-display();
  @include pp-layout-helpers-alignment();
}
```

# License

MIT