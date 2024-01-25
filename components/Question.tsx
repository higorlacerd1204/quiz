import QuestionModel from '../model/question';
import styles from '../styles/Question.module.css';
import QuestionStatement from './QuestionStatement';

interface QuestionProps {
  value: QuestionModel;
}

export default function Question(props: QuestionProps) {
  const question = props.value;

  return (
    <div className={styles.question}>
      <QuestionStatement text={question.question} />
    </div>
  );
}
