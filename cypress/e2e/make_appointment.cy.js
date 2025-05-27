import loginPage from "../Pages/loginPage";
import appointmentPage from "../Pages/appointmentPage";
    describe('Scenario 1 - Make an Appointment', () => {
    it('should make an appointment successfully', () => {
        loginPage.visit();
        loginPage.clickMakeAppointment();
        loginPage.login('John Doe', 'ThisIsNotAPassword');

        appointmentPage.selectFacility('Seoul CURA Healthcare Center');
        appointmentPage.checkReadmission();
        appointmentPage.selectHealthcareProgram('Medicaid');
        appointmentPage.selectDate('30');
        appointmentPage.setComment('CURA Healthcare Service');
        appointmentPage.bookAppointment();

        appointmentPage.validateSummary({
        facility: 'Seoul CURA Healthcare Center',
        readmission: 'Yes',
        program: 'Medicaid',
        date: '30/05/2025',  // update to correct format if needed
        comment: 'CURA Healthcare Service'
        });
    });
    });
