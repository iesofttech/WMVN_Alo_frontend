import React, { useEffect } from "react";
import { Typography } from "antd";
import styles from "./ResponsibleGaming.module.css";
import PageBottom from "../../PageBottom";

const ResponsibleGaming = () => {
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
            Responsible Gaming at BW9
          </Typography.Text>
        </div>

        <div
          style={{
            width: "100%",
            height: "auto",
            padding: "0 20px",
          }}
        >
          <p className={styles.detailedPara}>
            BW9 believes in promoting gaming as a responsible and enjoyable form
            of entertainment. We understand that shared responsibility between
            the platform, players, and other stakeholders is crucial for
            ensuring informed gaming decisions and positive experiences. Our
            primary objective is to provide a fair and secure environment while
            safeguarding our players from any potential negative impacts.
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
            Our Commitment
          </Typography.Text>
        </div>

        <div
          style={{
            width: "100%",
            height: "auto",
            padding: "0 20px",
          }}
        >
          <p className={styles.detailedPara}>
            At BW9, we are dedicated to responsible gaming initiatives. Our
            comprehensive program surpasses industry standards, focusing on:
            <ul>
              <li>
                <span className={styles.textHieghlight}>
                  Supporting those seeking assistance:
                </span>{" "}
                We help players who need additional support.
              </li>
              <li>
                <span className={styles.textHieghlight}>
                  Staff training and awareness:
                </span>{" "}
                Our team is trained to recognize and assist players who may be
                experiencing difficulties.
              </li>
              <li>
                <span className={styles.textHieghlight}>
                  Fostering a responsible gaming culture:
                </span>{" "}
                We aim to normalize responsible gaming practices and make it
                easy for players to get help if needed.
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
            Partnerships for Support
          </Typography.Text>
        </div>

        <div
          style={{
            width: "100%",
            height: "auto",
            padding: "0 20px",
          }}
        >
          <p className={styles.detailedPara}>
            To offer the best possible resources, we collaborate with
            professional support organizations specializing in gambling
            concerns. [Include the names and contact information of support
            resources in your region].
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
            Understanding Gambling Addiction
          </Typography.Text>
        </div>

        <div
          style={{
            width: "100%",
            height: "auto",
            padding: "0 20px",
          }}
        >
          <p className={styles.detailedPara}>
            While most players enjoy gambling responsibly, in some cases, gaming
            can become problematic. Gambling addiction is a recognized disorder
            that can disrupt an individual's life in multiple ways. Here are
            some signs to be aware of:
            <ul>
              <li>Preoccupation with gambling</li>
              <li>A need to wager increasing amounts of money</li>
              <li>Difficulty controlling or stopping gambling</li>
              <li>Trying to recoup losses through more gambling</li>
              <li>
                Negative impacts on personal and professional life due to
                gambling
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
            Underage Gambling
          </Typography.Text>
        </div>

        <div
          style={{
            width: "100%",
            height: "auto",
            padding: "0 20px",
          }}
        >
          <p className={styles.detailedPara}>
            BW9 strictly prohibits underage gambling. To play on our platform,
            you must be 21 years of age or older. We employ robust age
            verification systems and take all necessary measures to prevent
            access by minors. Gambling can be particularly harmful to
            individuals under the legal age, exacerbating the risks mentioned
            above.
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
            Where to Get Help
          </Typography.Text>
        </div>

        <div
          style={{
            width: "100%",
            height: "auto",
            padding: "0 20px",
          }}
        >
          <p className={styles.detailedPara}>
            If you or someone you know is struggling with a gambling problem,
            please reach out to the following resources:
            <h1 style={{ color: "#FFFFFF", fontSize: "20px" }}>
              BW9 Customer Support
            </h1>
            <ul>
              <li>
                <span className={styles.textHieghlight}>Email </span>
              </li>
              <li>
                <span className={styles.textHieghlight}>Costumer Service </span>
              </li>
              <li>
                <span className={styles.textHieghlight}>Hotline </span>
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
            Local Support Organizations
          </Typography.Text>
        </div>

        <div
          style={{
            width: "100%",
            height: "auto",
            padding: "0 20px",
          }}
        >
          <p className={styles.detailedPara}>
            <h1 style={{ color: "#FFFFFF", fontSize: "20px" }}>
              Family Wellness Center Foundation, Inc.
            </h1>
            <ul
              style={{ gap: "10px", display: "flex", flexDirection: "column" }}
            >
              <li>
                Address: U-704 Pryce Center, 1179 Chino Roces Ave. cor. Bagtikan
                St., San Antonio, Makati, Metro Manila, Philippines
              </li>
              <li>Phone: 897-8577, 0917-887-0288</li>
              <li>Website: http://familywellnesscenter.com.ph/</li>
            </ul>
          </p>

          <p className={styles.detailedPara}>
            <h1 style={{ color: "#FFFFFF", fontSize: "20px" }}>
              The New Beginnings Foundation Inc.
            </h1>
            <ul
              style={{ gap: "10px", display: "flex", flexDirection: "column" }}
            >
              <li>
                Address: Cristina Condominium, Makati, Metro Manila, Philippines
              </li>
              <li>Phone: (02) 839-1828</li>
              <li>Website: http://drugrehabphilippines.com/</li>
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
            National Helplines
          </Typography.Text>
        </div>

        <div
          style={{
            width: "100%",
            height: "auto",
            padding: "0 20px",
          }}
        >
          <p className={styles.detailedPara}>
            <h1 style={{ color: "#FFFFFF", fontSize: "20px" }}>
              Philippines-Specific Helplines:
            </h1>
          </p>

          <p className={styles.detailedPara}>
            <ul
              style={{ gap: "10px", display: "flex", flexDirection: "column" }}
            >
              <li>
                <span className={styles.textHieghlight}>
                  NCMH Crisis Hotline:
                </span>{" "}
                Supports a wide range of mental health issues, including
                gambling addiction. (02) 8989-USAP (8727) or 0917 899 USAP
                (8727)
              </li>
              <li>
                <span className={styles.textHieghlight}>
                  Hopeline Philippines:
                </span>{" "}
                Suicide prevention and crisis support hotline. (02) 8804-4673;
                0917-558-4673; and 2919 (toll-free number for all Globe and TM
                subscribers)
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
            Self-Exclusion Programs
          </Typography.Text>
        </div>

        <div
          style={{
            width: "100%",
            height: "auto",
            padding: "0 20px",
          }}
        >
          <p className={styles.detailedPara}>
            BW9 understands that sometimes, players may feel the need to take a
            break from gambling. Our self-exclusion program is designed to
            support those decisions by allowing players to voluntarily restrict
            their access to our platform for a chosen period.
            <h1 style={{ color: "#FFFFFF", fontSize: "20px" }}>
              Details and Procedures
            </h1>
            <ol
              style={{ gap: "10px", display: "flex", flexDirection: "column" }}
            >
              <li>
                <span className={styles.textHieghlight}>
                  Initiating Self-Exclusion:
                </span>{" "}
                To begin the process, contact BW9 Customer Support [provide
                email/phone number]. Our representatives will provide you with
                the necessary information and forms.
              </li>
              <li>
                <span className={styles.textHieghlight}>
                  Choosing Your Exclusion Period:
                </span>{" "}
                You can select from the following exclusion periods:
                <ul
                  style={{
                    gap: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <li>6 months</li>
                  <li>1 year</li>
                  <li>5 years</li>
                </ul>
              </li>
              <li>
                <span className={styles.textHieghlight}>
                  Account Restriction:
                </span>{" "}
                Once your self-exclusion request is processed, your BW9 account
                will be restricted. During this period, you will not be able to:
                <ul
                  style={{
                    gap: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <li>Place bets or play any games</li>
                  <li>Deposit funds</li>
                  <li>Withdraw funds</li>
                  <li>Receive promotional offers</li>
                </ul>
              </li>
              <li>
                <span className={styles.textHieghlight}>
                  Reinstatement (if applicable):
                </span>{" "}
                <ul
                  style={{
                    gap: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <li>
                    For 6-month exclusions, your account will be automatically
                    reinstated after the period ends.
                  </li>
                  <li>
                    For 1-year and 5-year exclusions, you may request
                    reinstatement. Contact Customer Support to start this
                    process.
                  </li>
                </ul>
              </li>
            </ol>
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
            IMPORTANT NOTES
          </Typography.Text>
        </div>

        <div
          style={{
            width: "100%",
            height: "auto",
            padding: "0 20px",
          }}
        >
          <p className={styles.detailedPara}>
            <ul
              style={{ gap: "10px", display: "flex", flexDirection: "column" }}
            >
              <li>
                Self-exclusion is meant to be a helpful tool. We strongly advise
                against attempting to circumvent your exclusion.
              </li>
              <li>
                During your exclusion period, we recommend seeking support from
                the resources listed in the "Where to Get Help" section.
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
            Tips for Responsible Play
          </Typography.Text>
        </div>

        <div
          style={{
            width: "100%",
            height: "auto",
            padding: "0 20px",
          }}
        >
          <p className={styles.detailedPara}>
            <ul
              style={{ gap: "10px", display: "flex", flexDirection: "column" }}
            >
              <li>
                <span className={styles.textHieghlight}>Set limits:</span>{" "}
                Establish a budget and stick to it.
              </li>
              <li>
                <span className={styles.textHieghlight}>
                  View gambling as entertainment:
                </span>{" "}
                Don't consider it a way to make money.
              </li>
              <li>
                <span className={styles.textHieghlight}>
                  Take regular breaks:
                </span>{" "}
                Step away from the games frequently.
              </li>
              <li>
                <span className={styles.textHieghlight}>
                  Avoid chasing losses:
                </span>{" "}
                Don't try to win back what you've lost.
              </li>
              <li>
                <span className={styles.textHieghlight}>
                  Seek help if needed:
                </span>{" "}
                Don't hesitate to reach out to support resources.
              </li>
            </ul>
          </p>
        </div>

        <div
          style={{
            width: "100%",
            height: "auto",
            padding: "0 20px",
          }}
        >
          <p className={styles.textHieghlight}>
            BW9 is dedicated to creating a safe, entertaining, and responsible
            gaming environment for all players. Please gamble responsibly.
          </p>
        </div>

        <PageBottom />
      </div>
    </div>
  );
};

export default ResponsibleGaming;
