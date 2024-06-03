
const BasePage = require('./base.page');

class HomePage extends BasePage {
  
}

const pageFactory = (pageName) => {
  switch (pageName.toLowerCase()) {
    case 'homepage':
      return new HomePage();
   default:
      return new BasePage();
  }
};

module.exports = pageFactory;
