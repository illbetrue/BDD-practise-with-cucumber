
class BasePage {
  open(path = '') {
    browser.url(`https://www.epam.com/${path}`);
  }
}

module.exports = BasePage;
