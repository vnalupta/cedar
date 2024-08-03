import { ChangeEvent, FormEventHandler } from "react";
import styles from "./button.module.scss";

const Button: React.FC<{
    children?: React.ReactNode,
    onClick?: (e: React.FormEvent<HTMLFormElement>) => void,
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void,
    buttonType: 'submit' | 'reset' | 'button' | undefined;
    testid?: string
}> = ({ children, onClick, onSubmit, buttonType = 'button', testid }) => {

    return (
        <button
            type={buttonType}
            className={styles.button}
            onSubmit={onSubmit}
            onClick={onClick}
            data-testid={testid}>
            {children}
        </button>
    )
}

export default Button