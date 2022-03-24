import React from "react";
import { Breadcrumb } from "antd";
import styles from './index.module.scss';

const Index = ({ menus = [] }) => {
  return (
    <>
      <Breadcrumb separator=">" className={styles.breadcrumb_box}>
        {menus.map((item) => {
          return (
            <Breadcrumb.Item href={item.link}>{item.name}</Breadcrumb.Item>
          );
        })}
        {/* <Breadcrumb.Item href="">Previous Page</Breadcrumb.Item>
        <Breadcrumb.Item>Blogs</Breadcrumb.Item> */}
      </Breadcrumb>
    </>
  );
};

export default Index;
