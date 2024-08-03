import { ChangeEvent, FormEventHandler } from "react";
import styles from "./button.module.scss";

const Button: React.FC<{
    children?: React.ReactNode,
    onClick?: (e: React.FormEvent<HTMLFormElement>) => void,
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void,
    buttonType: 'submit' | 'reset' | 'button' | undefined;
}> = ({ children, onClick, onSubmit, buttonType = 'button' }) => {

    return (
        <button
            type={buttonType}
            className={styles.button}
            onSubmit={onSubmit}
            onClick={onClick}>
            {children}
        </button>
    )
}

export default Button