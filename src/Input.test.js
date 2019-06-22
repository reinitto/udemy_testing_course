import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import Input from './Input';

/**
 * Factory function to create a ShallowWrapper for the Input component
 * @function setup
 * @param {object} initialState - Initial state setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
};

describe('render', () => {
  describe('word has not been guessed correctly', () => {
    test('redners component without error', () => {});
    test('renders input box', () => {});
    test('renders submit box', () => {});
  });
  describe('word has been guessed correctly', () => {
    test('redners component without error', () => {});
    test('does not render input box', () => {});
    test('does not render submit box', () => {});
  });
});

describe('update state', () => {});
