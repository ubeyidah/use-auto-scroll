# **use-auto-scroll**

_A simple React hook to automatically scroll to the bottom when new messages arrive._

## **✨ Features**

✅ **Auto-scroll** to the bottom when new content is added.  
✅ **Smooth scrolling** experience.  
✅ Lightweight and **zero dependencies** (except React).  
✅ Works with **chat apps, logs, notifications**, etc.

---

## **📦 Installation**

Install via **npm** or **yarn**:

```sh
npm install use-auto-scroll
# or
yarn add use-auto-scroll
# or
bun add use-auto-scroll
```

---

## **🚀 Basic Usage**

Here's how to use the hook inside a **React chat application**:

```jsx
import React, { useState } from "react";
import useAutoScroll from "use-auto-scroll";

const ChatApp = () => {
  const [messages, setMessages] = useState(["Hello!", "How are you?"]);
  const bottomRef = useAutoScroll([messages]); // Hook to auto-scroll when messages update

  const sendMessage = () => {
    setMessages([...messages, "New message!"]);
  };

  return (
    <div
      style={{
        height: "300px",
        overflowY: "auto",
        border: "1px solid #ccc",
        padding: "10px",
      }}
    >
      {messages.map((msg, i) => (
        <p key={i}>{msg}</p>
      ))}
      <div ref={bottomRef} /> {/* Auto-scroll target */}
      <button onClick={sendMessage} style={{ marginTop: "10px" }}>
        Send
      </button>
    </div>
  );
};

export default ChatApp;
```

---

## **📌 How It Works**

1. The hook returns a `ref`, which should be **attached to the last element** in the container.
2. Whenever the dependencies change (e.g., when new messages are added), the hook **automatically scrolls to the bottom**.
3. The scrolling is **smooth** for a better user experience.

## **📚 More Use Cases**

### **1️⃣ Log Viewer**

```jsx
const bottomRef = useAutoScroll([logs]);

return (
  <div style={{ maxHeight: "400px", overflowY: "auto" }}>
    {logs.map((log, i) => (
      <pre key={i}>{log}</pre>
    ))}
    <div ref={bottomRef} />
  </div>
);
```

### **2️⃣ Notification List**

```jsx
const bottomRef = useAutoScroll([notifications]);

return (
  <ul style={{ height: "200px", overflowY: "scroll" }}>
    {notifications.map((notif, i) => (
      <li key={i}>{notif}</li>
    ))}
    <div ref={bottomRef} />
  </ul>
);
```

---

## **📌 API Reference**

| Parameter      | Type         | Default | Description                                |
| -------------- | ------------ | ------- | ------------------------------------------ |
| `dependencies` | `Array<any>` | `[]`    | The dependencies that trigger auto-scroll. |

---

## **🛠 Development & Contribution**

Want to improve this package? Follow these steps:

### **1. Clone the Repository**

```sh
git clone https://github.com/ubeyidah/use-auto-scroll.git
cd use-auto-scroll
```

### **2. Install Dependencies**

```sh
npm install
```

## **📜 License**

This package is licensed under the **MIT License**.

---

## **🌟 Support**

If you find this package useful, please consider **starring** ⭐ it on GitHub!

🔥 Happy Coding! 🚀
