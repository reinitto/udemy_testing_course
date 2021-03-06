import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from '../test/testUtils';
import App, { UnconnectedApp } from './App';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('Redux props', () => {
  test('Has access to "success" state', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(success);
  });
  test('Has access to "guessedWords" state', () => {
    const guessedWords = [{ guessedWord: 'train', lettermatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;
    expect(guessedWordsProp).toEqual(guessedWords);
  });
  test('Has access to "secretWord" state', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;
    expect(secretWordProp).toBe(secretWord);
  });
  test('Has access to "getSecretWord" function on the props', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

describe('action creators', () => {
  test('"getSecretWord" runs on App mount', () => {
    const getSecretWordMock = jest.fn();

    // set up app component with getSecretWordMock as the getSecretWord prop
    const wrapper = shallow(
      <UnconnectedApp
        getSecretWord={getSecretWordMock}
        success={false}
        guessedWords={[]}
      />
    );

    //run lifecycle method
    wrapper.instance().componentDidMount();

    // check if mock function ran
    const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

    expect(getSecretWordCallCount).toBe(1);
  });
});
