import React from 'react';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import TestUtils from 'react-addons-test-utils';
import MainTable from '../../app/js/comp_table'; //'export default' component can't use import { component } from ...
import GenerateHeader from '../../app/js/header';
import GenerateTbody from '../../app/js/tbody';

expect.extend(expectJSX);

describe('Test <MainTable> rendering', () => {
    // define Shallow rendering and declare required props.
    // ps. this. is not compatible with ES6 arrow function...
    beforeEach(function() {
        this.colls = [
            { key: 'seq', label: 'seq' },
            { key: 'Status', label: 'Status' },
            { key: 'Category', label: 'Category' },
            { key: 'Title', label: 'Title' },
            { key: 'Owner', label: 'Owner' },
            { key: 'Priority', label: 'Priority' }
        ];
        this.infos = [
            { seq: '1', Status: 'Open', Category: 'cat1', Title: 'title1', Owner: 'Allen', Priority: '1' },
            { seq: '2', Status: 'Open', Category: 'cat2', Title: 'title2', Owner: 'Jocelyn', Priority: '2' }
        ];
        this.renderer = TestUtils.createRenderer();
        this.renderer.render(<MainTable columns = {this.colls} rows = {this.infos} />);
    });

    // check the children structure
    it('Rendering <MainTable>\'s child components', function() {
        const result = this.renderer.getRenderOutput();

        expect(result).toEqualJSX(
            <table>
                <GenerateHeader columns = {this.colls} />
                <GenerateTbody columns = {this.colls} rows = {this.infos} />
            </table>
        );
    });
});
