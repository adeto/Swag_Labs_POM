class inventoryPage{
    elements = {
        title: () => cy.get('.title'),
        findProduct: () => cy.get('#add-to-cart-sauce-labs-fleece-jacket'),
        cartCounter: () => cy.get('.shopping_cart_badge')
    }

    addProductToCart(){
        this.elements.findProduct().click();
    }

    verifyProductIsAdded(){
        this.elements.cartCounter();
    }
}

module.exports = new inventoryPage();