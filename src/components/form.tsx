import styles from "./paymentform.module.scss"

import Button from "@/components/button";
import Input from "@/components/input";

import { useForm } from "@/components/formcontext";
import { useState } from "react";

const PaymentForm: React.FC<{
    proceed: () => void;
}> = ({ proceed }) => {
    const inputs = useForm();
    const [evaluated, setEvaluated] = useState(false);

    function handleSubmit() {
        setEvaluated(true);
        // @ts-ignore
        const formIsValid = inputs?.every((input) => input.valid);

        if (formIsValid) {
            setEvaluated(false);
            proceed();
        }
    }

    if (!inputs) {
        return <></>;
    }

    return (
        <form>
            {/* @ts-ignore */}
            {inputs.map((input, idx) => (
                <Input
                    id={idx}
                    label={input.label}
                    name={input.name}
                    key={idx}
                    value={input.value}
                    valid={input.valid}
                    showRequiredError={evaluated && input.value.length === 0}
                />
            ))}
            <Button onClick={handleSubmit}>Continue</Button>
        </form>
    );
};

export default PaymentForm;
