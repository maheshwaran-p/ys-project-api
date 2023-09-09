export class OrderQuestionDTO {

    course: number
    question: string
    answer:string
}

export class OrderResponseDTO {

    questionId: number
    studentId: number
    answer: string
}