import { selectByTestId } from 'cypress/helpers/selectByTestId';

describe('Test Body', () => {
    describe('Пользователь НЕ автроизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Переход на страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Переход на несуществующий маршрут', () => {
            cy.visit('/kjlkjlt');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });

    describe('Пользователь  автроизован', () => {
        beforeEach(() => {
            cy.login();
        });
        it('Переход на страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('Переход на список статей', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
