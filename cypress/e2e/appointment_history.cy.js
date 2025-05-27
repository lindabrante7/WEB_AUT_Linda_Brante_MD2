    import loginPage from '../../pages/cura/loginPage';
    import menuPage from '../../pages/cura/menuPage';
    import historyPage from '../../pages/cura/historyPage';

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
