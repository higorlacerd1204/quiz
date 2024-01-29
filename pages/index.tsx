import { useEffect, useState } from 'react';
import AnswerModel from '../model/answer';
import QuestionModel from '../model/question';
import Quiz from '../components/Quiz';
import { BASE_URL } from '../constants/setup';

const questionMock = new QuestionModel(
  1,
  'Melhor cor?',
  [
    AnswerModel.wrongAnswer('Verde'),
    AnswerModel.wrongAnswer('Preto'),
    AnswerModel.wrongAnswer('Rosa'),
    AnswerModel.correctAnswer('Azul'),
  ],
  false,
);

export default function Home() {
  const [idsQuestions, setIdsQuestions] = useState<number[]>([]);
  const [question, setQuestion] = useState(questionMock);

  async function getQuestionsIds() {
    const resp = await fetch(`${BASE_URL}/quiz`);
    const idsQuestions = await resp.json();

    setIdsQuestions(idsQuestions);
  }

  async function loadingQuestion(idQuestion: number) {
    const resp = await fetch(`${BASE_URL}/questions/${idQuestion}`);
    const json = await resp.json();

    console.log(json);
  }

  useEffect(() => {
    getQuestionsIds();
  }, []);

  useEffect(() => {
    idsQuestions.length > 0 && loadingQuestion(idsQuestions[0]);
  }, [idsQuestions]);

  function questionAnswered(question: QuestionModel) {}

  function goNextQuestion() {}

  return (
    <Quiz
      goNextQuestion={goNextQuestion}
      lastQuestion={true}
      question={question}
      questionAnswered={questionAnswered}
    />
  );
}
