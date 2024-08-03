import React from 'react';
import { Select } from 'antd';
import styles from './BettingRecord.module.css'; // Import CSS module

const { Option } = Select;

function handleChange(value) {
  console.log(`Selected: ${value}`);
}

function CustomSelection() {
  return (
    <div>
      <Select
        defaultValue="lucy"
        style={{ width: 120 }} // Use width style if needed
        onChange={handleChange}
        className={styles.customSelect}
      >
        <Option value="jack">1</Option>
        <Option value="lucy">2</Option>
        <Option value="Yiminghe">22</Option>
      </Select>
    </div>
  );
}

export default CustomSelection;
