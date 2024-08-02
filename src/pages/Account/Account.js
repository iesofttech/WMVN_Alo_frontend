import React, { useEffect, useState } from "react";
import styles from "./Account.module.css";
import copy from "copy-to-clipboard";
import { Avatar, Divider, Progress, Tooltip, Typography } from "antd";
import DepositIcon from "../../assets/images/account-page/Deposit.png";
import WithdrawalIcon from "../../assets/images/account-page/Withdrawal.png";
import BettingRecordIcon from "../../assets/images/account-page/Betting Record.png";
import NotificationsIcon from "../../assets/images/account-page/Notifications.png";
import TransactionIcon from "../../assets/images/account-page/Transaction.png";
import paymentMethodIcon from "../../assets/images/account-page/Payment Methods.png";
import LogOutIcon from "../../assets/images/account-page/Logout.png";
import ProfileIcon from "../../assets/images/account-page/Profile IMG.png";
import CrownIcon from "../../assets/images/account-page/Crown.png";
import RefreshIcon from "../../assets/images/account-page/Refresh.png";
import copyIcon from "../../assets/images/account-page/Copy.png";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [levelData, setLevelData] = useState();
  const current = 0;
  const total = levelData?.max;
  const percent = (current / total) * 100;

  const accountCategoryData = [
    {
      id: "deposit",
      label: "Deposit",
      // link: "/deposit",
      icon: DepositIcon,
    },
    {
      id: "withdrawal",
      label: "Withdrawal",
      // link: "/withdraw",
      icon: WithdrawalIcon,
    },
    {
      id: "transaction",
      label: "Transcation",
      // link: "/Transaction",
      icon: TransactionIcon,
    },
    {
      id: "paymentMethod",
      label: "Payment Method",
      // link: "/payment-method",
      icon: paymentMethodIcon,
    },
    {
      id: "bettingRecord",
      label: "Betting Record",
      link: "betting-records",
      icon: BettingRecordIcon,
    },
    {
      id: "notifications",
      label: "Notifications",
      // link: "/notifications",
      icon: NotificationsIcon,
    },
    { id: "logout", label: "Logout", link: "", icon: LogOutIcon },
  ];

  const handleCopyClick = () => {
    const textToCopy = "Ravi-Dev";
    copy(textToCopy);
  };

  return (
    <div className={styles.container}>
      <div className={styles.accountProfileBlur}>
        <div className={styles.accountProfile}>
          <div>
            <Avatar size={60} src={<img src={ProfileIcon} alt="avatar" />} />
          </div>

          <div className={styles.profileDetails}>
            <div className={styles.userTextContainer}>
              <div>
                <Typography.Text className={styles.userFullNameStyle}>
                  {`ie8888`}
                </Typography.Text>
              </div>

              <div>
                <img
                  onClick={handleCopyClick}
                  className={styles.imgStyle}
                  style={{ cursor: "pointer", marginLeft: "2%" }}
                  src={copyIcon}
                  alt="CopyIcon"
                />
              </div>
            </div>

            <div className={styles.balanceTextContainer}>
              <>
                <Tooltip>
                  <Typography.Text className={styles.profileBalanceAmount}>
                    đ 500K
                  </Typography.Text>
                </Tooltip>

                <img
                  // onClick={handleRefreshClick}
                  className={styles.imgStyle}
                  style={{ cursor: "pointer", marginLeft: "6%" }}
                  src={RefreshIcon}
                  alt="RefreshIcon"
                />
              </>
            </div>
          </div>

          <div style={{ width: "100%" }}>
            <div className={styles.levelStyle}>
              <img style={{ width: "27px" }} src={CrownIcon} alt="CrownIcon" />
              <Typography.Text className={styles.levelNameStyle}>
                {`Level 1`}
              </Typography.Text>
            </div>

            <div style={{ color: "white", display: "flex", gap: "1%" }}>
              <div style={{ width: "100%" }}>
                <Progress
                  percent={percent}
                  showInfo={false}
                  status="active"
                  size="small"
                  strokeColor={{
                    from: "#108ee9",
                    to: "#000000d6",
                  }}
                  trailColor="white"
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <span>{current}</span>
                <span>/</span>
                <span>{1}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            height: "30px",
            padding: "0 3%",
            alignContent: "center",
            background: "#0A151F 0% 0% no-repeat padding-box",
            color: "white",
            borderRadius: "21px",
          }}
        >
          <Typography.Text
            className={styles.userNameStyle}
            style={{ textAlign: "center", textTransform: "capitalize" }}
          >
            Personal Center
          </Typography.Text>
        </div>
        <div style={{ flex: "1" }}>
          <Divider
            orientation="right"
            plain
            style={{
              paddingLeft: "0px",
              position: "relative",
              left: "0px",
              border: "1px solid #355471",
              opacity: 1,
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
          gap: "20px",
        }}
      >
        {accountCategoryData.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              cursor: "pointer",
              margin: "auto",
            }}
            onClick={() => navigate(item.link)}
          >
            <div
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background:
                  "transparent linear-gradient(180deg, #0A151F 0%, #2A445B 100%) 0% 0% no-repeat padding-box",
                border: "1px solid #2A445B",
                opacity: "1",
              }}
            >
              <img
                src={item.icon}
                alt={item.label}
                style={{
                  maxWidth: "60%",
                  maxHeight: "60%",
                }}
              />
            </div>
            <Typography.Text
              className={styles.userNameStyle}
              style={{
                textAlign: "center",
                margin: "5% auto",
              }}
            >
              {item.label}
            </Typography.Text>
          </div>
        ))}
      </div>
      {/* {logoutModal && ( 
        <LogoutConfirmationModal 
          logoutModal={logoutModal} 
          closeLogoutModal={() => setLogoutModal(false)} 
        /> 
      )}  */}
    </div>
  );
};

export default Account;
