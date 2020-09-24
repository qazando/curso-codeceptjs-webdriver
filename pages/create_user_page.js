const { I } = inject();
var validacao = require('assert')

module.exports = {

  fileds: {
    firstName: '#customer_firstname',
    lastName: '#customer_lastname',
    password: '#passwd',
    address: '#address1',
    days: '#days',
    months: '#months',
    years: '#years',
    city: '#city',
    state: '#id_state',
    postCode: '#postcode',
    phone: '#phone_mobile'
  },

  button: {
    male: '#id_gender1',
    register: 'Register'
  },

  messages: { 

  },

  labels: {
    createAnAccount: '.page-heading'
  },

  fillFieldsCreateUser(name, lastName) {
    I.waitForElement(this.fileds.firstName, 10)
    I.see('CREATE AN ACCOUNT')
    I.click(this.button.male)
    I.fillField(this.fileds.firstName, name)
    I.fillField(this.fileds.lastName, lastName)
    I.fillField(this.fileds.password, secret('12345'))
    I.scrollTo(this.fileds.address)
    I.selectOption(this.fileds.days, '1')
    I.selectOption(this.fileds.months, '5')
    I.selectOption(this.fileds.years, '1992')
    I.fillField(this.fileds.address, 'Rua do Eduardo, 555')
    I.fillField(this.fileds.city, 'Florianópolis')
    I.selectOption(this.fileds.state, 'Alabama')
    I.scrollPageToBottom()
    I.fillField(this.fileds.postCode, '00000')
    I.fillField(this.fileds.phone, '+55 048 999999999') 
  },

  createUser() {
    I.click(this.button.register)
  }

}
