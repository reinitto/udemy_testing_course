import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';
import rootReducer from '../src/reducers';
/**
 * Return node(s) with the given data-test attr
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value if data-test attribure for search
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  //returns an error you would get if called the component with those props in conformingProps
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};
/**
 * Create a testing store with imported reducers, middleware and initial state
 *  @globals rootReducer
 * @function storeFactory
 * @param {object} initialState - initial store state
 * @returns {Store}  -redux store
 */
export const storeFactory = initialState => {
  return createStore(rootReducer, initialState);
};
