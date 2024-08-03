import React from "react";
import styles from "./BettingRecord.module.css"; 
import DateSelector from "./DateSelector"; 
import { Button } from "antd"; 
import CustomSelection from "./CustomSelection";

function Nav() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navItem}>
        <div className={styles.navLabel}>Date</div>
        <DateSelector />
      </div>

      <div className={styles.navItem}>
        <div className={styles.navLabel}>Providers</div>
        <CustomSelection />
      </div>

      <div className={styles.navButtons}>
        <Button type="primary" className={styles.searchButton}>Search</Button>
        <Button className={styles.resetButton}>Reset</Button>
      </div>
    </div>
  );
}

export default Nav;
