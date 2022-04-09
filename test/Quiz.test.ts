import Quiz from "../src/domain/entity/Quiz";

test("Deve criar um quiz", () => {
    const questions = [
        {
            id: 1,
            description: "Javascript é legal?",
            answers: [
                { id: "a", description: "Sim" },
                { id: "b", description: "Não" }
            ],
            correctAnswer: "a"
        },
        {
            id: 2,
            description: "Typescript é melhor do que Javascript?",
            answers: [
                { id: "a", description: "Sim" },
                { id: "b", description: "Não" }
            ],
            correctAnswer: "a"
        }
    ];

    const quiz = new Quiz(1, "Quiz de teste", questions);

    expect(quiz.idQuiz).toBe(1);
    expect(quiz.questions[0].id).toBe(1);
    expect(quiz.questions).toHaveLength(2);

});