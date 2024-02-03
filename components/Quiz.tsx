import ReactLoading from 'react-loading';
import QuestionModel from '../model/question';
import styles from '../styles/Quiz.module.css';
import Button from './Button';
import Question from './Question';
import FadeInOut from './FadeInOut';

interface QuizProps {
  question: QuestionModel;
  lastQuestion: boolean;
  questionAnswered: (questao: QuestionModel) => void;
  goNextStep: () => void;
  isMobile: boolean;
}

export default function Quiz(props: QuizProps) {
  function onClickResponse(index: number) {
    if (props.question.notAnswered) {
      props.questionAnswered(props.question.answeredQuestion(index));
    }
  }

  return (
    <>
      {props.question ? (
        <FadeInOut show={!!props.question} duration={1000}>
          <div className={styles.quiz}>
            <Question
              emptyTime={props.goNextStep}
              isMobile={props.isMobile}
              onClickResponse={onClickResponse}
              timeAnswer={10}
              value={props.question}
            />
            <Button
              onClick={props.goNextStep}
              text={props.lastQuestion ? 'Finalizar' : 'Próxima'}
            />
          </div>
        </FadeInOut>
      ) : (
        <div className={styles.loading}>
          <ReactLoading type="spin" color="#fff" height={'10%'} width={'10%'} />
        </div>
      )}
    </>
  );
}
