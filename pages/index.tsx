import { useState } from 'react';
import Question from '../components/Question';
import AnswerModel from '../model/answer';
import QuestionModel from '../model/question';

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
  const [question, setQuestion] = useState(questionMock);

  function onClickResponse(index: number) {
    console.log(index);
    setQuestion(question.answeredQuestion(index));
  }

  return (
    <div
      style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}
    >
      <Question onClickResponse={onClickResponse} value={question} />
    </div>
  );
}
