class HistoryPage {
    validateNoAppointments() {
    cy.contains('No appointment').should('be.visible');
    }
}

export default new HistoryPage();
