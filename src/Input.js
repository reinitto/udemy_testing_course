import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from './actions';

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);
    this.inputBox = React.createRef();
  }
  onSubmit = e => {
    e.preventDefault();
    const word = this.inputBox.current.value;
    if (word && word.length > 0) {
      this.props.guessWord(word);
    }

    this.inputBox.current.value = '';
  };
  render() {
    const contents = this.props.success ? null : (
      <form className='form-inline'>
        <input
          ref={this.inputBox}
          type='text'
          data-test='input-box'
          className='mb-2 mx-sm-3'
          placeholder='enter guess'
          id='word-guess'
        />
        <button
          type='submit'
          data-test='submit-button'
          className='btn btn-primary mb-2'
          onClick={this.onSubmit}
        >
          Submit
        </button>
      </form>
    );

    return <div data-test='component-input'>{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => ({ success });

export default connect(
  mapStateToProps,
  { guessWord }
)(UnconnectedInput);
