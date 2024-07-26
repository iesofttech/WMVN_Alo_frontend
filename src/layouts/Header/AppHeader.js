import React, { useState } from "react";
import styles from "./AppHeader.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CustomButton from "../../helpers/helperComponents/CustomButton";
import sideMenuIcon from "../../assets/images/Menu.png";
import MenuLogo from "../../components/SideMenu/MenuLogo";
import BackButton from "../../assets/images/Back.png";
import WalletIcon from "../../assets/images/header/Wallet.png";

const AppHeader = () => {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  // const userToken = useSelector((state) => state.user.user);
  const userToken = "";
  const [drawerOpened, setDrawerOpened] = useState(false);

  const promotionTitle = location.state?.promotionTitle;
  const segments = pathname.split("/");
  const lastSegment = segments[segments.length - 1];
  const title = lastSegment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div
      style={{
        height: "63px",
        maxWidth: "561px",
        width: "100%",
        flexShrink: 0,
        background:
          pathname === "/login" || pathname === "/register"
            ? "transparent"
            : "#0A151F 0% 0% no-repeat padding-box",
        top: 0,
        zIndex: 1000,
        position: "fixed",
        display: "flex",
      }}
      className="main-header"
    >
      {pathname.includes("games") ||
      pathname === "/login" ||
      pathname === "/register" ||
      pathname === "/promotions" ||
      pathname === "/account/ewallet" ||
      pathname === "/account/transactions" ||
      pathname === "/account/betting-records" ||
      pathname === "/add-payment-method" ||
      pathname === "/support" ||
      pathname === "/deposit" ||
      pathname === "/withdraw" ||
      pathname === "/account" ||
      pathname === "/notifications" ||
      pathname === "/about-us" ||
      pathname === "/responsible-gaming" ||
      pathname === "/privacy-policy" ||
      pathname === "/terms-and-conditions" ||
      pathname.includes("/promotions/" + title) ||
      pathname.includes("/transections/" + title) ? (
        <>
          <div
            style={{
              width: "100%",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              height: "100%",
              padding: "0 20px",
            }}
          >
            <div style={{ width: "16px", height: "26px" }}>
              <img
                src={BackButton}
                style={{ cursor: "pointer" }}
                className="imgStyle"
                onClick={() => (userToken ? navigate(-1) : navigate("/"))}
                alt="back button"
              />
            </div>
            <div
              style={{
                margin: "auto",
              }}
            >
              <span
                style={{
                  fontStyle: "normal",
                  fontVariant: "normal",
                  fonSeight: "normal",
                  fontSize: "24px",
                  lineHeight: "29px",
                  fontFamily: "Kanit",
                  letterSpacing: "0px",
                  color: "#FFFFFF",
                  opacity: 1,
                }}
              >
                {pathname.includes("/promotions/" + title)
                  ? promotionTitle
                  : pathname.includes("/transections/" + title)
                  ? "Transaction"
                  : pathname.includes("/login") ||
                    pathname.includes("/register")
                  ? ""
                  : title}
              </span>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.balanceMainHeader}>
          {userToken ? (
            <div className={styles.balanceExitContainer}>
              {/* <div
                className={styles.notificationStyle}
                style={{ marginTop: 5 }}
              >
                <Badge
                  count={notificationCount}
                  style={{
                    backgroundColor: "#5158DE",
                    color: "white",
                    boxShadow: "0 0 0 1px #5158DE inset",
                  }}
                >
                  <img
                    src={NotificationIcon}
                    style={{ cursor: "pointer" }}
                    className="imgStyle"
                    alt="notification"
                    onClick={() => navigate("/notifications")}
                  />
                </Badge>
              </div> */}
              {/* <Link style={{ textDecoration: "none" }} to="/account">
                <div className={styles.balanceCoinsContainer}>
                  <div className={styles.coinsStyle}>
                    <img src={balanceIcon} className="imgStyle" alt="balance" />
                  </div>
                  <div className={styles.balanceTextContainer}>
                    <Typography.Text className={styles.balanceText}>
                      {currencyHelper(userInfoReduxData?.currency)}
                    </Typography.Text>
                    <Typography.Text className={styles.balanceText}>
                      {userInfoReduxData?.balance &&
                        CommaSeperator(toFixedFunc(userInfoReduxData?.balance))}
                    </Typography.Text>
                  </div>
                </div>
              </Link>
              <div className={styles.exitIconStyle} style={{ marginTop: 5 }}>
                <img
                  src={exitIcon}
                  style={{ cursor: "pointer" }}
                  className="imgStyle"
                  alt="exit"
                  onClick={() => setLogoutModal(true)}
                />
              </div> */}
            </div>
          ) : (
            <div className={styles.buttonsContainer}>
              <Link to="/login">
                <CustomButton text="Login" type={styles.appHeaderLoginBtn} />
              </Link>
              <Link to="/register">
                <CustomButton text="Sign up" type={styles.appHeaderSinupBtn} />
              </Link>
            </div>
          )}
          <div className={styles.imagesWrapper}>
            <img
              src={WalletIcon}
              className={styles.sideMenuIconStyle}
              alt="sideMenu"
              // onClick={() => setDrawerOpened(true)}
            />
            <MenuLogo
              drawerOpened={drawerOpened}
              setDrawerOpened={setDrawerOpened}
            />
            <img
              src={sideMenuIcon}
              className={styles.sideMenuIconStyle}
              alt="sideMenu"
              onClick={() => setDrawerOpened(true)}
            />
            {/* <img
              onClick={() => navigate("/")}
              src={Logo}
              alt="logo"
              className={styles.logo}
            /> */}
          </div>
        </div>
      )}

      {/* {logoutModal && (
        <LogoutConfirmationModal
          logoutModal={logoutModal}
          closeLogoutModal={() => setLogoutModal(false)}
        />
      )} */}
    </div>
  );
};

export default AppHeader;
