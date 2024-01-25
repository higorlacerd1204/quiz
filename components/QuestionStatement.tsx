import styles from '../styles/QuestionStatement.module.css';

interface QuestionStatementProps {
  text: string;
}

export default function QuestionStatement(props: QuestionStatementProps) {
  return (
    <div className={styles.questionStatement}>
      <span className={styles.text}>{props.text}</span>
    </div>
  );
}
