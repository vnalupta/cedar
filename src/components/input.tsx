import { ChangeEvent, useState } from "react";
import styles from "./input.module.scss";

import { useFormDispatch } from "./formcontext";

const Input: React.FC<{
    name: string;
    label: string;
}> = ({ name, label }) => {

    const dispatch = useFormDispatch();

    const [status, setStatus] = useState("initial"); // initial | valid | error
    const [value, setValue] = useState("");

    function inputChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);

        if (e.target.value.length === 5) {
            setStatus("valid")
        } else if (e.target.value.length === 0) {
            setStatus("initial")
        } else {
            setStatus("error")
        }

        dispatch({
            type: "input_changed",
            name: name,
            valid: status === "valid"
        })
    }

    return (
        <div className={styles.container}>
            <label htmlFor={name}>{label}</label>
            {name === "credit" && (
                <input
                    className={styles.input}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9\s]{13,19}"
                    maxLength={19}
                    plapnceholder="xxxx xxxx xxxx xxxx"
                    required
                    onChange={inputChangeHandler}
                />
            )}

            {/* expiration */}
            {name === "expiration" && (
                <input
                    className={styles.input}
                    name="expiration"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    required
                    onChange={inputChangeHandler}
                />
            )}

            {/* security */}
            {name === "security" && (
                <input
                    className={styles.input}
                    name="security"
                    type="text"
                    inputMode="numeric"
                    maxLength={4}
                    pattern="[0-9]*"
                    required
                    onChange={inputChangeHandler}
                />
            )}

            {/* name */}
            {name === "name" && (
                <input
                    className={styles.input}
                    name="name"
                    type="text"
                    required
                    onChange={inputChangeHandler}
                />
            )}

            {name === "zip" && (
                <input
                    className={styles.input}
                    name="zip"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    required
                    onChange={inputChangeHandler}
                />
            )}

            {value.length === 0 && status === "error" && (
                <p className={styles.error}>This field is required</p>
            )}
        </div>
    );
};

export default Input;
