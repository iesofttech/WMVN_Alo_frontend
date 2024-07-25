import { Typography } from "antd";
import React, { useEffect } from "react";
import styles from "./AboutUs.module.css";
import PageBottom from "../../PageBottom";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.itemsContainer}>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            padding: "0 20px",
          }}
        >
          <Typography.Text className={styles.headerStyle}>
            About BW9
          </Typography.Text>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            padding: "0 20px",
          }}
        >
          <p className={styles.detailedPara}>
            BW9 is driven by a clear ambition: to become the premier destination
            for quality, secure, and rewarding online entertainment. Players are
            our priority, and we strive to create lasting positive experiences.
            At BW9, you will encounter a constantly evolving platform supported
            by attentive support, fair gameplay, and swift, hassle-free
            transactions.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            padding: "0 20px",
          }}
        >
          <Typography.Text className={styles.headerStyle}>
            The BW9 Experience
          </Typography.Text>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            padding: "0 20px",
          }}
        >
          <p className={styles.detailedPara}>
            BW9 offers an extensive and ever-growing library of gaming options,
            ranging from classic games to the latest innovations in live casino,
            slots, table games, and sports betting. Whether you are a seasoned
            player or a newcomer, there is always something new to explore at
            BW9. Our focus is on what matters most to our players, adhering to
            these key principles:
            <ul>
              <li>Data and funds are kept ultra-protected.</li>
              <li>
                Gaming is made enjoyable with a smooth interface and
                personalized rewards.
              </li>
              <li>
                A dedicated support team is always available for assistance.
              </li>
            </ul>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            padding: "0 20px",
          }}
        >
          <Typography.Text className={styles.headerStyle}>
            Company Information
          </Typography.Text>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            padding: "0 20px",
          }}
        >
          <p className={styles.detailedPara}>
            BW9 is a registered trademark and business name owned by Wyn
            Ventures Inc. Licensed by PAGCOR (Philippine Amusement and Gaming
            Corporation), BW9 demonstrates a commitment to ethical business
            practices and industry compliance. Emphasizing responsible gaming,
            tools and resources are provided to promote healthy play habits.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            padding: "0 20px",
          }}
        >
          <Typography.Text className={styles.headerStyle}>
            Commitment to Responsible Gaming
          </Typography.Text>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            padding: "0 20px",
          }}
        >
          <p className={styles.detailedPara}>
            At BW9, responsible gaming is a top priority. Access and services
            are strictly prohibited for individuals under 21 years old. In
            alignment with compliance to Anti-Money Laundering (AML)
            regulations, BW9 adheres to the Anti-Money Laundering Act (Republic
            Act No. 9160), issued in May 2023.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            padding: "0 20px",
          }}
        >
          <Typography.Text className={styles.headerStyle}>
            Join the BW9 Community
          </Typography.Text>
        </div>

        <div
          style={{
            display: "flex",
            width: "100%",
            height: "auto",
            padding: "0 20px",
          }}
        >
          <p className={styles.detailedPara}>
            Founded in 2022, BW9 is a dynamic company established by seasoned
            industry experts and passionate gaming enthusiasts. The vision is to
            cultivate a community dedicated to ensuring player satisfaction,
            enjoyment, and safety. BW9 is committed to delivering a fun, secure,
            and safe gaming experience, supported by state-of-the-art technology
            and a dedicated team of experts.
          </p>
        </div>

        <PageBottom />
      </div>
    </div>
  );
};

export default AboutUs;
