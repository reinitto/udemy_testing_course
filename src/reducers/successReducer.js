import { actionTypes } from '../actions';
/**
 * @function successReducer
 * @param {boolean} state - Array of guessed words
 * @param {object} action - action to be reduced
 * @returns {boolean} - new success state
 */

export default (state = false, action = { type: '' }) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};
