import React from "react";
import { DatePicker, Space } from "antd";
import styles from "./BettingRecord.module.css"; // Import CSS module

const { RangePicker } = DatePicker;

const onOk = (value) => {
  console.log("onOk: ", value);
};

function DateSelector() {
  return (
    <div className={styles.dateSelectorContainer}>
      <Space size={1}>
        <RangePicker
          className={styles.customRangePicker}
          format="DD/MM"
          onChange={(value, dateString) => {
            console.log("Selected Time: ", value);
            console.log("Formatted Selected Time: ", dateString);
          }}
          onOk={onOk}
        />
      </Space>
    </div>
  );
}

export default DateSelector;
