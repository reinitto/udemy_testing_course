export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD'
};
/**
 * Returns Redux Thunk function that dispatched GUESS_WORD action and conditionally CORRECT_GUESS action
 * @function guessWord
 * @param {string} guessedWord - guessed Word
 * @returns {function}  -Redux thunk function
 */
export const guessWord = guessedWord => {
  return function(dispatch, getState) {};
};
