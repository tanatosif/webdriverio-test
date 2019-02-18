var assert = require('assert');
const chai = require('chai');
const expect = chai.expect;

describe('Demo tests', function() {
    it('should have the right title - the fancy generator way', function () {
        browser.url('http://webdriver.io');
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO · Next-gen WebDriver test framework for Node.js');
    });

    it('Should found the Easter Egg on Google search results page', function () {
        browser.url('http://google.com');
        const searchInput = $('[name="q"]');
        searchInput.waitForDisplayed();
        searchInput.setValue('How to pass KE?');
        browser.keys("\uE007"); // Press Enter
        const resultsPage = $('#main');
        resultsPage.waitForDisplayed();
        expect($('#easter-egg').isExisting()).to.be.true;
    });
});