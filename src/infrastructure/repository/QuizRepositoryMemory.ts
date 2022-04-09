import Quiz from "../../domain/entity/Quiz";
import QuizRepository from "../../domain/repository/QuizRepository";

export default class QuizRepositoryMemory implements QuizRepository {

    quizzes: Array<Quiz>;

    constructor() {
        this.quizzes = [
            {
                idQuiz: 1,
                description: "Quiz de teste",
                questions: [
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
                ]
            }
        ];
    }
    async get(idQuiz: number): Promise<Quiz> {

        const quiz = this.quizzes.find(q => q.idQuiz === idQuiz);

        if (!quiz)
            throw new Error("Quiz not found");

        return quiz;

    }



}