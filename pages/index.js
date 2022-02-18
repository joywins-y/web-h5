// import React, { useRef, useState } from "react";
// import styles from "../styles/Home.module.css";
// import {
//   CrownOutlined,
//   CustomerServiceOutlined,
//   EnvironmentTwoTone,
//   GiftOutlined,
//   HomeOutlined,
//   MenuOutlined,
//   RightOutlined,
//   SearchOutlined,
//   ShoppingCartOutlined,
//   TagOutlined,
//   UpOutlined,
// } from "@ant-design/icons";
// import { ContentOutline, DownOutline } from "antd-mobile-icons";
// import place from "../public/place.png";
// import place1 from "../public/place.svg";
// import Image from "next/image";

// export default function Home() {
//   const [direction, setDirection] = useState(0);

//   const handleClick = (e) => {
//     const event = e || window.event;
//     const target = event.target || event.srcElement;
//     while (target.nodeName !== "LI") {
//       target = target.parentNode ? target.parentNode : "";
//     }
//     const id = target.getAttribute("cid");
//     if (id == "allPro") {
//       const ul = target.getElementsByTagName("ul")[0];
//       console.log(ul.style.height);
//       if (ul.style.height == 0 || ul.style.height == "0px") {
//         ul.style.opacity = 1;
//         ul.style.visibility = "visible";
//         ul.style.height = "auto";
//         ul.style.maxHeight = "400px";
//         target.children[0].style.color = "#C8DB04";
//         const cid = target.children[0].getAttribute("id");
//         if (cid === "allpro") {
//           setDirection(1);
//         } else if (cid === "help") {
//           setDirection(2);
//         } else if (cid === "blogs") {
//           setDirection(3);
//         }
//       } else {
//         ul.style.visibility = "hidden";
//         ul.style.opacity = 0;
//         ul.style.height = 0;
//         ul.style.maxHeight = 0;
//         target.children[0].style.color = "#fff";
//         setDirection(0);
//       }
//     }
//   };

//   return (
//     <>
//       <div className={styles.container}>
//         <div className={styles.head_nav}>
//           <div className={styles.head_top}>
//             <div className={styles.head_left}>
//               <>
//                 <MenuOutlined
//                   onClick={() => {
//                     const dom = document.getElementById("nav");
//                     if (dom.style.left == "0px") {
//                       dom.style.left = "-90%";
//                     } else {
//                       dom.style.left = 0;
//                     }
//                     console.log(dom.style.left);
//                   }}
//                 />
//               </>

//               <span className={styles.title}>GoCart</span>
//             </div>
//             <div className={styles.head_right}>
//               <SearchOutlined />
//               <ShoppingCartOutlined />
//             </div>
//           </div>
//           <div className={styles.head_bottom}>
//             {/* <EnvironmentTwoTone /> */}

//             <Image src={place1} alt="" width={24} height={22} />
//             <span className={styles.location_name}>Cembo, Makati</span>
//             <DownOutline className={styles.down_icon} />
//           </div>
//         </div>
//         <div style={{ height: 1000, background: "lightblue", marginTop: 80 }}>
//           <p>hhhhh</p>
//         </div>
//       </div>
//       <div id="nav" className={styles.menu_container}>
//         <div style={{ overflow: "scroll", height: "100%", paddingBottom: 30 }}>
//           <ul
//             id="firstNav"
//             className={styles.first_class}
//             onClick={handleClick}
//           >
//             <li>
//               <HomeOutlined className={styles.anticon_icon} />
//               <span>Home</span>
//             </li>
//             <li>
//               <TagOutlined className={styles.anticon_icon} />
//               <span>On Sale</span>
//             </li>
//             <li
//               style={{ borderBottom: "none", transition: "all .4s" }}
//               cid="allPro"
//             >
//               <div className={styles.all_products} id="allpro">
//                 <span>All Products</span>
//                 {direction === 1 ? <UpOutlined /> : <RightOutlined />}
//               </div>
//               <ul className={styles.two_class}>
//                 <li>
//                   <span>Appliances</span>
//                 </li>
//                 <li>
//                   <span>Beauty</span>
//                 </li>
//                 <li>
//                   <span>Department Store</span>
//                 </li>
//                 <li>
//                   <span>Hardware</span>
//                 </li>
//                 <li>
//                   <span>Groceries</span>
//                 </li>
//                 <li>
//                   <span>Pharmacy</span>
//                 </li>
//                 <li>
//                   <span>TOys</span>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               <GiftOutlined className={styles.anticon_icon} />
//               <span>eGift Certificates</span>
//             </li>
//           </ul>
//           <ul id="twoNav" className={styles.first_class} onClick={handleClick}>
//             <li>
//               <CrownOutlined className={styles.anticon_icon} />
//               <span>Our Stores</span>
//             </li>
//             <li
//               style={{ borderBottom: "none", transition: "all .4s" }}
//               cid="allPro"
//             >
//               <div className={styles.all_products} id="help">
//                 <div>
//                   <CustomerServiceOutlined className={styles.anticon_icon} />
//                   <span>Support/Get Help</span>
//                 </div>
//                 {direction === 2 ? <UpOutlined /> : <RightOutlined />}
//               </div>
//               <ul className={styles.two_class}>
//                 <li>
//                   <span>Appliances</span>
//                 </li>
//                 <li>
//                   <span>Beauty</span>
//                 </li>
//                 <li>
//                   <span>Department Store</span>
//                 </li>
//                 <li>
//                   <span>Hardware</span>
//                 </li>
//                 <li>
//                   <span>Groceries</span>
//                 </li>
//                 <li>
//                   <span>Pharmacy</span>
//                 </li>
//                 <li>
//                   <span>TOys</span>
//                 </li>
//               </ul>
//             </li>
//             <li
//               style={{ borderBottom: "none", transition: "all .4s" }}
//               cid="allPro"
//             >
//               <div className={styles.all_products} id="blogs">
//                 <div>
//                   <ContentOutline className={styles.anticon_icon} />
//                   <span>Blogs</span>
//                 </div>
//                 {direction === 3 ? <UpOutlined /> : <RightOutlined />}
//               </div>
//               <ul className={styles.two_class}>
//                 <li>
//                   <span>Appliances</span>
//                 </li>
//                 <li>
//                   <span>Beauty</span>
//                 </li>
//                 <li>
//                   <span>Department Store</span>
//                 </li>
//                 <li>
//                   <span>Hardware</span>
//                 </li>
//                 <li>
//                   <span>Groceries</span>
//                 </li>
//                 <li>
//                   <span>Pharmacy</span>
//                 </li>
//                 <li>
//                   <span>TOys</span>
//                 </li>
//               </ul>
//             </li>
//             <li>
//               {/* <GiftOutlined className={styles.anticon_icon} /> */}
//               <span>Follow us</span>
//             </li>
//           </ul>
//         </div>
//         <div className={styles.footer_menu}>Logout</div>
//       </div>
//     </>
//   );
// }

import Head from "next/head";
import Image from "next/image";
import img1 from "./assets/1.png";
import img2 from "./assets/2.png";
import img3 from "./assets/3.png";
import img4 from "./assets/4.png";
import img5 from "./assets/5.png";
import img6 from "./assets/6.png";
import styles from "../styles/Home.module.css";
import Banner from "./cpmonents/Banner";
import BrandCard from "./cpmonents/BrandCard";
import ProductCard from "./cpmonents/ProductCard";
import CategoryCard from "./cpmonents/CategoryCard";

import { Divider, Grid } from "antd-mobile";

export default () => {
  return (
    <div
      style={
        {
          // height: "1000px",
          // marginTop: 85,
        }
      }
    >
      <Head>
        <title>Home</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="keywords" content="网页关键词" />
        <meta name="description" content="网页描述" />
        <meta name="version" content="1.0" />
      </Head>
      <div className={styles.head_title}>
        What would you like to explore today?
      </div>
      <div className={styles.list_calss}>
        <ul>
          <li>
            <Image src={img1} width={74} height={74} className={styles.img} />
            <span className={styles.text}>Groceries</span>
          </li>
          <li>
            <Image src={img2} width={74} height={74} className={styles.img} />
            <span className={styles.text}>Hardware</span>
          </li>
          <li>
            <Image src={img3} width={74} height={74} className={styles.img} />
            <span className={styles.text}>Pharmacy</span>
          </li>
          <li>
            <Image src={img4} width={74} height={74} className={styles.img} />
            <span className={styles.text}>Appliances</span>
          </li>
          <li>
            <Image src={img5} width={74} height={74} className={styles.img} />
            <span className={styles.text}>Department Store</span>
          </li>
          <li>
            <Image src={img6} width={74} height={74} className={styles.img} />
            <span className={styles.text}>More</span>
          </li>
        </ul>
      </div>

      <div>
        <Banner />
      </div>
      <div className={styles.our_brands}>
        <div className={styles.title}>
          <span>Our Brand</span>
          <span>VIEW ALL</span>
        </div>
        <div className={styles.groceries}>
          <h4>GROCERIES</h4>
          <ul className={styles.brandcard_box}>
            <li>
              <BrandCard />
            </li>
            <li>
              <BrandCard />
            </li>
            <li>
              <BrandCard />
            </li>
            <li>
              <BrandCard />
            </li>
            <li>
              <BrandCard />
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.featured_products}>
        <div className={styles.title}>
          <span>Featured Products</span>
          <span>VIEW ALL</span>
        </div>
        <div>
          <Grid columns={2} gap={16}>
            <Grid.Item>
              <ProductCard />
            </Grid.Item>
            <Grid.Item>
              <ProductCard />
            </Grid.Item>
            <Grid.Item>
              <ProductCard />
            </Grid.Item>
            <Grid.Item>
              <ProductCard />
            </Grid.Item>
          </Grid>
        </div>
      </div>

      <div className={styles.hardware}>
        <div className={styles.title}>HARDWARE</div>
        <div>
          <ul className={styles.brandcard_box}>
            <li>
              <BrandCard />
            </li>
            <li>
              <BrandCard />
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.featured_products}>
        <div className={styles.title}>
          <span>Featured Products</span>
          <span>VIEW ALL</span>
        </div>
        <div>
          <Grid columns={2} gap={16}>
            <Grid.Item>
              <ProductCard />
            </Grid.Item>
            <Grid.Item>
              <ProductCard />
            </Grid.Item>
            <Grid.Item>
              <ProductCard />
            </Grid.Item>
            <Grid.Item>
              <ProductCard />
            </Grid.Item>
          </Grid>
        </div>
      </div>

      <div className={styles.categories_card}>
        <div className={styles.title}>Appliances</div>
        {/* <Divider /> */}
        <CategoryCard />
      </div>
    </div>
  );
};
