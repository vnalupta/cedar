'use client';

import { createContext, useReducer, useContext, useEffect } from "react";

const FormContext = createContext(null);
const FormDispatchContext = createContext(null);

export function FormProvider({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    const [inputs, dispatch] = useReducer(inputsReducer, []);

    useEffect(() => {
        dispatch({
            type: "REPLACE_STATE",
            payload: [
                {
                    label: "Card number",
                    value: "",
                    name: "credit",
                    valid: false,
                },
                {
                    label: "Expires (MMYY)",
                    value: "",
                    name: "expiration",
                    valid: false,
                },
                {
                    label: "Security code (CVV)",
                    value: "",
                    name: "security",
                    valid: false,
                },
                {
                    label: "Name on card",
                    value: "",
                    name: "name",
                    valid: false,
                },
                {
                    label: "Zip code",
                    value: "",
                    name: "zip",
                    valid: false,
                },
            ]
        });
    }, []);


    return (
        <>
            <FormContext.Provider value={inputs}>
                {/* @ts-ignore */}
                <FormDispatchContext.Provider value={dispatch}>
                    {children}
                </FormDispatchContext.Provider>
            </FormContext.Provider>
        </>
    );
}

export function useForm() {
    return useContext(FormContext);
}

export function useFormDispatch() {
    return useContext(FormDispatchContext);
}

// @ts-ignore
function inputsReducer(inputs, action) {
    switch (action.type) {
        case "REPLACE_STATE": {
            return action.payload;
        }

        case "input_changed": {
            // @ts-ignore
            return inputs.map((input) => {
                if (action.name === input.name) {
                    return {
                        ...input,
                        valid: action.valid,
                        value: action.value
                    };
                } else {
                    return input;
                }
            });
        }
        default: {
            throw Error("Unknown action: " + action.type);
        }
    }
}
