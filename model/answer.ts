export default class AnswerModel {
  #value: string;
  #correctAnswer: boolean;
  #revealed: boolean;

  constructor(value: string, correctAnswer: boolean, revealed: false) {
    this.#value = value;
    this.#correctAnswer = correctAnswer;
    this.#revealed = revealed;
  }

  get value() {
    return this.#value;
  }

  get correctAnswer() {
    return this.#correctAnswer;
  }

  get revealed() {
    return this.#revealed;
  }
}
