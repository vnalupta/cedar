import styles from "./paymentform.module.scss"

import Button from "@/components/button";
import Input from "@/components/input";

import { useForm } from "@/components/formcontext";

const PaymentForm: React.FC<{
    proceed: () => void;
}> = ({ proceed }) => {
    const inputs = useForm();

    function handleSubmit() {
        // @ts-ignore
        const formIsValid = inputs?.every((input) => input.valid);
        // check that all input values are length > 1
        // if not, set error state

        // if not error state
        proceed();
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
                    showRequiredError
                />
            ))}
            {/* {inputs && inputs.map((input, idx) => {(
                <>
                    <Input label={input.label} name={input.name} showRequiredError />
                </>
            )})} */}
            {/* <Input label="Card number" name="credit" />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Input label="Expires (MM/YY)" name="expiration" />
                <Input label="Security code (CVV)" name="security" />
            </div>

            <Input label="Name on card" name="name" />

            <Input label="Zip code" name="zip" /> */}

            <Button onClick={handleSubmit}>Continue</Button>
        </form>
    );
};

export default PaymentForm;
