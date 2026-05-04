import { useState } from "react";
import styles from "./App.module.scss";
import Counter from "./components/Counter/Counter";
const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <div className={styles.container}>
      <Counter count={count1} updateFn={setCount2}/>
      <Counter count={count2} updateFn={setCount1}/>
    </div>
  )
}

export default App