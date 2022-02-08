import fetch from 'node-fetch';

describe('World feature', () => {
  it('should check and answer', async () => {
    const body = {
      answer: 'aword'
    };
    const response = await fetch('http://localhost:3000/api/wordle/check', {
      method: 'post',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();

    expect(data).toMatchObject({
      answer: 'aword',
      isCorrect: true,
      isInvalid: false,
      evaluation: ['correct', 'correct', 'correct', 'correct', 'correct']
    });
  });

  it('data returned includes the user answer', async () => {
    const body = {
      answer: 'oword'
    };
    const response = await fetch('http://localhost:3000/api/wordle/check', {
      method: 'post',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();

    expect(data).toEqual(
      expect.objectContaining({
        answer: 'oword'
      })
    );
  });
});
