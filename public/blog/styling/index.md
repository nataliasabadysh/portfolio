---
title: Let's paint your web application with CSS
date: "2024-02-01"
spoiler: "Let's create art from your application."
---

## CSS

<mark>Cascading Style Sheets, Cascading Style Tables</mark>

is a style sheet language used for describing
and modifying the appearance of HTML elements.
HTML is used to define the structure and semantics of a document's
content, and CSS is used to style and position it.

# <mark> Base CSS Syntax</mark>

## 1. Inline Styles

```html
<p style="color:blue; font-size:24px;">This text will be blue.</p>
```

## 2. Embedded Style Sheets

- cannot be reused on other pages and are difficult to scale and maintain.
- Could be used to optimize page rendering speed. This technique is called `Critical CSS` for faster rendering and painting.

```html
<head>
  <style type="text/css">
    p {
      color: blue;
      font-size: 24px;
    }
  </style>
</head>
```

## 3. External style sheet

- CSS code is easy to scale, maintain and reuse on other pages
- also can be compressed - file.min.css

```html
<head>
  <link rel="stylesheet" href="./css/styles.css" />
</head>
```

## Selectors

Describes the type of element that the CSS rule will be applied to.

```css
/* It applies to all paragraphs on the page */
p {
  font-size: 24px;
}

/* It applies to all links on the page */
a {
  text-decoration: none;
}
```

## Class Selector

This is the main selector in modern development.
The class selector is usually used with the global class attribute.

```html
<h1 class="title">Hi, I’m Mango.</h1>
<p class="text">
  Welcome to my personal page. Here you can see
  <a class="link" href="">the projects.</a>
</p>
```

```css
/* Applies to all class tags */
.title {
  font-weight: 500;
}
.text {
  color: brown;
  font-size: 18px;
}
.link {
  text-decoration: none;
}
```

## Class Composition

An element can have multiple classes, and in this case they are written using a space.

```html
<p class="alert success">Account replenishment completed</p>
<p class="alert warning">Attention, the tariffs will be changed</p>
<p class="alert error">Transaction Error</p>
```

```css
/* Common styles for all types of notifications */
.alert {
  font-size: 24px;
  font-weight: 500;
}
/* Specific styles for each type */
.success {
  color: green;
}
.warning {
  color: orange;
}
.error {
  color: red;
}
```

## ID selectors

- byt we don't want to use id as selectors.
- The unique value rule makes it impossible to reuse styles.
- ID selectors are intended to be used for “anchor” elements.

```html
<h1 id="title">Page title</h1>
```

```css
#title {
  font-weight: 500;
  color: orange;
}
```

## Descendant Selector

applies styles to all elements that are descendants of a specified element at any depth of nesting

```css
/* ❌ It applies to all links in the document */
a {
  color: blue;
  text-decoration: none;
}

/* ✅ It applies only to links that are inside a class tag social-links */
.social-links a {
  color: blue;
  text-decoration: none;
}
/* ✅ Specificity */
.post > .post-title {
  color: orange;
}
.post > a.post-link {
  color: brown;
}

/* ❌ but If nested selectors it could be difficult to read  */
/* ❌ can be broken if we change the tags */
.menu ul li a {
  color: blue;
  text-decoration: none;
}
```

## Child Selector

- allows to select ALL elements that are the direct children of a specified parent element

```html
<ul class="menu">
  <li></li>
</ul>
```

```css
.menu > li {
  border: 1px solid blue;
}
```

- allows to select ANY elements that are the children of a specified parent element

```css
.menu p {
  font-size: 18px;
}
```

## Attribute Selector

- It will apply styles to all elements that have an attribute with a specified value.

```css
a[title] {
  color: teal;
}
/* Unusual curly brace formatting is ok */
a[href="https://htmlreference.io"]
{
  color: teal;
}

a[href="https://cssreference.io"]
{
  color: orange;
}

a[href="https://www.youtube.com"]
{
  color: tomato;
}
```

# <mark> color</mark>

## RGB

```css
rgb(red, green, blue)

/* Pure red: 255 red, 0 green, 0 blue */
p {
  color: rgb(255, 0, 0);
}
/* Pure red: 100% red, 0% green, 0% blue */
p {
  color: rgb(100%, 0%, 0%);
}
```

## Hexadecimal

```css
/* Pure red: ff (100%) red, 00 (0%) green, 00 (0%) blue */
p {
  color: #ff0000;
}
/* Pure blue: 00 (0%) red, 00 (0%) green, ff (100%) blue */
p {
  color: #0000ff;
}
```

## Color transparency rgba()

```css
rgba(red, green, blue, alpha)

/* Pure red with 30% transparency */
p {
  background-color: rgba(255, 0, 0, 0.3);
}
/* Pure red with 30% transparency */
p {
  background-color: rgba(100%, 0%, 0%, 30%);
}
```

# <mark> Variable declaration </mark>

- root of a tree representing the document.
- root - specificity is higher the html tag

```css
/* variable is GLOBAL */

:root {
  --brand-color: #3f51b5;

  --white-color: #ffffff;
  --black-color: #212121;
  --text-color: #757575;
  --accent-color: #2196f3;
}

.section {
  border: 2px solid var(--brand-color);
}

.section-title {
  color: var(--brand-color);
}

.section-title::before {
  background-color: var(--brand-color);
}

/* Fallback values - variable passed in the first argument is undefined. */
.section {
  border: 2px solid var(--brand-color, orange);
}
```

## What about LOCAL SCOPE for variable ?

- If the value is only used in a specific page area
- we can create variables with a local scope

```css
.alert {
  --alert-text-color: black;

  color: var(--alert-text-color);
}

.alert.success {
  --alert-text-color: green;
}

.alert.warning {
  --alert-text-color: orange;
}

.alert.error {
  --alert-text-color: red;
}
```

# Selector specificity

## <mark>0-inline, 0-id, 0-class, 0-tag</mark>

- we dont want to use without class names
  IMAGE

```html
<article>
  <h1>Lorem ipsum dolor sit amet</h1>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi,
    veritatis nihil alias iste odit similique sit eius optio veniam, impedit
    cumque fuga facere labore quo id necessitatibus quaerat rerum.
  </p>
  <a href="">Read more...</a>
</article>
```

```css
/* Specificity - 0 0 0 1 */
p {
  color: green;
}
/* specificity of the second rule is higher. */
/* ✅ Specificity - 0 0 0 2  */
article > p {
  color: orange;
}
```

- better example with class name

```html
<article class="post">
  <h1 class="post-title" id="title">Lorem ipsum dolor sit amet</h1>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi,
    veritatis nihil alias iste odit similique sit eius optio veniam, impedit
    cumque fuga facere labore quo id necessitatibus quaerat rerum.
  </p>
  <a href="" class="post-link">Read more...</a>
</article>
```

```css
/* Specificity - 0 0 1 0 */
.post-title {
  color: green;
}

/* Specificity - 0 0 1 1 */
.post > h1 {
  color: red;
}

/* ✅ Specificity - 0 0 2 0 */
.post > .post-title {
  color: orange;
}
```

- ID specificity rule is higher

```css
/* Specificity - 0 0 1 0 */
.post-title {
  color: green;
}

/* ✅ Specificity - 0 1 0 0 */
#title {
  color: orange;
}
```

# <mark>State pseudo-class </mark>

- apply styles to interactive elements
- pseudo-class defines a specific state of an element and is attached to the selector

```css
selector:pseudo-class {
  /* Properties */
}
```

[LINK: Color Palettes](https://palettes.shecodes.io/)

## `:hover + :focus`

- <mark>important:</mark> we can use focus with hover effect for better accessibility

```css
.site-nav .link:hover,
.site-nav .link:focus {
  color: var(--black-color);
}
/* Or example with <table class="schedule"> ...  */
.schedule-body > tr:hover {
  background-color: tomato;
  color: white;
}
```

## `:active, :visited`

```css
.social-links .link:active {
  color: red;
}
.social-links .link:visited {
  color: green;
}
```

# <mark>Font </mark>

## <mark>Size </mark>

```css

```

## all possible selectors

```css
font-weight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
font-style: normal | italic | oblique | initial | inherit
font-family: 'Helvetica Neue', 'Roboto', 'Verdana', 'Tahoma', sans-serif;

```

```css
/* used to underline text and apply other effects, 
use case: for links, also ca be used with p, h1, .. */
text-decoration: none | underline | line-through | overline

/* controls the characters' case */
text-transform:  none | uppercase | lowercase | capitalize

/* Sets the indent value for only applies to the first line.
styling: as tab space  */
text-indent: value | percent | inherit

text-align: left | right | center | justify
** "justify" - not the best practice to use 


line-height: multiplier | value | percent | normal | inherit
letter-spacing: value | normal | inheri
word-spacing: value | normal | inherit
text-shadow: <X offset>, <Y offset>, <blur radius>, <color>
white-space: normal | nowrap | pre | pre-wraps

::first-letter h1 {
}
```

### Don't inherit "font-family", "cursor" by default

- button, input, select - don't inherit "font-family"

```css
button {
  font-family: inherit;
  cursor: pointer;
}
```

### <mark>font optimization</mark>, font we can optimize by using:

[LINK: Web Safe Font Stacks](https://www.thoughtco.com/web-safe-font-stacks-3467429) <br />
[LINK: cssfontstack](https://www.cssfontstack.com/) <br />
[LINK: How to use @font-face in CSS](https://css-tricks.com/snippets/css/using-font-face-in-css/) <br />
[LINK: `font-display` for the Masses, Loading in the Browser](https://css-tricks.com/font-display-masses/) <br />

# box-sizing

It's best practice to use this to avoid any conflicts with third-party libraries:

```css
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
```

## Example: <mark>CSS :last-child</mark>

```css
.site-nav {
  margin: 0;
  padding: 0;
  display: flex;
}

.site-nav__item {
  margin-right: 60px;
}

.site-nav__item a:last-child {
  margin-right: 0;
}
```

## Example:<mark> :not()</mark>

```css
.site-nav {
  margin: 0;
  padding: 0;
  display: flex;
}

// all without the last el
.site-nav__item a:not(:last-child) {
  margin-right: 60px;
}
```

```css
// every 3rd
.feature-list-item:not(:nth-last-child(-n + 3)) {
  margin-bottom: 60px;
}

// last row 
.feature-list-item:not(:nth-child(3n)) {
  margin-right: 30px;
}
```
