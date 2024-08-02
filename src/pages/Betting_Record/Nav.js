import React from "react";
import styles from "./BettingRecord.module.css"; // Import the CSS Module
import DateSelector from "./DateSelector"; // Adjust import according to your file structure
import { Button } from "antd"; // Importing Button from antd

function Nav() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navItem}>
        <div>Date</div>
        <DateSelector />
      </div>

      <div className={styles.navItem}>Providers</div>

      <div className={styles.navButtons}>
        <Button>Search</Button>
        <Button>Reset</Button>
      </div>
    </div>
  );
}

export default Nav;
