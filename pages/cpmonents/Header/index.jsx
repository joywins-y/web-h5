import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./index.module.css";
import {
  CrownOutlined,
  CustomerServiceOutlined,
  GiftOutlined,
  HomeOutlined,
  MenuOutlined,
  RightOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  TagOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { ContentOutline, DownOutline } from "antd-mobile-icons";
// import Image from "next/image";
import place1 from "../../../public/place.svg";
import { useState } from "react";

export default () => {
  const router = useRouter();
  const [direction, setDirection] = useState(0);
  const list = [
    {
      icon: <HomeOutlined className={styles.anticon_icon} />,
      name: "Home",
      key: "home",
      link: "/",
      children: [],
    },
    {
      icon: <TagOutlined className={styles.anticon_icon} />,
      name: "On Sale",
      key: "sale",
      link: "/sale",
      children: [],
    },
    {
      icon: (
        <div className={styles.all_products} id="allpro">
          <span>All Products</span>
          {direction === 1 ? <UpOutlined /> : <RightOutlined />}
        </div>
      ),
      name: "All Products",
      key: "all",
      link: "/all",
      children: [
        {
          icon: "",
          name: "Appliances",
          key: "appliances",
          link: "/sale",
          children: [],
        },
        {
          icon: "",
          name: "Beauty",
          key: "beauty",
          link: "/beauty",
          children: [],
        },
        {
          icon: "",
          name: "Department Store",
          key: "department",
          link: "/department",
          children: [],
        },
        {
          icon: "",
          name: "Hardware",
          key: "hardware",
          link: "/hardware",
          children: [],
        },
        {
          icon: "",
          name: "Groceries",
          key: "groceries",
          link: "/groceries",
          children: [],
        },
        {
          icon: "",
          name: "Pharmacy",
          key: "pharmacy",
          link: "/pharmacy",
          children: [],
        },
        { icon: "", name: "TOys", key: "tOys", link: "/tOys", children: [] },
      ],
    },
    {
      icon: <GiftOutlined className={styles.anticon_icon} />,
      name: "eGift Certificates",
      key: "egift",
      link: "/gift",
      children: [],
    },
  ];

  const list1 = [
    {
      icon: "",
      name: "Appliances",
      key: "appliances",
      link: "/sale",
      children: [],
    },
    { icon: "", name: "Beauty", key: "beauty", link: "/beauty", children: [] },
    {
      icon: "",
      name: "Department Store",
      key: "department",
      link: "/department",
      children: [],
    },
    {
      icon: "",
      name: "Hardware",
      key: "hardware",
      link: "/hardware",
      children: [],
    },
    {
      icon: "",
      name: "Groceries",
      key: "groceries",
      link: "/groceries",
      children: [],
    },
    {
      icon: "",
      name: "Pharmacy",
      key: "pharmacy",
      link: "/pharmacy",
      children: [],
    },
    { icon: "", name: "TOys", key: "tOys", link: "/tOys", children: [] },
  ];

  const handleClick = (e) => {
    const event = e || window.event;
    const target = event.target || event.srcElement;
    while (target.nodeName !== "LI") {
      target = target.parentNode ? target.parentNode : "";
    }
    const id = target.getAttribute("cid");
    if (id == "allPro") {
      const ul = target.getElementsByTagName("ul")[0];
      console.log(ul.style.height);
      if (ul.style.height == 0 || ul.style.height == "0px") {
        ul.style.opacity = 1;
        ul.style.visibility = "visible";
        ul.style.height = "auto";
        ul.style.maxHeight = "400px";
        target.children[0].style.color = "#C8DB04";
        const cid = target.children[0].getAttribute("id");
        if (cid === "allpro") {
          setDirection(1);
        } else if (cid === "help") {
          setDirection(2);
        } else if (cid === "blogs") {
          setDirection(3);
        }
      } else {
        ul.style.visibility = "hidden";
        ul.style.opacity = 0;
        ul.style.height = 0;
        ul.style.maxHeight = 0;
        target.children[0].style.color = "#fff";
        setDirection(0);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.head_nav}>
        <div className={styles.head_top}>
          <div className={styles.head_left}>
            <MenuOutlined
              onClick={() => {
                const dom = document.getElementById("nav");
                if (dom.style.left == "0px") {
                  dom.style.left = "-90%";
                } else {
                  dom.style.left = 0;
                }
                console.log(dom.style.left);
              }}
            />
            <span className={styles.title}>GoCart</span>
          </div>
          <div className={styles.head_right}>
            <SearchOutlined />
            <ShoppingCartOutlined />
          </div>
        </div>
        <div className={styles.head_bottom}>
          {/* <Image src={place1} alt="Image Alt" width={24} height={22} /> */}
          <img src={place1} alt="alt" />
          <span className={styles.location_name}>Cembo, Makati</span>
          <DownOutline className={styles.down_icon} />
        </div>
      </div>
      <div id="nav" className={styles.menu_container}>
        <div style={{ overflow: "scroll", height: "100%", paddingBottom: 30 }}>
          <ul
            id="firstNav"
            className={styles.first_class}
            onClick={handleClick}
          >
            {list.map((item) => {
              return item.key === "all" ? (
                <li
                  style={{ borderBottom: "none" }}
                  cid="allPro"
                  key={item.key}
                >
                  {item.icon}
                  <ul className={styles.two_class}>
                    {item.children.map((it) => {
                      return (
                        <li key={it.key}>
                          <Link href={it.link}>
                            <a>
                              {it.icon}
                              <span>{it.name}</span>
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ) : (
                <li key={item.key}>
                  <Link href={item.link}>
                    <a>
                      {item.icon}
                      <span>{item.name}</span>
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul id="twoNav" className={styles.first_class} onClick={handleClick}>
            <li>
              <CrownOutlined className={styles.anticon_icon} />
              <span>Our Stores</span>
            </li>
            <li
              style={{ borderBottom: "none", transition: "all .4s" }}
              cid="allPro"
            >
              <div className={styles.all_products} id="help">
                <div>
                  <CustomerServiceOutlined className={styles.anticon_icon} />
                  <span>Support/Get Help</span>
                </div>
                {direction === 2 ? <UpOutlined /> : <RightOutlined />}
              </div>
              <ul className={styles.two_class}>
                {list1.map((item) => {
                  return (
                    <li key={item.key}>
                      <Link href={item.link}>
                        <a>
                          {item.icon}
                          <span>{item.name}</span>
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li
              style={{ borderBottom: "none", transition: "all .4s" }}
              cid="allPro"
            >
              <div className={styles.all_products} id="blogs">
                <div>
                  <ContentOutline className={styles.anticon_icon} />
                  <span>Blogs</span>
                </div>
                {direction === 3 ? <UpOutlined /> : <RightOutlined />}
              </div>
              <ul className={styles.two_class}>
                {list1.map((item) => {
                  return (
                    <li key={item.key}>
                      <Link href={item.link}>
                        <a>
                          {item.icon}
                          <span>{item.name}</span>
                        </a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li>
              <span>Follow us</span>
            </li>
          </ul>
        </div>
        <div className={styles.footer_menu}>Logout</div>
      </div>
    </div>
  );
};

