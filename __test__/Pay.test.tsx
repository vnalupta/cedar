import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "@/app/pay/page";

describe("Pay:", () => {

    afterEach(cleanup)

    it("should render the list headers", () => {

        render(<Home />);

        expect(screen.getByTestId('pay-header-1')).toBeDefined();
        expect(screen.getByTestId('pay-header-2')).toBeDefined();
    })

    describe("should validate properly", () => {

        afterEach(cleanup);

        it("should show error states", async () => {
            const user = userEvent.setup()

            render(<Home />);

            const input = screen.getByTestId('pay-input-credit')
            await userEvent.type(input, "123");

            expect(screen.getByTestId('pay-icon-error')).toBeDefined();
        })
        it("should show error states", async () => {
            const user = userEvent.setup()

            render(<Home />);

            const input = screen.getByTestId('pay-input-credit')
            await userEvent.type(input, "1234123412341234");

            expect(screen.getByTestId('pay-icon-success')).toBeDefined();
        })
        it("should show required messages", async () => {
            const user = userEvent.setup()

            render(<Home />);

            const submitCTA = screen.getByTestId('pay-continue-cta');
            expect(submitCTA).toBeDefined();

            // click pay
            await user.click(submitCTA)

            // expect role alert to be in the document
            expect(screen.getAllByRole('alert').length).toBe(5);
        })
        it("should proceed to the next step", async () => {
            const user = userEvent.setup()

            render(<Home />);

            const credit = screen.getByTestId('pay-input-credit')
            await userEvent.type(credit, "1234123412341234");

            const expiration = screen.getByTestId('pay-input-expiration')
            await userEvent.type(expiration, "1111");

            const security = screen.getByTestId('pay-input-security')
            await userEvent.type(security, "1234");

            const name = screen.getByTestId('pay-input-name')
            await userEvent.type(name, "test user");

            const zip = screen.getByTestId('pay-input-zip')
            await userEvent.type(zip, "12345");

            const submitCTA = screen.getByTestId('pay-continue-cta');
            user.click(submitCTA)

            // no errors
            expect(screen.queryAllByRole('alert').length).toBe(0);

            expect(screen.getByTestId('pay-total')).toBeDefined();
            expect(screen.getByTestId('pay-submit-cta')).toBeDefined();

        })
    })
})

