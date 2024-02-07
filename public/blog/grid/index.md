---
title: "Complex CSS Layout with Grid"
date: "2024-02.02"
spoiler: "Complex layouts with CSS and Grid"
---

## Why Grid?

- For more Complex layouts.
- Grid has 2-dimensional alignment, using a top-down approach to layout.
- Where Flexbox focuses on space distribution within an axis, employing a bottom-up approach to layout.
- Grid and Flex can be used together along with others like float.

## Grid VS Flex

[CSS Flexible Box Layout Module Level ](https://www.w3.org/TR/css-flexbox-1/)
[LINK- CSS Grid Layout Module](https://www.w3schools.com/css/css_grid.asp)
[LINK - CSS Grid Layout Module Level 2](https://www.w3.org/TR/css-grid-2/)

## Grid VS Flex

```css
.feature-list {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  gap: 10px;
}
.feature-list-item {
  padding: 30px;
}
```

```css
.feature-list {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.feature-list-item {
  padding: 30px;
  flex-basis: calc((100% - 20px) / 3);
  color: #ffffff;
}
```

## 1. Grid - <mark> Tracks - rows and columns</mark>

- Fixed sizing: 200px.
- Flexible sizing: 2fr - Frequency Regulation (Grid FR)
- Content-based sizing: Using the auto keyword or the min-content and max-

### examples:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 50px 200px;

```

###  Grid set up the columns: 

```css
/* 1) */
grid-template-columns: 1fr 1fr 1fr 1fr;
/* 2) Or, instead, we can use repeat */
grid-template-columns: repeat(4, 1fr);
/* 3) We can give a name */
grid-template-columns: [line1] 1fr [line2] 1fr [line3] 1fr [line4] 1fr;
/* 4) We can set width min and max */
grid-template-columns: 1fr 1fr 1fr minmax(150px, 1fr);
/* 5) Auto - generate the size based on the content */
grid-template-columns: 1fr 1fr 1fr 1fr;

/* And for rows */
grid-template-rows: 1fr 1fr;
```

```css
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr;
gap: 10px;

/* OR we can use a shortcut for both 
 grid-template: 1st - ROWS and / 2nd - COLUMNS */
grid-template: repeat(2, 1fr) / repeat(4, 1fr);
```

### Space:
- Adapt the space specifications based on loyalty, ensuring flexibility in use

```css
grid-row-gap: 10px;
grid-column-gap: 20px;

/* <!-- shortcut --> */
grid-gap: 10px 20px;
gap: 10px;
```

### We can set up the Order of element 

```css
div:nth-child(6) {
  order: -1;
}
```

## example: 
```html
<section class="boxes container">
  <nav class="box box1">Sidebar</nav>
  <main class="box box2">
    <p>Cheese triangles lancashire hard cheese macaroni cheese swiss.</p>
  </main>
  <footer class="box box3">Footer</footer>
</section>
```

```css
.container {
  display: grid;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  grid-template-areas:
    "sidebar main main"
    "sidebar footer footer";
}
.box1 {
  grid-area: sidebar;
}
.box2 {
  grid-area: main;
}
.box3 {
  grid-area: footer;
}
```
