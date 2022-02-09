import fetch from 'node-fetch';

describe('World feature', () => {
  it('should check and answer', async () => {
    const response = await fetch('http://localhost:3000/api/wordle/check', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ answer: 'aword' })
    });
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toMatchObject({
      isCorrect: true,
      isInvalid: false,
      evaluation: ['correct', 'correct', 'correct', 'correct', 'correct']
    });
  });

  it('data returned includes the user answer', async () => {
    const response = await fetch('http://localhost:3000/api/wordle/check', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: '{}'
    });

    expect(response.status).toBe(400);
  });
});
