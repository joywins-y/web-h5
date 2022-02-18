import rsc from "../../assets/RSC.png";
import bg1 from "../../assets/bg_rsc.png";
import styles from "./index.module.css";

export default () => {
  return (
    <>
      <div className={styles.img_box}>
        <img src={bg1} alt="" />
      </div>
      <div className={styles.content}>
        <span>Robinsons Supermarket</span>
        <span>Groceries</span>
      </div>
      <div className={styles.brand}>
        <img src={rsc} alt="rsc img" />
      </div>
    </>
  );
};
