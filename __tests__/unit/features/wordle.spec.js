import '@testing-library/jest-dom';

import createWordle from '../../../src/features/wordle';

const createWordleRepositoryWith = ({ solution = 'aword', validWords = ['aword'] }) => {
  return {
    getTodayWord: () => solution,
    getValidWords: () => validWords
  };
};

describe('Wordle feature', () => {
  it('can check a word', () => {
    const wordleRepository = createWordleRepositoryWith({ solution: 'aword' });
    const word = 'aword';
    const wordle = createWordle({ wordleRepository });

    const result = wordle.check(word);

    expect(result).toMatchObject({
      isCorrect: true,
      isInvalid: false,
      evaluation: ['correct', 'correct', 'correct', 'correct', 'correct']
    });
  });

  describe('valid/invalid', () => {
    it('can check not valid words', () => {
      const wordleRepository = createWordleRepositoryWith({
        solution: 'aword',
        validWords: ['aword']
      });
      const correctButInvalidWord = 'awora';
      const wordle = createWordle({ wordleRepository });

      const result = wordle.check(correctButInvalidWord);

      expect(result).toEqual(
        expect.objectContaining({
          isInvalid: true
        })
      );
    });
  });

  describe('correct/not correct', () => {
    it('can check not correct words', () => {
      const wordleRepository = createWordleRepositoryWith({ solution: 'aword' });
      const incorrectWorld = 'awora';
      const wordle = createWordle({ wordleRepository });

      const result = wordle.check(incorrectWorld);

      expect(result).toEqual(
        expect.objectContaining({
          isCorrect: false
        })
      );
    });

    it('a word is not correct if is not valid', () => {
      const wordleRepository = createWordleRepositoryWith({
        solution: 'aword',
        validWords: []
      });
      const correctButInvalidWord = 'aword';
      const wordle = createWordle({ wordleRepository });

      const result = wordle.check(correctButInvalidWord);

      expect(result).toEqual(
        expect.objectContaining({
          isCorrect: false,
          isInvalid: true
        })
      );
    });

    it('a word could be valid but not correct', () => {
      const wordleRepository = createWordleRepositoryWith({
        solution: 'awora',
        validWords: ['aword']
      });
      const validButNotCorrectWord = 'aword';
      const wordle = createWordle({ wordleRepository });

      const result = wordle.check(validButNotCorrectWord);
      expect(result).toEqual(
        expect.objectContaining({
          isCorrect: false,
          isInvalid: false
        })
      );
    });
  });

  describe('word evaluation', () => {
    it('check all letters in the word', () => {
      const wordleRepository = createWordleRepositoryWith({
        solution: 'aeiou',
        validWords: ['aeiou', 'aippp']
      });
      const word = 'aoprd';
      const wordle = createWordle({ wordleRepository });

      const result = wordle.check(word);
      expect(result).toEqual(
        expect.objectContaining({
          evaluation: ['correct', 'present', 'absent', 'absent', 'absent']
        })
      );
    });

    it('only set as present the first occurrence', () => {
      const wordleRepository = createWordleRepositoryWith({
        solution: 'thorn',
        validWords: ['thorn', 'hight']
      });
      const word = 'hight';
      const wordle = createWordle({ wordleRepository });

      const result = wordle.check(word);

      expect(result).toEqual(
        expect.objectContaining({
          evaluation: ['present', 'absent', 'absent', 'absent', 'present']
        })
      );
    });
  });
});
