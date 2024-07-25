import React, { useEffect } from "react";
import { Typography } from "antd";
import styles from "./PrivacyPolice.module.css";
import PageBottom from "../../PageBottom";

const PrivacyPolicy = () => {
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
            Privacy Policy Declaration
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
            BW9 is committed to protecting your privacy and securing any
            personal information you provide. This policy outlines our practices
            regarding information protection and the steps we take to ensure
            your personal data's security. It describes how we collect, use, and
            handle your personal information in accordance with our guidelines
            under the Data Privacy Act of 2012.
          </p>
          <p className={styles.detailedPara}>
            Please be aware that privacy protection laws in other countries may
            differ from those in the Philippines. While we strive to align our
            policies with the best practices in data security and protection, we
            cannot guarantee full compliance with foreign legal requirements.
          </p>
          <p className={styles.detailedPara}>
            For queries or more details about your personal information or
            rights under this Privacy Policy, please contact us at
            privacy@BW9.com.
          </p>
        </div>

        <div
          style={{
            width: "100%",
            height: "auto",
            padding: "0 20px",
          }}
        >
          <Typography.Text className={styles.headerStyle}>
            Extent of Commitment and Application
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
            Our Privacy Statement and Data Privacy Policy encompass all personal
            information, irrespective of form, processed either manually or
            through automated systems. By utilizing services provided by BW9 or
            by registering and logging in, you consent to our collection, usage,
            disclosure, retention, and protection of your personal information
            according to these terms.
          </p>
          <p className={styles.detailedPara}>
            If you are providing personal or sensitive information on behalf of
            another person, you must ensure you are authorized to do so and
            permit us to utilize that information in line with this Privacy
            Policy. If you choose not to provide your personal information, we
            may be unable to deliver or inform you about the requested products
            and services.
          </p>
          <p className={styles.detailedPara}>
            <span className={styles.textHieghlight}>Note:</span> BW9's services
            are not designed for:
            <ul>
              <li>Individuals under the age of 21.</li>
              <li>
                Philippine government officials, PAGCOR employees, BW9 staff,
                law enforcement, or military personnel, including their
                immediate family members.
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
            Entitlements and User Preferences
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
            Under the Data Privacy Act, BW9 recognizes and upholds your
            following rights:
            <ol
              type="a"
              style={{
                gap: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <li>
                <span className={styles.textHieghlight}>
                  Right to be Informed:
                </span>{" "}
                You have the right to be informed whether your personal
                information is being processed, including detailed information
                about its nature and extent.
              </li>
              <li>
                <span className={styles.textHieghlight}>Right to Access:</span>{" "}
                Before your personal information is entered into our processing
                system, you are entitled to receive detailed information about:
                <ul
                  style={{
                    gap: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <li>
                    The nature of the personal information being collected.
                  </li>
                  <li>The purpose and extent of its processing.</li>
                  <li>
                    The entities to which your personal information may be
                    disclosed.
                  </li>
                  <li>The methodology used in processing.</li>
                  <li>
                    The identity and contact details of the personal information
                    controller.
                  </li>
                  <li>The storage duration of your personal information.</li>
                  <li>
                    Your rights regarding your personal information, including
                    your right to access and correct data and to lodge
                    complaints with the National Privacy Commission (NPC).
                  </li>
                </ul>
              </li>

              <li>
                <span className={styles.textHieghlight}>
                  Right to Reasonable Access:
                </span>{" "}
                Upon request, you have the right to access and obtain:
                <ul
                  style={{
                    gap: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <li>A copy of your processed personal information.</li>
                  <li>
                    The sources from which your personal information was
                    obtained.
                  </li>
                  <li>
                    The names and addresses of recipients of your personal
                    information.
                  </li>
                  <li>The manner by which your data was processed.</li>
                  <li>
                    The reasons for the disclosure of your personal information.
                  </li>
                  <li>
                    Details of the automated processes used, if any, and their
                    significance to you as the data subject.
                  </li>
                  <li>
                    The date of the last modification to your personal
                    information.
                  </li>
                  <li>
                    The contact information of the personal information
                    controller.
                  </li>
                </ul>
              </li>

              <li>
                <span className={styles.textHieghlight}>
                  Right to Dispute and Correct:
                </span>{" "}
                You have the right to dispute inaccuracies or errors in your
                personal information and request immediate correction. If
                corrected, the personal information controller must provide
                access to both the new and the retracted information, ensuring
                all recipients are informed of the changes.
              </li>
              <li>
                <span className={styles.textHieghlight}>
                  Right to Suspension and Withdrawal:
                </span>{" "}
                You have the right to suspend, withdraw, or order the blocking,
                removal, or destruction of your personal information if it is
                found to be outdated, false, unlawfully obtained, irrelevant, or
                no longer necessary for the purposes for which it was collected.
                The personal information controller should notify any third
                parties who have previously received such data.
                <p>
                  In cases where you believe your rights under the Data Privacy
                  Act have been violated, you possess the right to lodge a
                  complaint and seek compensation for any damages incurred.
                </p>
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
            Information Collection Practices
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
            We collect various types of personal data, which are essential to
            providing you with tailored services and enhancing your experience
            on our website. The personal data we may collect, use, store, and
            transfer have been categorized as follows:
            <ul
              style={{
                gap: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <li>
                <span className={styles.textHieghlight}>Identity Data:</span>{" "}
                This includes details such as your first name, maiden name, last
                name, username, or similar identifiers, in addition to your date
                of birth and gender, helping us to personalize your experience
                and interactions with BW9.
              </li>
              <li>
                <span className={styles.textHieghlight}>Contact Data:</span> We
                gather information like your billing address, delivery address,
                email address, and telephone numbers to communicate with you
                effectively regarding your account, transactions, and our
                services.
              </li>
              <li>
                <span className={styles.textHieghlight}>Financial Data:</span>{" "}
                Information such as your bank account details and payment card
                particulars are collected to process transactions securely and
                efficiently. services.
              </li>
              <li>
                <span className={styles.textHieghlight}>Transaction Data:</span>{" "}
                We keep records of details concerning payments to and from you,
                along with other particulars of products and services you have
                engaged with through our platform.
              </li>
              <li>
                <span className={styles.textHieghlight}>Technical Data:</span>{" "}
                This encompasses data like your Internet Protocol (IP) address,
                device ID, login data, browser type and version, time zone
                setting, browser plug-in types and versions, operating system,
                and other technologies on the devices you use to access the BW9
                website.
              </li>
              <li>
                <span className={styles.textHieghlight}>Profile Data: </span> We
                compile information related to your account such as username and
                password, your purchase history, your interests, preferences,
                feedback, and survey responses to better understand your needs
                and preferences.
              </li>
              <li>
                <span className={styles.textHieghlight}>Usage Data: </span>{" "}
                Information about how you use our website, products, and
                services helps us to improve our platform and deliver a more
                personalized user experience.
              </li>
              <li>
                <span className={styles.textHieghlight}>
                  Marketing and Communications Data:{" "}
                </span>{" "}
                This includes your preferences in receiving marketing material
                from us and our third parties, as well as your communication
                preferences, enabling us to provide you with information about
                offers and services that might interest you.
              </li>
            </ul>
            <p>
              Additionally, we collect, use, and share Aggregated Data such as
              statistical or demographic information for various purposes. While
              Aggregated Data may be derived from your personal data, it is not
              considered personal data legally as it does not directly or
              indirectly reveal your identity. However, if we combine or connect
              Aggregated Data with your personal data so that it can directly or
              indirectly identify you, we will treat the combined data as
              personal data and handle it in accordance with this privacy
              policy.
            </p>
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
            Data Acquisition Methods
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
            We collect your personal data through a variety of methods to ensure
            the efficiency and security of our services. These methods include:
            <ol
              type="a"
              style={{
                gap: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <li>
                <span className={styles.textHieghlight}>
                  Direct Interactions:
                </span>{" "}
                Your personal data is acquired when you engage with our
                services, such as signing up, making transactions, or contacting
                us for support.
              </li>
              <li>
                <span className={styles.textHieghlight}>
                  Automated Technologies:
                </span>
                We employ technologies like cookies to gather data during your
                interactions with our website, which helps in enhancing your
                user experience and service personalization.
              </li>
              <li>
                <span className={styles.textHieghlight}>
                  Third Parties and Publicly Available Sources:
                </span>{" "}
                We may also receive your personal data from external sources,
                including but not limited to, partner entities, financial
                institutions, and public databases, ensuring that such data
                acquisition is in compliance with applicable laws and
                regulations.
              </li>
            </ol>
            <p>
              By engaging with our services, you consent to the collection of
              your data through these methods, underpinning our commitment to
              providing you with a secure and personalized service experience.
            </p>
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
            Preference Management and Withdrawal Rights
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
            As a valued user of BW9, you may be presented with communications
            pertaining to new promotions, services, or pertinent information
            that could be of interest to you. Should you prefer not to receive
            such updates, you are empowered to modify your communication
            preferences at any moment. This can be achieved effortlessly by
            utilizing the unsubscribe option provided within the footer of every
            email we dispatch.
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
            Data Disclosure Practices
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
            At BW9, the sharing of your personal data is conducted with the
            utmost respect for your privacy and autonomy. Your personal data is
            shared only upon receiving your explicit consent or under necessary
            conditions as outlined below
            <ol
              type="a"
              style={{
                gap: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <li>
                <span className={styles.textHieghlight}>
                  Compliance and Legal Obligations:
                </span>{" "}
                BW9 is committed to upholding the integrity of our services. To
                this end, we may share your personal data with third-party
                entities such as Anti-Money Laundering Authorities, regulatory
                bodies like financial oversight commissions, and other pertinent
                institutions. This action is taken strictly for purposes such as
                anti-money laundering, fraud detection, and regulatory control,
                ensuring these entities adhere to our stringent data processing
                and security standards.
              </li>
              <li>
                <span className={styles.textHieghlight}>
                  Collaborative Partnerships:
                </span>
                We may also disclose your data to trusted third parties that
                have a direct relationship with BW9, such as parent companies,
                subsidiaries, or our regulatory bodies, particularly if there
                are reasonable indicators of discrepancies or issues within your
                account activity that warrant investigation.
              </li>
              <li>
                <span className={styles.textHieghlight}>
                  Operational Support:
                </span>{" "}
                For the seamless provision of our services, your information
                might be shared with cloud computing services, data storage
                facilities, payment processors, financial institutions, and
                other essential service providers that contribute to the
                operational functionalities of BW9.
              </li>
              <li>
                <span className={styles.textHieghlight}>
                  Sporting Integrity:
                </span>
                In line with our commitment to maintain the integrity of sports
                and betting activities, we reserve the right to share relevant
                personal data, including betting activities and patterns, with
                sports organizations and integrity units to assist in the
                investigation of fraudulent activities, match-fixing, or other
                forms of corruption.
              </li>
              <li>
                <span className={styles.textHieghlight}>
                  Security Assurance:
                </span>
                We pledge to implement all reasonable measures to ensure the
                secure processing of your personal data. This includes adherence
                to best practices in data security and compliance with legal and
                regulatory standards when sharing your information with external
                parties.
              </li>
            </ol>
            <p>
              In all instances of data sharing, BW9 is dedicated to ensuring
              that your personal information remains protected in accordance
              with our privacy policy and the prevailing data protection
              regulations. We encourage you to review the privacy policies of
              our partners and third-party providers to stay informed about how
              your data is handled and protected.
            </p>
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
            Data Retention and Security Measures
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
            BW9 ensures that your personal data is:
            <ul
              style={{
                gap: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <li>
                Handled in alignment with your personal rights and privacy
                expectations.
              </li>
              <li>
                Processed legitimately and ethically, with clear purposes and
                intentions.
              </li>
              <li>
                Collected solely for specified, explicit, and legitimate
                purposes and not further processed in any manner incompatible
                with those purposes.
              </li>
              <li>
                Accurate, pertinent, and limited to what is necessary in
                relation to the purposes for which they are processed.
              </li>
              <li>
                Stored securely, safeguarding against unauthorized or unlawful
                processing and against accidental loss, destruction, or damage.
              </li>
            </ul>
            <p>
              BW9 is committed to implementing suitable technical and
              organizational measures to ensure the secure processing of your
              personal data. This commitment extends to the retention period of
              your information, which is dictated by:
            </p>
            <ul
              style={{
                gap: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <li>Legal obligations under applicable laws.</li>
              <li>The necessity to protect against potential legal claims.</li>
              <li>
                Adherence to our contractual obligations and rights regarding
                the information.
              </li>
              <li>
                Evaluation of our legitimate interests, which are carefully
                balanced with your rights.
              </li>
              <li>
                Adherence to standards and guidelines issued by relevant data
                protection authorities.
              </li>
            </ul>
            <p>
              Sensitive information, such as payment details and personal
              identifiers, is encrypted within our databases. This ensures that
              only authorized applications and personnel can access this
              information, under strict security measures.
            </p>
            <p>
              However, it's important to recognize that while we enforce high
              standards of security for information under our control, the
              security of data transmitted over the internet or through other
              channels cannot always be guaranteed. Therefore, we cannot be held
              responsible for the security of information sent to us through
              unsecured methods.
            </p>
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
            Amendments to This Privacy Declaration
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
            Our Privacy Policy may change over time to reflect changes in our
            practices or regulatory changes. We will notify you of any
            significant changes and obtain your consent where necessary.
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
            User Responsibilities
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
            By using BW9, you agree to provide accurate, complete, and
            up-to-date information. You must inform us of any changes to ensure
            your data remains correct and current.
            <p>
              If you breach your obligations or provide false or incomplete
              information, we reserve the right to suspend or terminate your
              account without notice.
            </p>
            <p>
              By engaging with BW9's services, you acknowledge and agree to the
              terms set out in this Privacy Policy.
            </p>
          </p>
        </div>

        <PageBottom />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
