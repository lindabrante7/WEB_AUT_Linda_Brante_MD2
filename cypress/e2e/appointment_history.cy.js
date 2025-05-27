    import loginPage from '../Pages/loginPage';
    import menuPage from '../Pages/menuPage'
    import historyPage from '../pages/historyPage';

    describe('Appointment history empty', () => {
    it('should show no appointments in history', () => {
        loginPage.visit();
        loginPage.clickMakeAppointment();
        loginPage.login('John Doe', 'ThisIsNotAPassword');

        menuPage.openMenu();
        menuPage.validateSidebarActive();
        menuPage.goToHistory();

        historyPage.validateNoAppointments();
    });
    });
