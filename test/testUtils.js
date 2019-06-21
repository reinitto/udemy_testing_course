/**
 * Return node(s) with the given data-test attr
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - Value if data-test attribure for search
 * @returns {ShallowWrapper}
 */

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
