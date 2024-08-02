import Input from "./input";

const PaymentForm: React.FC = () => {
    return (
        <>

            <Input
                label="Card number"
                name="credit" />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Input
                label="Expires (MM/YY)"
                name="expiration" />
                 <Input
                label="Security code (CVV)"
                name="security" />
                </div>

                 <Input
                label="Name on card"
                name="name" />

                 <Input
                label="Zip code"
                name="zip" />

        </>
    )
}

export default PaymentForm;