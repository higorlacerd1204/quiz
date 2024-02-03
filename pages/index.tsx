import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import QuestionModel from '../model/question';
import Quiz from '../components/Quiz';
import { BASE_API_URL } from '../constants/setup';

export default function Home() {
  const router = useRouter();
  const [idsQuestions, setIdsQuestions] = useState<number[]>([]);
  const [question, setQuestion] = useState<QuestionModel>();
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [width, setWidth] = useState(global.window?.innerWidth);

  async function getQuestionsIds() {
    const resp = await fetch(`${BASE_API_URL}/quiz`);
    const idsQuestions = await resp.json();

    setIdsQuestions(idsQuestions);
  }

  async function loadingQuestion(idQuestion: number) {
    const resp = await fetch(`${BASE_API_URL}/questions/${idQuestion}`);
    const json = await resp.json();
    const newQuestion = QuestionModel.fromObject(json);

    setQuestion(newQuestion);
  }

  useEffect(() => {
    global.window?.addEventListener('resize', refreshWidth);
  }, []);

  useEffect(() => {
    getQuestionsIds();
  }, []);

  useEffect(() => {
    idsQuestions.length > 0 && loadingQuestion(idsQuestions[0]);
  }, [idsQuestions]);

  function refreshWidth() {
    setWidth(global.window?.innerWidth);
  }

  function isMobile() {
    return width < 580;
  }

  function questionAnswered(questionAnswered: QuestionModel) {
    setQuestion(questionAnswered);

    const rightAnswer = questionAnswered.rightAnswer;

    setCorrectAnswers(correctAnswers + (rightAnswer ? 1 : 0));
  }

  function getIdNextQuestion() {
    const nextIndex = idsQuestions.indexOf(question?.id) + 1;

    return idsQuestions[nextIndex];
  }

  function goNextStep() {
    const nextId = getIdNextQuestion();

    nextId ? goNextQuestion(nextId) : finishQuiz();
  }

  function goNextQuestion(nextId: number) {
    loadingQuestion(nextId);
  }

  function finishQuiz() {
    router.push({
      pathname: '/result',
      query: {
        total: idsQuestions.length,
        correctAnswers,
      },
    });
  }

  return (
    <>
      <Head>
        <title>Quiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Quiz
        goNextStep={goNextStep}
        isMobile={isMobile()}
        lastQuestion={!getIdNextQuestion()}
        question={question}
        questionAnswered={questionAnswered}
      />
    </>
  );
}
