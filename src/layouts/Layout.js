import AppHeader from "./Header/AppHeader";
import AppFooter from "./Footer/AppFooter";
import style from "./Layout.module.css";
// import useLogout from "./Header/useLogout";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  // const logout = useLogout();
  const dispatch = useDispatch();
  const location = useLocation();
  const { pathname } = location;
  const segments = pathname.split("/");
  const lastSegment = segments[segments.length - 1];
  const title = lastSegment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const [showloading, setShowLoading] = useState(true);
  // const [showLangSelector, setShowLangSelector] = useState(false);
  const pathName =
    pathname.includes("games") ||
    pathname === "/" ||
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/promotions" ||
    pathname === "/account/ewallet" ||
    pathname === "/account/transactions" ||
    pathname === "/account/betting-records" ||
    pathname === "/account/invite-friend" ||
    pathname === "/add-payment-method" ||
    pathname === "/support" ||
    pathname === "/deposit" ||
    pathname === "/withdraw" ||
    pathname === "/account" ||
    pathname === "/notifications" ||
    pathname === "/about-us" ||
    pathname === "/responsible-gaming" ||
    pathname === "/privacy-policy" ||
    pathname === "/terms-and-conditions";
  pathname.includes("/promotions/" + title) ||
    pathname.includes("/transections/" + title);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showloading]);



  // get user info
  // useEffect(() => {
  //   if (localStorage.getItem("auth_token")) {
  //     dispatch(setUser(localStorage.getItem("auth_token")));
  //     userInfoApi();
  //   }
  // });
  // User balance API
  // const userInfoApi = async () => {
  //   const userInfoApiRes = await APIUser();
  //   if (userInfoApiRes?.response?.status === 401) {
  //     logout();
  //   } else if (userInfoApiRes?.response?.status === 400) {
  //     if (userInfoApiRes?.response?.data?.message === "INVALID_ACCESS") {
  //       logout();
  //     }
  //   } else {
  //     localStorage.setItem("currency_id", userInfoApiRes?.currency_id);
  //     dispatch(setUserInfo(userInfoApiRes));
  //   }
  // };

  const notFoundStyle = {
    display: "flex",
    alignItems: "center",
    width: "auto",
  };


  return (
    <div className={`mainLayoutWrapper ${style.wrapper}`}>
      {/* {showloading && <HomePageLoader show={showloading} />} */}
      {pathName && <AppHeader />}
      <main className={style.content} style={pathName ? {} : notFoundStyle}>
        {children}
      </main>
      {pathName && <AppFooter />}
    </div>
  );
};

export default Layout;
