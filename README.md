# sass-flex-gap
A Sass polyfill for flex-gap CSS property.

## Installation

```bash
npm install sass-flex-gap
```

## Usage

Sass:

```scss
@use "sass-flex-gap" as sfp;

.container {
  display: flex;
  @include sfp.flex-gap(10px);
}
```

HTML:
```html
<div class="container">
    <div class="item"></div>
    <div class="item"></div>
    <div class="item"></div>
</div>
```
