const createWordle = ({ wordleRepository }) => {
  const check = (word) => {
    const solution = wordleRepository.getTodayWord();
    const validWords = wordleRepository.getValidWords();

    const isInvalid = !validWords.includes(word);
    const isCorrect = !isInvalid && solution === word;
    const evaluation = evaluate({ word, solution });

    function evaluate({ word, solution }) {
      let usedLetters = [];
      return word.split('').map((letter, idx) => {
        if (letter === solution[idx]) {
          return 'correct';
        }
        if (solution.split('').includes(letter)) {
          if (!usedLetters.includes(letter)) {
            usedLetters.push(letter);
            return 'present';
          }
          if (
            !solution
              .split('')
              .splice(0, idx - 1)
              .includes(letter)
          ) {
            return 'present';
          }
        }

        return 'absent';
      });
    }

    return {
      isCorrect,
      isInvalid,
      evaluation
    };
  };

  return {
    check
  };
};

export default createWordle;
