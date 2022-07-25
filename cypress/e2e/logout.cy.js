const ACCESS_TOKEN = 'ACCESS_TOKEN';
const REFRESH_TOKEN = 'REFRESH_TOKEN';
const HOME_PAGE_URL = 'http://localhost:3000/';

describe("Logout test suites", () => {
it('User is redirected to main page after loging out', () => {
    cy.visit(HOME_PAGE_URL)
    cy.fixture('credentials.json').then((data) => {
        cy.login(data['username'], data['password']);
    });
    cy.logout();
    cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/')
    })
    })
  it('Access and refresh tokens are removed from window.localStorage after loging out', () => {
    cy.visit(HOME_PAGE_URL)
    cy.fixture('credentials.json').then((data) => {
        cy.login(data['username'], data['password']);
    })
    cy.logout();
    expect(localStorage.getItem(ACCESS_TOKEN)).to.be.an('null');
    expect(localStorage.getItem(REFRESH_TOKEN)).to.be.an('null');
    });
  });