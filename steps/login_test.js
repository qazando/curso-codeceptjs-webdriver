const { I } = inject()
const cpfName = require('../utils/cpf_name')

Feature('Login');

BeforeSuite(() => {
    console.log(cpfName.cpfName())

    console.log(cpfName.soma(3, 5))
})

Before(() => {
    I.amOnPage('/')
})

After(() => {
    console.log('After')
})

AfterSuite(() => {
    console.log('Depois de tudo')
})

Scenario('Validade Empty E-mail On Create Account', (I) => {
    I.click('.login')
    I.click('#SubmitCreate')
    I.see('Invalid email address.')
});


Scenario('Validade Empty E-mail On Create Account 2', (I) => {
    I.click('.login')
});

Scenario('Validade Empty E-mail On Create Account 3', (I) => {
    I.click('.login')
});

