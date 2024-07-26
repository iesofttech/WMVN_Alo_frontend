import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./HomeBar.module.css";
import DepositIcon from "../../assets/images/header/Deposit.png";
import WithdrawIcon from "../../assets/images/header/Withdraw.png";
import Logo from "../../assets/images/Logo.png";
import HomeIcon from "../../assets/images/header/Home.png";

const HomeBar = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "72px",
        maxWidth: "561px",
        width: "100%",
        background: "#0A151F 0% 0% no-repeat padding-box",
        display: "flex",
      }}
    >
      <div className={styles.buttonsContainer}>
        <Link to="/">
          <div className={styles.imagesWrapper}>
            <img
              width={34}
              height={24}
              src={DepositIcon}
              className={styles.menuIconStyle}
              alt="deposite"
              // onClick={() => setDrawerOpened(true)}
            />
            <div
              style={{
                textAlign: "center",
                fontStyle: "normal",
                fontVariant: "normal",
                fonSeight: "normal",
                fontSize: "10px",
                lineHeight: "15px",
                fontFamily: "Kanit",
                letterSpacing: "0px",
                color: "#84A9CB",
                opacity: 1,
              }}
            >
              Deposit
            </div>
          </div>
        </Link>
        <Link to="/">
          <div className={styles.imagesWrapper}>
            <img
              width={24}
              height={24}
              src={WithdrawIcon}
              className={styles.menuIconStyle}
              alt="withdraw"
              // onClick={() => setDrawerOpened(true)}
            />
            <div
              style={{
                textAlign: "center",
                fontStyle: "normal",
                fontVariant: "normal",
                fonSeight: "normal",
                fontSize: "10px",
                lineHeight: "15px",
                fontFamily: "Kanit",
                letterSpacing: "0px",
                color: "#84A9CB",
                opacity: 1,
              }}
            >
              Withdraw
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.logoStyling}>
        <img
          style={{
            width: "92px",
            height: "52px",
            objectFit: "contain",
            // background: "#172634 0% 0% no-repeat padding-box",
            opacity: 1,
          }}
          src={Logo}
          alt="logo"
          onClick={() => {
            navigate("/");
          }}
        />
        <div style={{cursor:"pointer"}} className={styles.homeiconWrapper}>
          <img
            width={24}
            height={24}
            src={HomeIcon}
            // className={styles.menuIconStyle}
            alt="withdraw"
            // onClick={() => setDrawerOpened(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBar;
