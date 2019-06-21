/**
 * @function successReducer
 * @param {array} state - Array of guessed words
 * @param {object} action - action to be reduced
 * @returns {boolean} - new success state
 */

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
