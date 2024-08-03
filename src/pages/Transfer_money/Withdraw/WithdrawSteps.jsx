import React, { useState } from "react";
import styles from "./WithdrawStep.module.css";
import Gcash from "../../../assets/images/withdraw/GCash.png";
import AddPaymentMethod from "../../../assets/images/withdraw/AddPaymentMethod.png";
import Selected from "../../../assets/images/withdraw/Selected.png";

const WithdrawSteps = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [amount, setAmount] = useState("");
  const [amountError, setAmountError] = useState("");

  const handleActive = (index) => {
    setActiveIndex(index);
  };

  const handleWithdraw = () => {
    if (amount === "") {
      setAmountError("Please Enter Amount");
    } else {
      setAmountError("");
    
      // console.log("Withdraw", amount, activeIndex);
    }
  };

  return (
    <div className={styles.withdrawStepsWrapper}>
      <div className={styles.outerDiv}>
        <div className={styles.innerDiv}>
          <span className={styles.innerText}>
            Step 1: Input number of withdrawal points
          </span>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputNumberHeading}>
            Number of withdrawal points
          </div>
          <div className={styles["input-container"]}>
            <span className={styles.amountSymbol}>đ</span>
            <input
              type="number"
              className={styles.input1}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          {amountError && (
            <div className={styles.enterAmountText}>{amountError}</div>
          )}

          <div className={styles.minMaxAmountContainer}>
            <span>
              <span style={{ color: "#8DB4D8" }}>Min:</span> 150
            </span>
            <span>
              <span style={{ color: "#8DB4D8" }}>Max:</span> 100,000
            </span>
          </div>
        </div>
      </div>
      <div className={styles.outerDiv}>
        <div className={styles.innerDiv} style={{ width: "245px" }}>
          <span className={styles.innerText}>
            Step 2: Choose Payment Account
          </span>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputNumberHeading}>Payment Account</div>
          <div className={styles.choosePayment}>
            <div
              className={`${styles.innerchoosePayment} ${
                activeIndex === 0 ? styles.active : ""
              }`}
              onClick={() => handleActive(0)}
              style={{ marginRight: "5px" }}
            >
              {activeIndex === 0 && (
                <img src={Selected} alt="GCase" className={styles.checkImg} />
              )}
              <div className={styles.paymentMethodConteiner}>
                <span>
                  <img src={Gcash} alt="GCase" className={styles.icon} />
                </span>
                <span className={styles.paymentMethod}>GCase</span>
              </div>

              <span className={styles.paymentName}>Holder_Name_Goes_Here</span>
              <span className={styles.paymentNumber}>4563457345873845</span>
            </div>
            <div
              className={`${styles.innerAddpayment} ${
                activeIndex === 1 ? styles.active : ""
              }`}
              onClick={() => handleActive(1)}
            >
              {activeIndex === 1 && (
                <img src={Selected} alt="GCase" className={styles.checkImg} />
              )}
              <img
                src={AddPaymentMethod}
                alt="AddPaymentMethod"
                className={styles.AddPaymentMethodImg}
              />
              <span className={styles.paymentAdd}>Add Payment Method</span>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.buttonWithdraw} onClick={handleWithdraw}>
        Withdraw
      </button>
    </div>
  );
};

export default WithdrawSteps;
