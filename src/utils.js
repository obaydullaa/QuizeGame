
function shuffle(quiz) {
    // Combine correct and incorrect answers into one array
    const answers = [quiz.answers, ...quiz.incorrect_answers];

    // Loop through the answers array in reverse order
    for (let i = answers.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i
        const j = Math.floor(Math.random() * (i + 1));

        // Swap the elements at index i and j
        [answers[i], answers[j]] = [answers[j], answers[i]];
    }

    return answers; // Return the shuffled array
}

export default shuffle;
