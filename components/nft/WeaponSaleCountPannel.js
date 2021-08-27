import { WeaponCount } from 'containers';
import styles from './SaleCountPannel.module.scss';
export default function WeaponSaleCountPannel(props) {
  const { total, oldTotal } = props;
  const { count } = WeaponCount.useContainer();
  console.log("total is ",total ,"sold is ",count)
  let left = total + oldTotal - count;
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
