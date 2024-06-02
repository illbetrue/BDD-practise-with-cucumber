const { Given } = require('@wdio/cucumber-framework');
const pageFactory = require('../po/pages/page.factory');

Given('I open {string} page', function(pageName) {
  const page = pageFactory(pageName);
  return page.open();
});
