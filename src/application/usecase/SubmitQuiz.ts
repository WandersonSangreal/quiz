import QuizRepository from "../../domain/repository/QuizRepository";

export default class SubmitQuiz {

    constructor(private readonly quizRepository: QuizRepository) {

    }

    async execute(input: any): Promise<Output> {

        const quiz = await this.quizRepository.get(input.idQuiz);

        let score = 0;

        for (const question of quiz.questions) {
            if (input.answers[question.id] === question.correctAnswer) {
                score++;
            }
        }

        score = (score / quiz.questions.length) * 100;

        return { score };

    }

}

type Input = {
    name: string,
    email: string,
    idQuiz: number,
    answers: {
        [id: number]: string
    }
}

type Output = {
    score: number
}