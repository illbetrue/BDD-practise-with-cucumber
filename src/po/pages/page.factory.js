
const BasePage = require('./base.page');

class HomePage extends BasePage {
  
}

class AboutPage extends BasePage {
  
}

const pageFactory = (pageName) => {
  switch (pageName.toLowerCase()) {
    case 'homepage':
      return new HomePage();
    case 'about':
      return new AboutPage();
    default:
      return new BasePage();
  }
};

module.exports = pageFactory;
