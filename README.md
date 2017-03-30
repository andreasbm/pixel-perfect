# Pixel Perfect

A pixel perfect SCSS stylesheets to get you going.

# How to use
 
Download the source code or use NPM to install pixel-perfect.

```
$ npm i pixel-perfect --save
```

Import the three stylesheets in the following order.
```
@import "../../node_modules/pixel-perfect/base";
@import "../../node_modules/pixel-perfect/components";
@import "../../node_modules/pixel-perfect/layout";
```

If you wish to customize the variables, import the variables overwriting the pixel-perfect variables before importing the styles.
```
$font-size-h1: 20rem;
$font-size-h2: 17rem;
...

@import "../../node_modules/pixel-perfect/base";
...
```

## Base

The base stylesheet contains variables, mixins and functions.

## Components

The components stylesheet contains classes for components (eg. input fields and buttons).

## Layout

The layout stylesheet contains classes for the grid, colors, typography, global styles and normalization.


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

$button-padding-left-right: pxToRem(15) !default;
$button-padding-top-bottom: pxToRem(15) !default;
$button-padding: $button-padding-top-bottom $button-padding-left-right;

$button-font-size: $font-size-h4 !default;
$button-line-height: 100% !default;
$button-transition: all 200ms ease !default;
```

# License

MIT

