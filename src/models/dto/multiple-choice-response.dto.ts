export class MultipleChoiceResponseDTO {
    questionId: number;
    answer: string;
}

export interface MultipleChoiceResponseInterface {
    answer: string,
    questionId: number,
    isCorrect: boolean,
}