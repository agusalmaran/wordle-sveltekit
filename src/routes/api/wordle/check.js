export async function post({ request }) {
  let answer = undefined;
  try {
    const data = await request.json();
    answer = data.answer;
  } catch {
    answer = undefined
  }

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
