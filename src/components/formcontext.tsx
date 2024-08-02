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
                    name: "credit",
                    valid: false,
                },
                {
                    name: "expiration",
                    valid: false,
                },
                {
                    name: "security",
                    valid: false,
                },
                {
                    name: "name",
                    valid: false,
                },
                {
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
