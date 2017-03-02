import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import AccountsGrid from './AccountsGrid';
import {mount, shallow} from 'enzyme';

describe('Account Grid', () =>{

    const props = {
        "accounts": [
            { "name": "Brokerage Account 3", "marketValue": 1999990, "cash": 1995826, "color":"#9400D3"},
            { "name": "Account 3", "marketValue": 1949990, "cash": 1695856, "color":"#4B0082"},
            { "name": "Brokerage Account 1", "marketValue": 1349990, "cash": 1595866, "color":"#0000FF"},
            { "name": "Brokerage Account 4", "marketValue": 155990, "cash": 160826, "color":"#00FF00"},
            { "name": "Brokerage Account 2", "marketValue": 745600, "cash": 199560, "color":"#FFFF00"},
            { "name": "Account 4", "marketValue": 550060, "cash": 530060, "color":"#FF7F00"},
            { "name": "Account 13", "marketValue": 373400, "cash": 0, "color":"#FF0000"},
            { "name": "Joint Account 1", "marketValue": 283080, "cash": 416700, "color":"#FFA500"},
            { "name": "Joint Account 2", "marketValue": 1000000, "cash": 1000000, "color":"#00FFA5"}
        ],
        actions: {addAccount: ()=>{return Promise.resolve();}}
    }

    it('should have correct market value and cash sum', () => {

        const wrapper = mount(<AccountsGrid accounts={props.accounts}/>);

        expect(wrapper.find(".rt-tfoot").find(".rt-tr").childAt(1).text()).toBe('Total: $8,408,100.00');
        expect(wrapper.find(".rt-tfoot").find(".rt-tr").childAt(2).text()).toBe('Total: $7,594,694.00');

    });
});
