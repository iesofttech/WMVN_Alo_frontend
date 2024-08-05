import React from "react";
import { Card, Col, Row } from "antd";
import styles from "./BettingRecord.module.css";
import { CopyOutlined } from "@ant-design/icons";

function CustomCard() {
  return (
    <Card className={styles.card} bordered={false}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={12} className={styles.gutterRow}>
          <div className={styles.text}>
            <strong>Reference ID:</strong>
            <div className={styles.textContent}>764382378943957480</div>
            <CopyOutlined className={styles.icon} />
          </div>
        </Col>
        <Col span={12} className={styles.gutterRow}>
          <div className={styles.text}>
            <strong>Game Name:</strong>
            <div className={styles.textContent}>Game_Name</div>
          </div>
        </Col>
        <Col span={12} className={styles.gutterRow}>
          <div className={styles.text}>
            <strong>Bet Time:</strong>
            <div className={styles.textContent}>12:21:03 06/03/2023</div>
          </div>
        </Col>
        <Col span={12} className={styles.gutterRow}>
          <div className={styles.text}>
            <strong>Bet Amount:</strong>
            <div className={styles.textContent}>đ 500</div>
          </div>
        </Col>
        <Col span={12} className={styles.gutterRow}>
          <div className={styles.text}>
            <strong>Valid Bet:</strong>
            <div className={styles.textContent}>đ 500</div>
          </div>
        </Col>
        <Col span={12} className={styles.gutterRow}>
          <div className={`${styles.text} ${styles.profitLoss}`}>
            <strong>Profit/Loss:</strong>
            <div className={styles.textContent}>-500</div>
          </div>
        </Col>
      </Row>
    </Card>
  );
}

export default CustomCard;
