import React from "react";

import Nav from "./Nav";
import CustomCard from "./CustomCard";
import styles from "./BettingRecord.module.css";

const BettingRecord = () => {
  return (
    <div className={styles.container}>
      <Nav />
      <CustomCard />
    </div>
  );
};

export default BettingRecord;
