import React from 'react';
import { shallow } from 'enzyme';
import Speakers from './speakers';

describe('Speakers', () => {
    it('should contain groups', () => {
        const wrapper = shallow(<Speakers/>);
        const headers = wrapper.find('.speaker-item');
        expect(headers.length).toBe(17);
    });

    // TODO: Waarom werkt dit niet?
    it('should contain ListHeaders', () => {
        const wrapper = shallow(<Speakers/>);
        const headers = wrapper.find('ListHeader');
        expect(headers.length).toBe(17);
    });

    it('should contain Speaker', () => {
        const wrapper = shallow(<Speakers/>);
        const speakers = wrapper.find('Speaker');
        console.log('speakers', speakers);
        expect(speakers.length).toBe(31);
    });
});