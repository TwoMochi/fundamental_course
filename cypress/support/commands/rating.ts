import { selectByTestId } from 'cypress/helpers/selectByTestId';
import { User } from '../../../src/entities/User';

export const setRate = (starsCount = 5, feedback = 'feedback') => {
    cy.getByTestId(`StarRating.${starsCount}`).click();
    cy.getByTestId('RatingCard.Input').type(feedback);
    cy.getByTestId('RatingCard.Send').click();
};

export const getByTestId = (testId: string) => cy.get(selectByTestId(testId));

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(starsCount: number, feedback: string): Chainable<User>
        }
    }
}
