const HOME_PAGE_URL = 'http://localhost:3000/';
const protectedRoutes = ['starships', 'persons', 'planets'];

describe("Protected routes test suites", () => {
    it('Unauthorized user is redirected to login page after trying to visit one of the protected routes', () => {
        cy.wrap(protectedRoutes).each((path) => {
            cy.visit(HOME_PAGE_URL + path)
            cy.location().should((loc) => {
                expect(loc.pathname).to.eq('/login')
            })
        })
    });
    it('Authorized user gets access to the pages located on the protected routes', () => {
        cy.visit(HOME_PAGE_URL);
        cy.fixture('credentials.json').then((data) => {
            cy.login(data['username'], data['password']).should(() => {
                cy.checkIfTokensExists();
            });
                cy.wrap(protectedRoutes).each((path) => {
                    cy.visit(HOME_PAGE_URL + path);
                    cy.location({timeout: 1500}).should((loc) => {
                        expect(loc.pathname).to.eq('/' + path)
                    })
                })

        });
    })

})