    class AppointmentPage {
    selectFacility(name) {
        cy.get('#combo_facility').select(name);
    }

    checkReadmission() {
        cy.get('#chk_hospotal_readmission').check();
    }

    selectHealthcareProgram(value) {
        cy.get(`input[type="radio"][value="${value}"]`).check();
    }

    selectDate(date) {
        cy.get('#txt_visit_date').click();
        cy.get('.day').contains(date).click();
    }

    setComment(text) {
        cy.get('#txt_comment').type(text);
    }

    bookAppointment() {
        cy.get('#btn-book-appointment').click();
    }

    validateSummary(data) {
        cy.get('#facility').should('have.text', data.facility);
        cy.get('#hospital_readmission').should('have.text', data.readmission);
        cy.get('#program').should('have.text', data.program);
        cy.get('#visit_date').should('have.text', '30/04/2025');
        cy.get('#comment').should('have.text', data.comment);
    }
    }

    export default new AppointmentPage();
