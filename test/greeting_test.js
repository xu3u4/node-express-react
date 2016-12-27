require('./utils/dom-mock')('<html><body></body></html>');

import jsdom from 'mocha-jsdom';
import assert from 'assert';
import React from 'react';
import expect from 'expect.js';
import TestUtils from 'react-addons-test-utils';
import GreetingCom from '../app/js/greeting';

//test message from Greeting component
describe('Testing my div', () => {
    jsdom({skipWindowCheck: true}); // skips checking of window at startup. When false, mocha-jsdom will throw an error if window already exists. Defaults to false
    var component = TestUtils.renderIntoDocument(
        <GreetingCom  name = "Jocelyn"/>
    );

    it('render a div', () => {
        var div = TestUtils.findRenderedDOMComponentWithTag(component, 'div');
        // assert.equal(div.textContent, 'Hello, big big Jocelyn!');//using assert
        expect(div.textContent).to.equal('Hello, big big Jocelyn!');
    });

    it('render with className = greeting', () => {
        var classname = TestUtils.findRenderedDOMComponentWithClass(component, 'greeting');
        expect(classname.className).to.equal('greeting');
    });
});

