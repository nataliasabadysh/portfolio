---
title: React 18 and Suspense
date: "2024-02-01"
spoiler: "Speeding Up and better Preferments"
---

## Concurrency React 18 and Suspense

```
useTransition()
useDeferredValue()

```

- React 18 - update is Urgent by default
- Update Non-Urgent. Don't oot block the page

## 2. Suspense and Hydration

## 3.Better Batching of Updates

## Debounce and Throttle

- the problem is in 'amoooun of event' happening in so short perio of time
- we could send each time the request that can slow down the connectiong

- Debounce and Throttle instead of callig every time
- they will set delay min time betweeen the last request
-

[LINK- to Video](https://www.youtube.com/watch?v=cjIswDCKgu0)

- Debounce: that postpones the execution amount of time event being triggered.
- Case Debounce: Search on Each Element

- Throttle: function is only executed at most once in a specified period.
- Case Throttle: Event for Resizing Window, Mouse Movement, Scrolling

[throttle](https://lodash.com/docs/#throttle)
[debounce](https://lodash.com/docs/#debounce)

```js
function debounce(func, delay) {
  let inDebounce;

  return function (...args) {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func(...args), delay);
  };
}

const [searchTerm, setSearchTerm] = useState("");

const handleSearch = useCallback(() => {
  console.log("Searching for", searchTerm);
}, [searchTerm]);

const debouncedSearch = useCallback(debounce(handleSearch, 300), [
  handleSearch,
]);

const handleChange = (event) => {
  setSearchTerm(event.target.value);
  debouncedSearch();
};
```
