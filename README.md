# Pixel Perfect

A pixel perfect SCSS stylesheets to get you going.

# How to use

## Step 1: Install Pixel Perfect

```
$ npm i pixel-perfect --save
```

## Step 2: Import the library
```
@import "~pixel-perfect/base.scss";
@import "~pixel-perfect/layout.scss";
```

## Step 3: Create a theme for your app (optional)
```
$theme-light: pp-theme(
  pp-palette($pp-blue),
  pp-palette($pp-lime),
  pp-palette($pp-orange),
  pp-palette($pp-red),
  pp-palette($pp-lime),
  false,
  (
    "text": black,
    "navbar": map-get($pp-grey, 300)
  ),
  (
    "app": white,
    "navbar": map-get($pp-blue, 500)
  )
);
```

## Step 4: Include the layout (optional)

You can include everything from the layout.

```
@include pp-layout();
```

Or you can handpick the styles you wish. Let's say you only want the grid and the typography.
```
@include pp-grid();
@include pp-typography();
```

## Step 5: Customize the variables
If you wish to customize the variables, import the variables overwriting the pixel-perfect variables before importing the layout.
```
$font-size-h1: 20rem;
$font-size-h2: 17rem;
...

@import "~pixel-perfect/base.scss";
...
```

## Step 6: Create your app-theme
Here is an example of what your theme could look like
```
@mixin demo-theme($theme) {
  $foreground: pp-theme-foreground($theme);
  $background: pp-theme-background($theme);
  $primary: pp-theme-primary($theme);

  body {
    color: map-get($foreground, "text");
    background: map-get($background, "app");
  }

  .gray-text {
    color: pp-color($primary, 500);
  }

  .gray-text-lighter {
    color: pp-color($primary, "lighter");
  }
}
```

## Base

The base stylesheet contains variables, mixins and functions. It also provides functions that can be used for theming.

## Layout

The layout stylesheet contains classes for the grid, typography, global styles and normalization.

# SCSS naming

Go from general to concrete in the naming. Examples could be "property-element" or "property-state".
```
$font-size-base-screen-l:   17px !default;

$font-size-l:   pxToRem(18) !default;
$font-size-m:   pxToRem(15) !default; 

$font-size-h1:  pxToRem(50) !default;
$font-size-h2:  pxToRem(32) !default;

$font-weight-h1:  $font-weight-bold !default;
$font-weight-h2:  $font-weight-thin !default;

```

Its fine to use the module name (eg. "button") as prefix. 
```
$button-border: none !default;
$button-border-radius: pxToRem(6) !default;

$button-font-size: $font-size-h4 !default;
$button-line-height: 100% !default;
$button-transition: all 200ms ease !default;
```

# License

MIT