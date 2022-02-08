export async function post({ request }) {
  const { answer } = await request.json();

  return {
    body: {
      answer,
      isCorrect: true,
      isInvalid: false,
      evaluation: ['correct', 'correct', 'correct', 'correct', 'correct']
    }
  };
}
