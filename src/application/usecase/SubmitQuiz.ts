import QuizRepository from "../../domain/repository/QuizRepository";

export default class SubmitQuiz {

    constructor(private readonly quizRepository: QuizRepository) {

    }

    async execute(input: any): Promise<Output> {

        const quiz = await this.quizRepository.get(input.idQuiz);

        return {
            score: 100
        }

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