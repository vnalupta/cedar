"use client";

import styles from "./list.module.scss";

import { useState } from "react";

import ListHeader from "./list-header";
import Button from "./button";
import Link from "next/link";
import PaymentForm from "./paymentform";

import { useForm } from "./formcontext";

const List: React.FC = () => {
    const [step, setStep] = useState(1);
    const inputs = useForm();

    // @ts-ignore
    const formIsValid = inputs?.every((input) => input.valid);

    function handleOnContinueClick() {
        setStep(2);
    }

    function handleEditClick() {
        setStep(1);
    }

    return (
        <section className={styles.container}>
            <div className={styles.containerInner}>
                <ListHeader
                    active={step === 1}
                    bullet="1"
                    title="Payment Information"
                    showEdit={true}
                    onEditClick={handleEditClick}
                />

                {inputs.map((input, ct) => (
                    <p key={ct}>
                        name: {input.name} | valid:{" "}
                        {input.valid ? "valid" : "false"}
                    </p>
                ))}

                {step === 1 && <PaymentForm proceed={handleOnContinueClick} />}
            </div>

            <div className={styles.containerInner}>
                <ListHeader
                    active={step === 2}
                    bullet="2"
                    title="Review and Pay"
                />

                {step === 2 && (
                    <>
                        <p className="copy--medium">
                            You’re about to make a payment of{" "}
                            <span className="strong">$600.00</span>
                        </p>
                        <Link
                            href={{
                                pathname: "/",
                                query: {
                                    completed: true,
                                },
                            }}
                        >
                            <Button>Pay $600</Button>
                        </Link>
                    </>
                )}
            </div>
        </section>
    );
};

export default List;
