class loginPage{

    elements = {
        inputUsername: () => cy.get('#user-name'),
        inputPassword: () => cy.get('#password'),
        loginBtn: () => cy.get("#login-button"),
        errorMessage: () => cy.get('h3[data-test="error"]')
    }

    enterUsername(username){
        this.elements.inputUsername().type(username);
    }

    enterPassword(password){
        this.elements.inputPassword().type(password);
    }
    clickLoginBtn(){
        this.elements.loginBtn().click();
    }
}

module.exports = new loginPage();