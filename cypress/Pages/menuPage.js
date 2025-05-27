    class MenuPage {
    openMenu() {
        cy.get('#menu-toggle').click();
    }

    validateSidebarActive() {
        cy.get('#sidebar-wrapper').should('have.class', 'active');
    }

    goToHistory() {
        cy.contains('History').click();
    }
    }

    export default new MenuPage();
