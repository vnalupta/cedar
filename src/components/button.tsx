import styles from "./button.module.scss";

const Button: React.FC<{
    children?: React.ReactNode,
    onClick?: () => void,
    onSubmit?: () => void,
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