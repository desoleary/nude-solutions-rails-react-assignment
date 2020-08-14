import { mount } from 'enzyme';
import React from 'react';
import RenterContentsCalculatorContainer from '../RenterContentsCalculatorContainer';

describe('RenterContentsCalculatorContainer', () => {
  describe('with shallow rendering', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<RenterContentsCalculatorContainer />);
    });

    it('compares snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
