import { useState } from "react"
import Button from "../Button/Button";
import styles from "./Counter.module.scss";
import type { CounterProps } from "./Counter.types";

const Counter = ({ count, updateFn }: CounterProps) => {
    const handleClick = () => {
        updateFn((c: any) => c + 1);
    }
    return (
        <div className={styles.counter}>
            <span>{count}</span>
            <Button onClick={handleClick}>Increment</Button>
        </div>
    )
}

export default Counter