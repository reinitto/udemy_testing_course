import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';
import { getSecretWord } from './actions';

export class UnconnectedApp extends Component {
  componentDidMount() {
    //get the secret word
    this.props.getSecretWord();
  }

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

const mapStateToProps = ({ success, guessedWords, secretWord }) => ({
  success,
  guessedWords,
  secretWord
});

export default connect(
  mapStateToProps,
  { getSecretWord }
)(UnconnectedApp);
