import { HeartOutlined } from "@ant-design/icons";
import { Button } from "antd-mobile";
import styles from "./index.module.css";

export default () => {
  return (
    <div className={styles.product_card_container}>
      <div className={styles.head_img}>
        <img
          src=""
          alt=""
          style={{
            width: 147,
            height: 150,
            background: "#DEE2E6",
          }}
        />
        <div className={styles.icon_heart}>
          <HeartOutlined />
        </div>
      </div>
      <div className={styles.content}>
        <span className={styles.title}>Product Name Here two lines sample Product Name Here two lines sample Product Name Here two lines sample</span>
        <span className={styles.variety}>3 Variations</span>
        <span className={styles.price}>P 999.00</span>
      </div>
      {/* <div>Product Name Here two lines sample...</div>
      <div>3 Variations</div>
      <div>P 999.00</div> */}
      <div className={styles.btn}>
        <Button> Add to Cart</Button>
      </div>
    </div>
  );
};
