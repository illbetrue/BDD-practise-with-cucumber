const {Then} = require('@wdio/cucumber-framework');
const compareText = require('../step-definitions/utils/compare.text');

Then('Page title should {string} {string}', async function(shouldBeParam, titleText){
  const pageTitle = await browser.getTitle();
  return compareText(pageTitle,titleText,shouldBeParam);
})