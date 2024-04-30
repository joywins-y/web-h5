import styles from "./index.module.css";
import appstore from "../../assets/appstore.png";
import googleplay from "../../assets/googleplay.png";
import {
  TwitterCircleFilled,
  YoutubeFilled,
  FacebookFilled,
  InstagramFilled,
  MailOutlined,
  CopyrightOutlined,
} from "@ant-design/icons";
// import Image from "next/image";

const Index = () => {
  return (
    <div className={styles.footer_container}>
      <div>
        {/* <Image src={appstore} alt="" />
        <Image src={googleplay} alt="" /> */}
        <img src={appstore} alt="" />
        <img src={googleplay} alt="" />
      </div>
      <div>
        <FacebookFilled className={styles.icon_style} />
        <TwitterCircleFilled className={styles.icon_style} />
        <InstagramFilled className={styles.icon_style} />
        <YoutubeFilled className={styles.icon_style} />
      </div>
      <div className={styles.content}>
        <strong>About Us</strong>
        <p>Description about the brand</p>
      </div>
      <div className={styles.content}>
        <strong>Customer Service</strong>
        <p>
          <MailOutlined /> name@email.com
        </p>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            color: "#fff",
          }}
        >
          <strong>Account</strong>
          <strong>Support</strong>
          <strong>Our Stores</strong>
        </div>
        <ul className={styles.ul_list}>
          <li>page1</li>
          <li>page2</li>
          <li>page3</li>
          <li>page1</li>
          <li>page2</li>
          <li>page3</li>
          <li>Delivery</li>
          <li>Pickup</li>
          <li>News</li>
        </ul>
      </div>
      <div
        style={{
          color: "rgba(255, 255, 255, .5)",
          fontSize: 14,
        }}
      >
        <CopyrightOutlined /> You. All rights reserved.
      </div>
    </div>
  );
};

export default Index;
