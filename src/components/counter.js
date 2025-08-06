import React, { useState } from "react";
import styles from "./counter.module.css";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section className={styles.counterSection}>
      <div>
        <h1>Counter App</h1>
        <h5>Count: {count}</h5>
        <div>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
      </div>
    </section>
  );
}
