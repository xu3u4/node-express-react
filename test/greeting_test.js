require('./utils/dom-mock')('<html><body></body></html>');

import jsdom from 'mocha-jsdom';
import assert from 'assert';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import GreetingCom from '../app/js/greeting';

//test message from Greeting component
describe('Testing my div', () => {
    jsdom({skipWindowCheck: true}); // skips checking of window at startup. When false, mocha-jsdom will throw an error if window already exists. Defaults to false

    it('should contain text', () => {
        var myDiv = TestUtils.renderIntoDocument(
            <GreetingCom  name = "Jocelyn"/>
        );
        var divText = TestUtils.findRenderedDOMComponentWithTag(myDiv, 'div');

        assert.equal(divText.textContent, 'Hello, big big Jocelyn!');
    });
});

