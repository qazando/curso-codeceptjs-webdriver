const { I } = inject();

module.exports = {

  fileds: {
    emailAddressResgisterField: '#email_create'
  },

  button: {
    createAccountButton: '#SubmitCreate'
  },

  messages: { 

  },

  submitCreateNewAccount(email) {
    I.fillField(this.fileds.emailAddressResgisterField, email)
    I.click(this.button.createAccountButton)
  }

}
