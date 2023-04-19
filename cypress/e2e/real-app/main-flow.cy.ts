import { REAL_APP_ROUTES } from '../../support/constants';

describe('Article', () => {
    const article = {
        title: 'This is unique title' + new Date(),
        description: 'This is a description',
        body: 'This is a body of the article',
    };
    beforeEach('login to application', () => {
        cy.intercept('GET', REAL_APP_ROUTES.tags, {
            fixture: 'tags.json',
        });
        cy.headlessLogin();
    });

    afterEach(() => {
        // cy.logout();
    });

    it('verify correct request and response', () => {
        cy.intercept('POST', `${REAL_APP_ROUTES.articles}/`).as('postArticles');

        cy.contains('New Article').click();
        cy.matchImageSnapshot();
        cy.getElementByControl('title').type(article.title);
        cy.getElementByControl('description').type(article.description);
        cy.getElementByControl('body').type(article.body);
        cy.contains('Publish Article').click();

        cy.wait('@postArticles').then((xhr: any) => {
            expect(xhr.response.statusCode).to.equal(200);
            expect(xhr.request.body.article.body).to.equal(article.body);
            expect(xhr.response.body.article.description).to.equal(article.description);
        });
    });

    it('verify popular tags are displayed', () => {
        cy.get('.tag-list').should('contain', 'cypress').and('contain', 'automation').and('contain', 'testing');
    });

    it('verify global feed likes count', () => {
        cy.intercept('GET', REAL_APP_ROUTES.feed, {
            articles: [],
            articlesCount: 0,
        });
        cy.intercept('GET', `${REAL_APP_ROUTES.articles}*`, {
            fixture: 'articles.json',
        });

        cy.contains('Global Feed').click();
        cy.get('app-article-list button').then((heartList) => {
            cy.matchImageSnapshot();
            expect(heartList[0]).to.contain('1');
            expect(heartList[1]).to.contain('5');
        });

        cy.fixture('articles').then((file) => {
            const articleLink = file.articles[1].slug;
            file.articles[1].favoritesCount = 6;
            cy.intercept('POST', `${REAL_APP_ROUTES.articles}/${articleLink}/favorite`, file);
        });

        cy.get('app-article-list button').eq(1).click().should('contain', '6');
    });

    it('delete a new article in a global feed', () => {
        const bodyRequest = {
            article: {
                tagList: [],
                ...article,
            },
        };

        cy.get('@token').then((token) => {
            cy.contains('Global Feed').click();
            cy.get('.preview-link').contains(article.title).click();
            cy.contains('Delete Article').click();

            cy.request({
                url: `${REAL_APP_ROUTES.articles}?limit=10&offset=0`,
                headers: { Authorization: 'Token ' + token },
                method: 'GET',
            })
                .its('body')
                .then((body) => {
                    expect(body.articles[0].title).not.to.equal(article.title);
                });
        });
    });
});
