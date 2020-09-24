var faker = require('faker');

const {I, home_page, login_page, create_user_page, my_account_page} = inject()

Feature('Create User');

Scenario('Login with success', async (login) => {
    await login('user')
})

Scenario('Create a New User', () => {

    var name = faker.name.firstName(); 
    var lastName = faker.name.lastName(); 
    
    I.amOnPage('/error')

    // home
    home_page.accessLoginPage()

    // login
    login_page.submitCreateNewAccount(faker.internet.email())

    // create user
    create_user_page.fillFieldsCreateUser(name, lastName)
    create_user_page.createUser()
    
    // my_account
    my_account_page.validateUserLogged(name, lastName)
});
