import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import AccountsHeader from './AccountsHeader';
import {mount, shallow} from 'enzyme';

describe('Account Header', () =>{
    it('Renders 2 Button', () => {

        const wrapper = shallow(<AccountsHeader/>);
        expect(wrapper.find('Button').length).toBe(2);
    });
});
