import React from "react";
import { Swiper, Toast } from "antd-mobile";
import styles from "./index.module.css";
import bannerItem1 from "../assets/carousel-img1.png";
import Breadcrumbs from "./components/Breadcrumbs";
import { Button } from "antd";
import Contents from './components/Content';

const Index = () => {
  const images = [bannerItem1];
  const colors = ["#ace0ff", "#bcffbd", "#e4fabd"];
  const items = colors.map((color, index) => (
    <Swiper.Item key={index}>
      <div
        className={styles.swiper_content}
        style={{ background: color }}
        onClick={() => {
          Toast.show(`你点击了卡片 ${index + 1}`);
        }}
      >
        {images[index] && (
          <img
            src={images[index]}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        )}
      </div>
    </Swiper.Item>
  ));

  const menus = [
    { link: "/", name: "Previous Page" },
    { link: "", name: "Blogs" },
  ];

  return (
    <div>
      <Breadcrumbs menus={menus} />
      <Swiper
        loop
        autoplay
        indicatorProps={{
          style: {
            "--dot-color": "#fff",
            "--active-dot-color": "#C8DB04",
            "--dot-size": "7px",
            "--active-dot-size": "7px",
            "--dot-border-radius": "50%",
          },
        }}
      >
        {items}
      </Swiper>
      <Contents />
    </div>
  );
};

export default Index;
