import { actionTypes } from '../actions';
import successReducer from './successReducer';

test('returns default iniyial state of "false" when no action is passed', () => {
  const newState = successReducer();
  expect(newState).toBe(false);
});

test('returns state of true on receiving an action of type "CORRECT_GUESS"', () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS
  });
  expect(newState).toBe(true);
});
