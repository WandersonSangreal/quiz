import SubmitQuiz from "../src/application/usecase/SubmitQuiz";
import QuizRepositoryMemory from "../src/infrastructure/repository/QuizRepositoryMemory";

test("Um usuário deve poder submeter um quiz", async () => {

    const quizRepositoryMemory = new QuizRepositoryMemory();
    const submitQuiz = new SubmitQuiz(quizRepositoryMemory);

    const input = {
        name: "Wanderson",
        email: "wanderson@mail.com",
        idQuiz: 1,
        answers: {
            1: "a",
            2: "a"
        }
    }

    const output = await submitQuiz.execute(input);

    expect(output.score).toBe(100);

});