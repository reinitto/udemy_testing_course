/**
 * Function that returns matching letters
 * @function getLetterMatchCount
 * @param {string} guessedWord
 * @param {string} secretWord +
 * @returns {number}  -number of correct guessed letters
 */
export function getLetterMatchCount(guessedWord, secretWord) {
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessedWord.split(''));
  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter))
    .length;
}
