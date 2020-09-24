const { I } = inject();

module.exports = {

  fileds: {

  },

  button: {
    loginButton: '.login'
  },

  messages: { 

  },

  accessLoginPage() {
    I.click(this.button.loginButton)
  }
  
}
