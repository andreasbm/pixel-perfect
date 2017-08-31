# Pixel Perfect

A pixel perfect SCSS stylesheets to get you started.

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
@mixin dark-theme() {
  @include css-vars(palette("primary", $pp-yellow));
  @include css-vars(palette("accent", $pp-orange));
  @include css-vars(palette("warn", $pp-red));
  @include css-vars(palette("error", $pp-orange));
  @include css-vars(palette("success", $pp-black-dirty));
  @include css-vars((
    --navbar-color: black,
    --navbar-bg: map-get($pp-yellow, 500),
    --app-text: white,
    --app-bg: black
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

You might be wondering what variables the `css-vars(palette(...))` spits out. The palette function spits out all the nessesary key-value pairs for the palette. Look below what variables we are talking about.

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

@include css-vars(palette("primary", $pp-blue), $root: true);

:root {
  --primary-default: pp-map-get($palette, $default)
  --primary-lighter: pp-map-get($palette, $lighter),
  --primary-darker: pp-map-get($palette, $darker),
  --primary-default-contrast: pp-contrast($palette, $default),
  --primary-lighter-contrast: pp-contrast($palette, $lighter),
  --primary-darker-contrast: pp-contrast($palette, $darker)
  
  --primary-500: pp-map-get($palette, 500),
  --primary-500-contrast: pp-contrast($palette, 500)
  
  --primary-600: pp-map-get($palette, 600),
  --primary-600-contrast: pp-contrast($palette, 600)
  
  --primary-400: pp-map-get($palette, 400),
  --primary-400-contrast: pp-contrast($palette, 400)
}
```

## Step 5: Decide whether you want custom CSS variables or SASS variables.

The variables can be used in your stylesheets by using the `var(args...)` function. If you want the primary default color you could grab it by using `var(--primary-default)`. The theming in pixel-perfect uses custom CSS variables out of the box. Unfortunately, not all browsers support custom CSS variables yet ([See current state](http://caniuse.com/#feat=css-variables)). Therefore you can set the flag `$css-vars-use-native: false;` to tell pixel-perfect to use SASS variables instead. We recommend that you use custom CSS variables to get all the sweet benefits and serve at seperate stylesheet for browsers without custom CSS variables.

If you want to deactive (we DON'T recommend this!!) you can do the following by extracting all of your theme related sass into one mixin that you can reuse with different variables:

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

If you wish to customize the variables, import the variables overwriting the pixel-perfect variables before importing the layout.

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