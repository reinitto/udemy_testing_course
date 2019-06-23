import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';
import { getSecretWord } from './actions';

const guessedWords = [
  {
    guessedWord: 'train',
    letterMatchCount: 3
  },
  {
    guessedWord: 'agile',
    letterMatchCount: 1
  },
  {
    guessedWord: 'party',
    letterMatchCount: 5
  }
];

class App extends Component {
  render() {
    const { success, guessedWords } = this.props;
    return (
      <div className='container'>
        <h1>Guess that word!</h1>
        <Congrats success={success} />
        <Input />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = ({
  success,
  guessedWords,
  getSecretWord,
  secretWord
}) => ({ success, guessedWords, getSecretWord, secretWord });

export default connect(
  mapStateToProps,
  { getSecretWord }
)(App);
