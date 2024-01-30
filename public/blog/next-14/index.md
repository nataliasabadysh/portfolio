---
title: "Next.js 14"
date: "2024-01-29"
spoiler: "React Server Action integration with JS App Router"
---

```jsx {3,6,15}
function MessageThread() {
  const [message, setMessage] = useState('');
  const latestMessage = useRef('');

  const showMessage = () => {
    alert('You said: ' + latestMessage.current);
  };

  const handleSendClick = () => {
    setTimeout(showMessage, 3000);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    latestMessage.current = e.target.value;
  };
```

**You’ve “captured” props at the time of render:**

This way any code inside it (including `showMessage`) is guaranteed to see the props for this particular render. React doesn’t “move our cheese” anymore.

**We could then add as many helper functions inside as we want, and they would all use the captured props and state.** Closures to the rescue!
