const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  name: 'autoamcao-codeceptjs-web',
  tests: './steps/login_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://automationpractice.com/index.php',
      browser: process.env.BROWSER || 'chrome',
      waitForTimeout: 5000,
      desiredCapabilities: {
        chromeOptions: {
          args: ["--window-size=1920,1200",
                // "--headless" 
                ]
        }
      }
    }
  },
  include: {
    I: './steps_file.js',
    home_page: './pages/home_page.js',
    login_page: './pages/login_page.js',
    create_user_page: './pages/create_user_page.js',
    my_account_page: './pages/my_account_page.js',
  },
  bootstrap: './server/server.js',
  teardown: './server/server.js',
  mocha: {},
  plugins: {
    allure: {
      enabled: true
    },
    mocha: {
      reporterOptions: {

      }
    },
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
      fullPageScreenshots: true,
      screenshotsForAllureReport: true
    },
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: false
    },
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    },
    autoLogin: {
      enabled: true,
      saveToFile: true,
      inject: 'login',
      users: {
        user: {
          // loginAdmin function is defined in `steps_file.js`
          login: (I) => {
            I.amOnPage('/');
            I.click('.login')
            I.waitForElement('#email', 10)
            I.fillField('#email', 'joao@teste.com')
            I.waitForElement('#passwd', 10)
            I.fillField('#passwd', secret('123456'))
            I.click('#SubmitLogin')
          },
          // if we see `Admin` on page, we assume we are logged in
          check: (I) => {
             I.amOnPage('/');
             I.see('Joao Silva');
          }
        },
         user: {
          // loginAdmin function is defined in `steps_file.js`
          login: (I) => {
            I.amOnPage('/');
            I.click('.login')
            I.waitForElement('#email', 10)
            I.fillField('#email', 'joao@teste.com')
            I.waitForElement('#passwd', 10)
            I.fillField('#passwd', secret('123456'))
            I.click('#SubmitLogin')
          },
          // if we see `Admin` on page, we assume we are logged in
          check: (I) => {
             I.amOnPage('/');
             I.see('Joao Silva');
          }
        }
      }
    }
  }
}