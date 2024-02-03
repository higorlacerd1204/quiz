import Button from '../components/Button';
import Statistic from '../components/Statistic';
import styles from '../styles/Result.module.css';
import { useRouter } from 'next/router';

export default function Result() {
  const router = useRouter();
  const total = +router.query.total;
  const correctAnswers = +router.query.correctAnswers;
  const percent = Math.round((correctAnswers / total) * 100);

  return (
    <div className={styles.result}>
      <h1 className={styles.title}>Resultado Final</h1>
      <div className={styles.stastistics}>
        <Statistic text="Perguntas" value={total} />
        <Statistic text="Certas" value={correctAnswers} backgroundColor="#9CD2A4" />
        <Statistic text="Percentual" value={`${percent}%`} backgroundColor="#DE6A33" />
      </div>
      <Button href="/" text="Tentar Novamente" />
    </div>
  );
}
