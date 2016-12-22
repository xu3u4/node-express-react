var jsdom = require('mocha-jsdom');
var assert = require('assert');
//var React = require('react');
var TestUtils = require('react-addons-test-utils');

require('../app/js/app')('<html><body></body></html>');


describe('Testing my div', () => {
  jsdom({skipWindowCheck: true});

    it('should contain text', () => {
        var GreetingCom = require('../app/js/greeting.jsx');
        var myDiv = TestUtils.renderIntoDocument(
        <GreetingCom />
        );
        var divText = TestUtils.findRenderedDOMComponentWithTag(myDiv, 'div');

        assert.equal(divText.textContent, 'Hello, big big Jocelyn!');
    });
});

