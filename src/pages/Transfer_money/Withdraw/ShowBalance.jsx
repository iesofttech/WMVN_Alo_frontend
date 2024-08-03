import React from "react";
import styles from "./ShowBalance.module.css";
import Wallet from "../../../assets/images/withdraw/Wallet.png";

const ShowBalance = () => {
  return (
    <>
      <div className={styles.balanceUpperContainer}>
        <div className={styles.balanceContainer}>
          <div>
            <span>Balance:</span>
            <img src={Wallet} alt="Wallet" className={styles.icon} />
            <span>300,000</span>
          </div>
        </div>
        <div className={styles.requirementContainer}>
          <span className={styles.requirementText}>
            Withdrawal turnover requirements
          </span>
          <span className={styles.errorText}>
            Please complete the required turnover for withdrawal
          </span>
        </div>
        <div className={styles.turnoverContainer}>
          <div className={styles.turnoverText}>
            <span className={styles.trunover}>Total trunover</span>
            <span className={styles.remainingTrunover}>Remaining trunover</span>
          </div>
          <div className={styles.trunoverNumberContainer}>
            <span className={styles.trunoverNumber}>1,544,54</span>
            <span className={styles.remainingTrunoverNumber}>7,544</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowBalance;
