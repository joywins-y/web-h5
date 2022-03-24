import { Button } from "antd";
import React from "react";
import img from "../../../assets/unsplash.png";
import styles from "./index.module.scss";
import { FireFilled } from "@ant-design/icons";

const Index = () => {
  return (
    <div className={styles.content_box}>
      <div className="img_cover">
        <img src={img} alt="" />
      </div>

      <div className={styles.article}>
        <div className={styles.head}>
          <div className="date">December 21, 2021</div>
          <div className="title">
            Blog Title here, can fit two lines for title
          </div>
          <Button className="btn">
            <FireFilled />Special Feature
          </Button>
        </div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud.
          </p>
          <p>
            Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
