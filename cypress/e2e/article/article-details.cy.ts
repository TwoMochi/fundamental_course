let currentArticleId = '';

describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${currentArticleId}`);
        });
    });
    afterEach(() => {
        cy.deliteArticle(currentArticleId);
    });
    // it('И видит содержимое статьи', () => {
    //     cy.getByTestId('ArticleList').should('exist');
    // });
    // it('И видит рекоммендации', () => {
    //     cy.getByTestId('ArticleRecommendationsList').should('exist');
    // });
    // it('И отправляет комментарий', () => {
    //     cy.getByTestId('ArticleList');
    //     cy.getByTestId('AddCommentForm').scrollIntoView(); // скролл до элемента
    //     cy.addComment('text');
    //     cy.getByTestId('CommentCard.Content').should('have.length', 1);
    // });
    it('И ставит оценку', () => {
        cy.getByTestId('ArticleList');
        cy.getByTestId('RatingCard').scrollIntoView(); // скролл до элемента
        cy.setRate(5, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 5);
    });
});
