import { CharacterCount } from 'containers';
import styles from './SaleCountPannel.module.scss';
export default function CharacterSaleCountPannel(props) {
  const { total, oldTotal } = props;
  const { count } = CharacterCount.useContainer();
  let left = total + oldTotal - count;
  console.log("total is ",total ,"sold is ",count)
  if (left < 0) {
    left = 0;
  }
  return (
    <div className={styles.amount}>
      <span className={styles.leftAmount}>{left}</span>
      <div className={styles.totalAmount}>
        <div>LEFT OF</div>
        <div>{total}</div>
      </div>
    </div>
  );
}
