import { correctGuess, actionTypes } from './';

describe('correcetGuess', () => {
  test('returns an action with type "CORRECT_GUESS"', () => {
    const action = correctGuess();
    //toEqual is a deep equal
    expect(action).toEqual({
      type: actionTypes.CORRECT_GUESS
    });
  });
});
