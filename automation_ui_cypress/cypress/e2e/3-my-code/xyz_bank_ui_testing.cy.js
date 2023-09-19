describe('Bank Manager Login', () => {
    it('Success visiting the website', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager');
        cy.get('[class="mainHeading"]').should('contain', 'XYZ Bank');
    })

    it('Success Add Customer', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager');
        cy.get('[class="mainHeading"]').should('contain', 'XYZ Bank');
        cy.get('[ng-class="btnClass1"]').click();
        cy.get(':nth-child(1) > .form-control').type('Cristiano');
        cy.get(':nth-child(2) > .form-control').type('Ronaldo');
        cy.get(':nth-child(3) > .form-control').type('123456');
        cy.get('form.ng-dirty > .btn').click();
    })

    it('Success Open Account', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager');
        cy.get('[class="mainHeading"]').should('contain', 'XYZ Bank');
        cy.get('[ng-class="btnClass2"]').click();
        cy.get('#userSelect').select('Harry Potter');
        cy.get('#currency').select('Dollar');
        cy.get('form.ng-dirty > button').click()
    })

    it('Success Search Customer Account', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager');
        cy.get('[class="mainHeading"]').should('contain', 'XYZ Bank');
        cy.get('[ng-class="btnClass3"]').click();
        cy.get('.form-control').type('Harry');
    })

    it('Success Delete Customer Account', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager');
        cy.get('[class="mainHeading"]').should('contain', 'XYZ Bank');
        cy.get('[ng-class="btnClass3"]').click();
        cy.get('.form-control').type('Harry');
        cy.get(':nth-child(5) > button').click();

    })

})


describe('Customer Login Test', () => {
    it('Success visiting the website', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.get('[class="mainHeading"]').should('contain', 'XYZ Bank');
        cy.get('.borderM > :nth-child(1) > .btn').click()
    })

    it('Success login', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.get('[class="mainHeading"]').should('contain', 'XYZ Bank');
        cy.get('.borderM > :nth-child(1) > .btn').click()
        cy.get('#userSelect').select('Harry Potter');
        cy.get('form.ng-valid > .btn').click();
        cy.get('.fontBig').should('contain', 'Harry Potter');
    })

    it('Success Customer Deposit', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.get('[class="mainHeading"]').should('contain', 'XYZ Bank');
        cy.get('.borderM > :nth-child(1) > .btn').click()
        cy.get('#userSelect').select('Harry Potter');
        cy.get('form.ng-valid > .btn').click();
        cy.get('.fontBig').should('contain', 'Harry Potter');
        cy.get('[ng-class="btnClass2"]').click();
        cy.get('.form-control').type('100000');
        cy.get('form.ng-dirty > .btn').click();
        cy.get('.error').should('contain', 'Deposit Successful');
        cy.get('.borderM > :nth-child(3) > :nth-child(2)').should('contain', '100000')
    })

    it('Failed Customer Deposit with amount = 0', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.get('[class="mainHeading"]').should('contain', 'XYZ Bank');
        cy.get('.borderM > :nth-child(1) > .btn').click()
        cy.get('#userSelect').select('Harry Potter');
        cy.get('form.ng-valid > .btn').click();
        cy.get('.fontBig').should('contain', 'Harry Potter');
        cy.get('[ng-class="btnClass2"]').click();
        cy.get('.form-control').type('0');
        cy.get('form.ng-dirty > .btn').click();
        cy.get('.borderM > :nth-child(3) > :nth-child(2)').should('contain', '0')
    })

    it('Failed Customer Deposit with negative amount', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.get('[class="mainHeading"]').should('contain', 'XYZ Bank');
        cy.get('.borderM > :nth-child(1) > .btn').click()
        cy.get('#userSelect').select('Harry Potter');
        cy.get('form.ng-valid > .btn').click();
        cy.get('.fontBig').should('contain', 'Harry Potter');
        cy.get('[ng-class="btnClass2"]').click();
        cy.get('.form-control').type('-10000');
        cy.get('form.ng-dirty > .btn').click();
        cy.get('.borderM > :nth-child(3) > :nth-child(2)').should('contain', '0')
    })

    it('Success Customer Withdraw', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.get('[class="mainHeading"]').should('contain', 'XYZ Bank');
        cy.get('.borderM > :nth-child(1) > .btn').click()
        cy.get('#userSelect').select('Harry Potter');
        cy.get('form.ng-valid > .btn').click();
        cy.get('.fontBig').should('contain', 'Harry Potter');
        cy.get('[ng-class="btnClass2"]').click();
        cy.get('.form-control').type('100000');
        cy.get('form.ng-dirty > .btn').click();
        cy.get('.error').should('contain', 'Deposit Successful');
        cy.get('[ng-class="btnClass3"]').click();
        cy.wait(500);
        cy.get('.form-control').type('20000');
        cy.get('form.ng-dirty > .btn').click();
        cy.get('.error').should('contain', 'Transaction successful');
        cy.get('.borderM > :nth-child(3) > :nth-child(2)').should('contain', '80000')

    })

    it('Failed Customer withdraw amount more than the balance', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.get('[class="mainHeading"]').should('contain', 'XYZ Bank');
        cy.get('.borderM > :nth-child(1) > .btn').click()
        cy.get('#userSelect').select('Harry Potter');
        cy.get('form.ng-valid > .btn').click();
        cy.get('.fontBig').should('contain', 'Harry Potter');
        cy.get('[ng-class="btnClass2"]').click();
        cy.get('.form-control').type('100000');
        cy.get('form.ng-dirty > .btn').click();
        cy.get('.error').should('contain', 'Deposit Successful');
        cy.get('[ng-class="btnClass3"]').click();
        cy.wait(500);
        cy.get('.form-control').type('120000');
        cy.get('form.ng-dirty > .btn').click();
        cy.get('.error').should('contain', 'Transaction Failed. You can not withdraw amount more than the balance.');

    })

    it('Failed Customer withdraw negative amount', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.get('[class="mainHeading"]').should('contain', 'XYZ Bank');
        cy.get('.borderM > :nth-child(1) > .btn').click()
        cy.get('#userSelect').select('Harry Potter');
        cy.get('form.ng-valid > .btn').click();
        cy.get('.fontBig').should('contain', 'Harry Potter');
        cy.get('[ng-class="btnClass2"]').click();
        cy.get('.form-control').type('100000');
        cy.get('form.ng-dirty > .btn').click();
        cy.get('.error').should('contain', 'Deposit Successful');
        cy.get('[ng-class="btnClass3"]').click();
        cy.wait(500);
        cy.get('.form-control').type('-20000');
        cy.get('form.ng-dirty > .btn').click();
        cy.get('.borderM > :nth-child(3) > :nth-child(2)').should('contain', '0')
    })

    it('Success Reset Transaction', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.get('[class="mainHeading"]').should('contain', 'XYZ Bank');
        cy.get('.borderM > :nth-child(1) > .btn').click()
        cy.get('#userSelect').select('Harry Potter');
        cy.get('form.ng-valid > .btn').click();
        cy.get('.fontBig').should('contain', 'Harry Potter');
        cy.get('[ng-class="btnClass2"]').click();
        cy.get('.form-control').type('100000');
        cy.get('form.ng-dirty > .btn').click();
        cy.get('.error').should('contain', 'Deposit Successful');
        cy.get('[ng-class="btnClass3"]').click();
        cy.wait(500);
        cy.get('.form-control').type('20000');
        cy.get('form.ng-dirty > .btn').click();
        cy.get('.error').should('contain', 'Transaction successful');
        cy.get('.borderM > :nth-child(3) > :nth-child(2)').should('contain', '80000')
        cy.get('[ng-class="btnClass1"]').click();
        cy.get('[style="float:right;margin-top:-30px;"]').click();
        cy.get('.fixedTopBox > [style="float:left"]').click();
        cy.get('.borderM > :nth-child(3) > :nth-child(2)').should('contain', '0')
    })

    it('Success logout', () => {
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
        cy.get('[class="mainHeading"]').should('contain', 'XYZ Bank');
        cy.get('.borderM > :nth-child(1) > .btn').click()
        cy.get('#userSelect').select('Harry Potter');
        cy.get('form.ng-valid > .btn').click();
        cy.get('.fontBig').should('contain', 'Harry Potter');
        cy.get('.logout').click();
        cy.get('[class="mainHeading"]').should('contain', 'XYZ Bank');
    })

})