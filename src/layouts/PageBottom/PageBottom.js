import React from "react";
import CustomText from "../../HelperComponents/CustomText";
import CustomButtonsIconsWrapper from "../../HelperComponents/CustomButtonsIconsWrapper";
import CustomDivider from "../../HelperComponents/CustomDivider";
import { Link, useNavigate } from "react-router-dom";
import styles from "./PageBotom.module.css";
// import Logo from "../../../Assets/BESTWAY9 Logo.png";
import Logo from "../../../Assets/bw9Logo.png";
import pay1 from "../../../Assets/home/payment methods/Payment Method 1.png";
import pay2 from "../../../Assets/home/payment methods/Payment Method 2.png";
import pay3 from "../../../Assets/home/payment methods/Payment Method 3.png";
import pay4 from "../../../Assets/home/payment methods/Payment Method 4.png";
import pay5 from "../../../Assets/home/payment methods/Payment Method 5.png";
import pay6 from "../../../Assets/home/payment methods/Payment Method 6.png";
import pay7 from "../../../Assets/home/payment methods/Payment Method 7.png";
import followUs1 from "../../../Assets/home/Social Media/Facebook.png";
import followUs2 from "../../../Assets/home/Social Media/Instagram.png";
import followUs3 from "../../../Assets/home/Social Media/Telegram.png";
import followUs4 from "../../../Assets/home/Social Media/TwitterX.png";
import followUs5 from "../../../Assets/home/Social Media/WhatsApp.png";
import followUs6 from "../../../Assets/home/Social Media/YouTube.png";
import responsibleGameimg from "../../../Assets/home/ResponsibleGamingNew.png";
import Image1 from "../../../Assets/FooterProviders/1.png";
import Image2 from "../../../Assets/FooterProviders/2.png";
import Image3 from "../../../Assets/FooterProviders/3.png";
import Image4 from "../../../Assets/FooterProviders/4.png";
import Image5 from "../../../Assets/FooterProviders/5.png";
import Image6 from "../../../Assets/FooterProviders/6.png";
import Image7 from "../../../Assets/FooterProviders/7.png";
import Image8 from "../../../Assets/FooterProviders/8.png";
import Image9 from "../../../Assets/FooterProviders/9.png";
import Image10 from "../../../Assets/FooterProviders/10.png";
import Image11 from "../../../Assets/FooterProviders/11.png";
import Image12 from "../../../Assets/FooterProviders/12.png";
import Image13 from "../../../Assets/FooterProviders/13.png";
import Image14 from "../../../Assets/FooterProviders/14.png";
import Image15 from "../../../Assets/FooterProviders/15.png";
import Image16 from "../../../Assets/FooterProviders/16.png";
import Image17 from "../../../Assets/FooterProviders/17.png";
import Image18 from "../../../Assets/FooterProviders/18.png";
import Image19 from "../../../Assets/FooterProviders/19.png";
import Image20 from "../../../Assets/FooterProviders/20.png";
import Image21 from "../../../Assets/FooterProviders/21.png";
import { Image } from "antd";

const ProviderLinks = [
  {
    id: 1,
    icon: Image1,
  },
  {
    id: 2,
    icon: Image2,
  },
  {
    id: 3,
    icon: Image3,
  },
  {
    id: 4,
    icon: Image4,
  },
  {
    id: 5,
    icon: Image5,
  },
  {
    id: 6,
    icon: Image6,
  },
  {
    id: 7,
    icon: Image7,
  },
  {
    id: 8,
    icon: Image8,
  },
  {
    id: 9,
    icon: Image9,
  },

  {
    id: 10,
    icon: Image10,
  },
  {
    id: 11,
    icon: Image11,
  },
  {
    id: 12,
    icon: Image12,
  },
  {
    id: 13,
    icon: Image13,
  },
  {
    id: 14,
    icon: Image14,
  },
  {
    id: 15,
    icon: Image15,
  },
  {
    id: 16,
    icon: Image16,
  },
  {
    id: 17,
    icon: Image17,
  },
  {
    id: 18,
    icon: Image18,
  },
  {
    id: 19,
    icon: Image19,
  },
  {
    id: 20,
    icon: Image20,
  },
  {
    id: 21,
    icon: Image21,
  },
];

const PageBottom = () => {
  const navigate = useNavigate();
  const paymentMethodsImg = [
    { img: pay5, link: "https://www.gcash.com/" },
    { img: pay7, link: "https://www.maya.ph/" },
  ];
  const followUsImg = [
    { img: followUs1, link: "https://www.facebook.com/bw9official" },
    { img: followUs2, link: "https://www.instagram.com/bw9official/" },
    { img: followUs3, link: "https://t.me/BW9OFFICIAL" },
    // { img: followUs4, link: "https://twitter.com/" },
    { img: followUs5, link: "https://wa.me/qr/PGSYWFFQ3HNZA1" },
    // { img: followUs6, link: "https://www.youtube.com/" },
  ];

  const copmanyLink = [
    {
      id: 1,
      name: "About Us",
      link: "/about-us",
    },
    {
      id: 2,
      name: "Privacy Policy",
      link: "/privacy-policy",
    },
    // {
    //   id: 3,
    //   name: "Contact Us",
    //   link: "/support",
    // },
    // {
    //   id: 4,
    //   name: "Agent Program",
    //   link: "/affiliate-program",
    // },
    {
      id: 5,
      name: "Responsible Gambling",
      link: "/responsible-gaming",
    },
    {
      id: 6,
      name: "Terms and Conditions",
      link: "/terms-and-conditions",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Logo*/}
      {/* <div className={styles.logoContainer}>
            <img src={Logo} alt='logo' className="imgStyle"/>
            </div> */}
      <CustomDivider />
      <div className={styles.contentWrapper}>
        {/* <div className={styles.paySocialSubContainer}>
          <CustomText text="Link" styling={styles.productsTextStyling} />
          <div className={styles.productsorAboutDiv}>
            {abountUsLink.map((aboutLink, index) => (
              <div
                style={{ textDecoration: "none", cursor: "pointer" }}
                key={aboutLink?.id}
                onClick={() => navigate(`${aboutLink?.link}`)}
              >
                <CustomText
                  key={index}
                  text={aboutLink?.name}
                  styling={styles.productorAboutUsLinkStyling}
                />
              </div>
            ))}
          </div>
        </div> */}

        <div className={styles.paySocialSubContainer}>
          <CustomText text="Link" styling={styles.productsTextStyling} />
          <div className={styles.productsorAboutDiv}>
            {copmanyLink.map((aboutLink, index) => (
              <div
                style={{ textDecoration: "none", cursor: "pointer" }}
                key={aboutLink?.id}
                onClick={() => navigate(`${aboutLink?.link}`)}
              >
                <CustomText
                  key={index}
                  text={aboutLink?.name}
                  styling={styles.productorAboutUsLinkStyling}
                />
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            // justifyContent: "space-between",
            marginBottom: "20px",
            // marginRight: "20px",
          }}
        >
          <div className={styles.paySocialSubContainer}>
            <CustomText
              text="Payment Methods"
              styling={styles.paymentMethodsTitleStyling}
            />
            <CustomButtonsIconsWrapper
              arrayData={paymentMethodsImg}
              parentDivStyling={styles.payMethodsStyle}
              imageStyeling={styles.paymentMethodImg}
              imageDivContainer={styles.paymentIconContainer}
            />
          </div>

          <div className={styles.paySocialSubContainer}>
            <CustomText
              text="Follow Us"
              styling={styles.followUsTitleStyling}
            />
            <CustomButtonsIconsWrapper
              arrayData={followUsImg}
              parentDivStyling={styles.followUsStyle}
              imageStyeling={styles.followUsImg}
              imageDivContainer={styles.socialIconContainer}
            />
          </div>
        </div>
      </div>
      <CustomDivider />
      <div
        style={{
          paddingBottom: "10px",
          gap: "20px",
          margin: "20px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={styles.paySocialSubContainer}
      >
        <CustomText text="Our Partners" styling={styles.productsTextStyling} />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            margin: "0 10px",
            gap: "20px",
          }}
        >
          {ProviderLinks.map((item, index) => (
            <div key={item.id}>
              <img
                style={{ width: "40px", height: "30px" }}
                src={item.icon}
                alt={`${item.text} icon`}
              />
            </div>
          ))}
        </div>
      </div>

      <CustomDivider />
      <div
        style={{
          margin: "20px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className={styles.paySocialSubContainer}
      >
        <div className={styles.logoResponsibleSubContainer}>
          <CustomText
            text="Official License"
            styling={styles.productsTextStyling}
          />
          <div className={styles.responsibleImgStyling}>
            <Image
              preview={false}
              src={responsibleGameimg}
              alt="responsible gaming"
              className="imgStyle"
            />
          </div>
        </div>
        <CustomText
          text="Copyright © 2024 IEI Gaming All Rights Reserved"
          styling={styles.copyRight}
        />
      </div>

      {/* <div className={styles.logoResponsibleContainer}>
        <div className={styles.logoResponsibleSubContainer}>
          <div className={styles.logoContainer}>
            <img src={Logo} alt="logo" className="imgStyle" />
          </div>
          <div className={styles.aboutPara}>
            <p>
              BESTWAY9 : The New Generation Of Online Gaming in the Philippines
            </p>
          </div>
        </div>

        <div className={styles.logoResponsibleSubContainer}>
          <CustomText
            text="Responsible Gaming"
            styling={styles.productsTextStyling}
          />
          <div className={styles.responsibleImgStyling}>
            <Image
              preview={false}
              src={responsibleGameimg}
              alt="responsible gaming"
              className="imgStyle"
            />
          </div>
        </div>
      </div> */}
      {/* <div className={styles.aboutPara2}>
        <p>
          Established in 2020, BW9 quickly developed its brand and reputation as
          the market leader in the global online gaming industry in the
          Philippines. The brand was founded with the principles of trust and
          credibility at its core, defining the ethos for the company',s
          activities to this day. BESTWAY9 , has consistently demonstrated a
          clear focus on enriching your gaming experience. The BESTWAY9 proudly
          offers you a wide variety of online gaming brands, each providing its
          own unique, entertaining and exciting range of games, opportunities,
          prizes and much more.
        </p>
      </div> */}

      {/* <CustomDivider /> */}

      {/* <CustomDivider /> */}

      {/* <CustomText text="Copyright © 2024 IEI Gaming All Rights Reserved" styling={styles.copyRight} /> */}
    </div>
  );
};

export default PageBottom;
