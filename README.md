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

## Step 4: Create a theme for your app (optional)
```
$theme-light: pp-theme(
  $primary: pp-palette($pp-blue),
  $accent: pp-palette($pp-lime),
  $warn: pp-palette($pp-orange),
  $error: pp-palette($pp-red),
  $success: pp-palette($pp-lime),
  $is-dark: false,
  $theme-vars: (
    "foreground": (
      "text": black,
      "navbar": map-get($pp-grey, 300)
    ),
    "background": (
      "app": white,
      "navbar": map-get($pp-blue, 500)
    )
  )
);
```

## Step 5: Customize the variables (optional)
If you wish to customize the variables, import the variables overwriting the pixel-perfect variables before importing the layout.
```
$font-size-h1: 20rem;
$font-size-h2: 17rem;
...

@import "~pixel-perfect/pixel-perfect.scss";
...
```

## Step 6: Create your app-theme (optional)
Here is an example of what your theme could look like.
```
@mixin demo-theme($theme) {
  $primary: pp-theme-primary($theme);
  $foreground: pp-foreground-vars($theme);
  $background: pp-background-vars($theme);

  body {
    color: pp-theme-var($foreground, "text");
    background: pp-theme-var($background, "app");
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

$font-size-l:   px-to-rem(18) !default;
$font-size-m:   px-to-rem(15) !default; 

$font-size-h1:  px-to-rem(50) !default;
$font-size-h2:  px-to-rem(32) !default;

$font-weight-h1:  $font-weight-bold !default;
$font-weight-h2:  $font-weight-thin !default;

```

Its fine to use the module name (eg. "button") as prefix. 
```
$button-border: none !default;
$button-border-radius: px-to-rem(6) !default;

$button-font-size: $font-size-h4 !default;
$button-line-height: 100% !default;
$button-transition: all 200ms ease !default;
```

# License

MIT