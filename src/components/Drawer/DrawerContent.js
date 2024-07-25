import React, { useEffect, useState } from "react";
import Logo from "../../assets/images/Logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./DrawerContent.module.css";
import Close from "../../assets/images/Close.png";
import { Typography } from "antd";
import InactiveHome from "../../assets/images/side-menu/Inactive Home.png";
// import ActiveHome from "../../Assets/Side Menu/Active Home.png";

const links = [
  {
    id: "/",
    label: "Home",
    inactive_icon: InactiveHome,
    active_icon: InactiveHome,
  },

  // {
  //   id: "/promotions",
  //   label: "Promotion",
  //   inactive_icon: InactivePromotion,
  //   active_icon: ActivePromotion,
  // },
  // {
  //   id: "/account",
  //   label: "Account",
  //   inactive_icon: InactiveAccount,
  //   active_icon: ActiveAccount,
  // },
  // {
  //   id: "/deposit",
  //   label: "Deposit",
  //   inactive_icon: InActiveDeposit,
  //   active_icon: ActiveDeposit,
  // },
  // {
  //   id: "/withdraw",
  //   label: "Withdraw",
  //   inactive_icon: InActiveWithdraw,
  //   active_icon: ActiveWithdraw,
  // },
];

const DrawerContent = ({ onClose }) => {
  const navigate = useNavigate();
  const urlLocation = useLocation();
  const match = links.some((link) => link.id === urlLocation.pathname);
  const [linkSelected, setLinkSelected] = useState(
    match ? urlLocation.pathname : ""
  );

  useEffect(() => {
    const match = links.some((link) => link.id === urlLocation.pathname);
    setLinkSelected(match ? urlLocation.pathname : "");
  }, [urlLocation.pathname]);

  return (
    <div className={styles.drawerOverlay}>
      <div className={styles.logoContainer}>
        <div className={styles.logoStyling}>
          <img
            style={{
              width: "50%",
              height: "100%",
              objectFit: "contain",
              background:"#172634 0% 0% no-repeat padding-box",
              // background:
              //   "transparent url('../../Assets/BESTWAY9 Logo.png') 0% 0% no-repeat padding-box",
              opacity: 1,
            }}
            src={Logo}
            alt="logo"
            onClick={() => {
              navigate("/");
              onClose();
            }}
          />
        </div>
        <div style={{ width: 20, height: 20 }}>
          <img
            src={Close}
            style={{ cursor: "pointer" }}
            className="imgStyle"
            onClick={onClose}
            alt="cross"
          />
        </div>
      </div>

      <div className={styles.linksMainContainer}>
        {links.map((item) => (
          <div
            className={styles.linksContainer}
            style={{
              background:
                item.id === linkSelected
                  ? "transparent linear-gradient(180deg, #DD7411 0%, #C1620A 100%) 0% 0% no-repeat padding-box"
                  : "",
              padding: "5px 0 5px 5px",
              borderRadius: 7,
            }}
            key={item.id}
            onClick={() => {
              setLinkSelected(item.id);
              navigate(item.id);
              onClose();
            }}
          >
            <div
              style={{
                paddingTop: 5,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "15px",
                marginBottom: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: "27px",
                  height: "27px",
                  marginLeft: "8px",
                }}
              >
                <img
                  src={
                    item.id === linkSelected
                      ? item.active_icon
                      : item.inactive_icon
                  }
                  className="imgStyle"
                  alt={`logo ${item.id}`}
                />
              </div>
              <Typography.Text className={styles.linkTextStyling}>
                {item.label}
              </Typography.Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrawerContent;
