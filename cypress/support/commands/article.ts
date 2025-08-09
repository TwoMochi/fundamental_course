import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'Научная статья - Биология',
    subtitle: 'БиологиЯ',
    img: 'https://cs13.pikabu.ru/post_img/big/2020/07/09/9/1594303704117534516.jpg',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: [
        'SCIENCE',
    ],
    blocks: [],
};

export const createArticle = (article?: Article) => (
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles',
        headers: { authorization: 'kjlk' },
        body: article ?? defaultArticle,
    }).then((resp) => resp.body)
);

export const deliteArticle = (articleId: string) => (
    cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { authorization: 'kjlk' },
    })
);

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>
            deliteArticle(articleId: string): Chainable<void>
        }
    }
}
