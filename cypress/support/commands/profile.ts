export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => (cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { authorization: 'kjlk' },
    body: {
        id: '4',
        first: 'testFirst',
        lastname: 'testLastName',
        age: 5,
        currency: 'USD',
        country: 'Belarus',
        city: 'Moscow',
        username: 'testUsername',
        // eslint-disable-next-line max-len
        avatar: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F3296133.png&f=1&nofb=1&ipt=1e9d701391901fe0c337b0022a75a1e5a011083e9174616a3971f8ace5d2267e',
    },
}));

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>
            resetProfile(profileId: string): Chainable<void>
        }
    }
}
