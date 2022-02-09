export async function post({ request }) {
  const { answer } = await request.json();
  if (answer === undefined) {
    return {
      status: 400
    };
  }

  return {
    body: {
      isCorrect: true,
      isInvalid: false,
      evaluation: ['correct', 'correct', 'correct', 'correct', 'correct']
    }
  };
}
