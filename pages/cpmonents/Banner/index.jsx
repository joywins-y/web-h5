import { useRef } from "react";
import styles from "./index.module.css";
import img1 from "../../assets/Image-Middle.png";
import img2 from "../../assets/Image-Right.png";
import {
  LeftCircleOutlined,
  LeftOutlined,
  RightCircleOutlined,
  RightOutlined,
} from "@ant-design/icons";
// import Image from "next/image";
import { Swiper } from "antd-mobile/es/components/swiper/swiper";
import { Button } from "antd-mobile";

export default () => {
  const ref = useRef(null);
  const imgs = [img1, img2, img1];
  const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];
  const items = colors.map((img, index) => (
    <Swiper.Item key={index}>
      <div
        style={{
          background: img,
          height: 143,
        }}
      >
        {/* <Image src={img} /> */}
        <img src={imgs[index] || ""} alt="" />
        {index + 1}
      </div>
    </Swiper.Item>
  ));
  const buttonStyles = {
    border: "none",
    background: "#fff",
    width: 20,
    height: 20,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    position: "absolute",
    top: 0,
    bottom: 0,
    margin: "auto",
  };
  return (
    <div
      style={{
        height: 224,
        background: "#F6F6F6",
        position: "relative",
        padding: '16px 0'
      }}
    >
      <div
        style={{
          paddingLeft: 15,
        }}
        className={styles.title}
      >
        Best Deals
      </div>
      <Swiper
        autoplay
        autoplayInterval={5000}
        loop
        ref={ref}
        allowTouchMove={false}
        indicatorProps={{
          style: {
            "--active-dot-color": "#E40046",
            "--dot-size": "8px",
            "--active-dot-size": "8px",
            "--dot-border-radius": "50%",
            marginTop: 10
          },
        }}
        stuckAtBoundary={false}
        defaultIndex={0}
        style={{
          height: 160,
          padding: "0 15px",
        }}
      >
        {items}
      </Swiper>
      <Button
        onClick={() => {
          ref.current?.swipePrev();
        }}
        style={{
          ...buttonStyles,
          left: 0,
        }}
      >
        <LeftOutlined
          style={{
            color: "#84BD00",
            fontSize: "12px",
          }}
        />
      </Button>
      <Button
        onClick={() => {
          ref.current?.swipeNext();
        }}
        style={{ ...buttonStyles, right: 20 }}
      >
        <RightOutlined
          style={{
            color: "#84BD00",
            fontSize: "12px",
          }}
        />
      </Button>
    </div>
  );
};
