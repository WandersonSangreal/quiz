export default class Quiz {

    constructor(readonly idQuiz: number, readonly description: string, readonly questions: Array<{ id: number, description: string, answers: Array<{ id: string, description: string }>, correctAnswer: string }>) {

    }

}