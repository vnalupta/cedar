import { ChangeEvent, useState } from "react";
import styles from "./input.module.scss";

import { useFormDispatch } from "./formcontext";
import { match } from "assert";

const Input: React.FC<{
    id: number;
    name: string;
    label: string;
    value: string;
    valid: boolean;
    showRequiredError: boolean;
}> = ({ id, name, label, value, valid, showRequiredError }) => {
    const dispatch = useFormDispatch();

    const validPatternMap = {
        credit: /[0-9\s]{13,19}/,
        expiration: /[0-9\s]{4}/,
        security: /[0-9\s]{3,4}/,
        zip: /[0-9\s]{5}/,
        name: /[a-zA-Z]/,
    };

    function maxLengthGenerator(name: string): number {
        let maxLength = 512;

        if (name === "credit") {
            maxLength = 19;
        } else if (name === "zip") {
            maxLength = 5;
        } else if (name === "security" || name === "expiration") {
            maxLength = 4;
        }

        return maxLength;
    }

    function validator(value: string | number) {
        const pattern = validPatternMap[name];

        return pattern.test(value);
    }

    function inputChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        const val = e.target.value;
        const matchesPattern = validator(val);

        dispatch({
            type: "input_changed",
            name: name,
            value: val,
            valid: matchesPattern
        });
    }

    return (
        <div
            className={`${styles.container} ${id === 1 ? styles.sibling : ""}`}
        >
            <label htmlFor={name}>{label}</label>
            <input
                className={`
                    ${value.length > 1 && valid ? `${styles.valid}` : ``}
                    ${value.length > 1 && !valid ? `${styles.invalid}` : ``}
                    ${styles.input}
                `}
                name={name}
                type={`${name === "name" ? "text" : "numeric"}`}
                value={value}
                maxLength={maxLengthGenerator(name)}
                onChange={inputChangeHandler}
                required
            />

            {showRequiredError && (
                <p className={styles.error}>This field is required</p>
            )}
        </div>
    );
};

export default Input;
