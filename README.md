# Pixel Perfect

A pixel perfect SCSS stylesheets to get you going.

# How to install

```
$ npm i pixel-perfect --save
```

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

