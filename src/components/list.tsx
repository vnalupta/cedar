"use client";

import styles from "./list.module.scss";

import { useState } from "react";
import { useForm } from "@/components/formcontext";

import Link from "next/link";
import ListHeader from "@/components/list-header";
import Button from "@/components/button";
import Form from "@/components/form";
import Icon from "@/components/icon";

const List: React.FC = () => {
    const [step, setStep] = useState(1);
    const [hideStep, setHideStep] = useState(false);
    const inputs = useForm();

    // @ts-ignore
    const formIsValid = inputs?.every((input) => input.valid);

    function handleOnContinueClick() {
        setStep(2);
        setTimeout(() => {
            setHideStep(true);
        }, 100);
    }

    function handleEditClick() {
        setHideStep(false);

        setTimeout(() => {
            setStep(1);
        }, 100);
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
                    testid="pay-header-1"
                />

                <div
                    className={`${styles.listItem} ${step === 1 ? `${styles.visible}` : `${styles.hidden}`}`}
                    style={{
                        display: hideStep ? "none" : "block",
                    }}
                >
                    <Form proceed={handleOnContinueClick} />
                </div>
            </div>

            <div className={styles.containerInner}>
                <ListHeader
                    active={step === 2}
                    bullet="2"
                    title="Review and Pay"
                    testid="pay-header-2"
                />

                {/* {step === 2 && ( */}
                <div
                    className={`${styles.listItem} ${step === 2 ? `${styles.visible}` : `${styles.hidden}`}`}
                >
                    <p className="copy--medium">
                        You’re about to make a payment of{" "}
                        <span className="strong" data-testid="pay-total">$600.00</span>
                    </p>
                    <p className={`${styles.paymentLabel} label`}>
                        Payment method
                    </p>
                    <p className={styles.paymentDetails}>
                        <span>
                            <Icon name="credit" />
                        </span>{" "}
                        Card ending in ••••4242
                    </p>
                    <Link
                        href={{
                            pathname: "/",
                            query: {
                                completed: true,
                            },
                        }}
                    >
                        <Button buttonType="button" testid="pay-submit-cta">Pay $600</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default List;
