let profileId: string;

describe('Пользователь заходит в профиль', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('Успешная загрузка профиля', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'testFirst');
    });
    it('Редактирует профиль', () => {
        const newName = 'new';
        const newLastName = 'lastname';
        cy.updateProfile(newName, newLastName);
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'new');
        cy.getByTestId('ProfileCard.lastname').should('have.value', 'lastname');
    });
});
