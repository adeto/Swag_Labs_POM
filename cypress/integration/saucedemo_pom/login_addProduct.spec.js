import loginPage from "../../pages/saucedemo/loginPage";
import inventoryPage from "../../pages/saucedemo/inventoryPage";

describe('Sauce Lab POM test', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    });

    it('Login successfully with valid credentials', () => {
        loginPage.enterUsername('standard_user');
        loginPage.enterPassword('secret_sauce');
        loginPage.clickLoginBtn();
        inventoryPage.elements.title().should('have.text', 'Products');
        inventoryPage.addProductToCart();
        inventoryPage.elements.cartCounter().should('have.text','1' );
    });
});