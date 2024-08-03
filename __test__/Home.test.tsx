import Home from "@/app/page";
import Jumbotron from "@/components/jumbotron";

import { cleanup, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

describe("Home: ", () => {
    afterEach(cleanup)

    it ('should contain the jumbotron', () => {
        render(<Home />)

        expect(screen.getByTestId('home-greeting')).toBeDefined();
        expect(screen.getByTestId('home-summary')).toBeDefined();
    })

    it ('should contain the sheet', () => {
        render(<Home />)

        expect(screen.getByTestId('home-total')).toBeDefined();
        // expect(screen.getByTestId('home-cta')).toBeDefined();
    })

    it ('should display the thank you message', () => {
        render(<Jumbotron completed={true} />);

        expect(screen.getByTestId('home-thankyou')).toBeDefined();
    })
})