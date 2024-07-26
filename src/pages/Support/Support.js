import React, { useEffect, useState } from "react";
import { Card } from "antd";
import { useSelector } from "react-redux";
// import CustomButton from "../HelperComponents/CustomButton";
import styles from "./Support.module.css";
import SupportImage from "../../assets/images/support-page/Customer Support IMG.png";
import ArrowIcon from "../../assets/images/Arrow Right.png";
import CallIcon from "../../assets/images/support-page/Customer Support 24-7.png";
import TelegramIcon from "../../assets/images/support-page/Telegram Channel.png";
// import FAQIcon from "../../Assets/CHATBOTA 3.png";
import { Link } from "react-router-dom";
// import Loader from "../Loader/Loader";

const Support = () => {
  const userInfoReduxData = useSelector((state) => state?.user?.userInfo);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <div style={{ marginTop: "4%" }}>{/* <Loader />; */}</div>;
  // }
  return (
    <div className={styles.supportWrapper}>
      <div className={styles.section1}>
        <div className={styles.welcomeTextHolder}>
          <span className={styles.welcomeTextTitle}>
            {/* <span className={styles.bw9Text}>BW9</span> */}
            Welcome to our Customer Service Center
          </span>
          <span className={styles.welcomeTextSubTitle}>
            Hello,{" "}
            <span className={styles.customerName}>
              {userInfoReduxData ? userInfoReduxData?.name : "Customer"}
            </span>
          </span>
        </div>

        <div className={styles.imageHolder}>
          <img
            className={styles.supportImage}
            src={SupportImage}
            alt={`SupportImage`}
          />
        </div>
      </div>

      <Link
        style={{ textDecoration: "none" }}
        // to="https://t.me/BW9OFFICIAL"
        // target="_blank"
      >
        <Card size={`small`} className={styles.cards}>
          <div className={styles.cardContent}>
            <div className={styles.cardIconHolder}>
              <img
                src={TelegramIcon}
                alt={`TelegramIcon`}
                className={styles.cardIcon}
              />
            </div>
            <div className={styles.cardTextHolder}>
              <span className={styles.cardTextTitle}>Telegram Channel</span>
              {/* <span className={styles.cardTextSubTitle}>Available 24/7</span> */}
            </div>
            <div className={styles.arrowIconHolder}>
              <img
                src={ArrowIcon}
                alt={`ArrowIcon`}
                className={styles.ArrowIcon}
              />
            </div>
          </div>
        </Card>
      </Link>

      <Link
        style={{ textDecoration: "none" }}
        // to="https://direct.lc.chat/17932593/"
        // target="_blank"
      >
        <Card size={`small`} className={styles.cards}>
          <div className={styles.cardContent}>
            <div className={styles.cardIconHolder}>
              <img
                src={CallIcon}
                alt={`CallIcon`}
                className={styles.cardIcon}
              />
            </div>
            <div className={styles.cardTextHolder}>
              <span className={styles.cardTextTitle}>
                Customer Support 24/7
              </span>
              {/* <span className={styles.cardTextSubTitle}>
                Leave us a contact number and our customer service
                representative will call you back shortly.
              </span> */}
            </div>
            <div className={styles.arrowIconHolder}>
              <img
                src={ArrowIcon}
                alt={`ArrowIcon`}
                className={styles.ArrowIcon}
              />
            </div>
          </div>
        </Card>
      </Link>

      {/* <Card size={`small`} className={styles.cards}>
        <div className={styles.cardContent}>
          <div className={styles.cardIconHolder}>
            <img src={FAQIcon} alt={`FAQIcon`} className={styles.cardIcon} />
          </div>
          <div className={styles.cardTextHolder}>
            <span className={styles.cardTextTitle}>Chat Bot</span>
            <span className={styles.cardTextSubTitle}>
              Answer Frequently Ask Questions
            </span>
          </div>
          <div className={styles.arrowIconHolder}>
            <img
              src={ArrowIcon}
              alt={`ArrowIcon`}
              className={styles.ArrowIcon}
            />
          </div>
        </div>
      </Card> */}
    </div>
  );
};

export default Support;
