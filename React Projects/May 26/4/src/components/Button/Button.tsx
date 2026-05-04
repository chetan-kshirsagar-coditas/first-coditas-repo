import type { ButtonProps } from "./Button/Button.types";
import styles from "./Button.module.scss";


const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={styles.button} {...props}>
        {children}
    </button>
  )
}

export default Button;