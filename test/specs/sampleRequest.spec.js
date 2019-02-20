'use strict';

const chai = require('chai');
const expect = chai.expect;
const request = require('request');


describe('Demo request tests', function() {
    it('Should found found something in html response of "Request" result', function () {
        browser.url('https://www.google.com');
        $('[name="q"]').waitForDisplayed();
        const body = browser.call(() => {
            return new Promise((resolve, reject) => {
                request('https://github.com/request/request', (error, response, body) => {
                    if (error) {
                        return reject(error)
                    }
                    resolve(body)
                })
            })
        });
        expect(body).to.have.string('request');
    });

    it('Should check the response StatusCode response of "Request" result', function () {
        browser.url('https://webdriver.io');
        $('.projectLogo').waitForDisplayed();
        const response = browser.call(() => {
            return new Promise((resolve, reject) => {
                request('https://github.com/request/request', (error, response) => {
                    if (error) {
                        return reject(error)
                    }
                    resolve(response.statusCode)
                })
            })
        });
        expect(response).to.equal(200);
    });

    //Async test:
    it('should have the correct title', async () => {
        await browser.url('/not-a-real-page');
        let title = await browser.getTitle();
        expect(title).to.equal('localhost');
    });
});