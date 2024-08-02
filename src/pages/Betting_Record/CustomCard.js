import React from "react";
import { Card, Col, Row } from "antd";
import styles from "./BettingRecord.module.css";
import { CopyOutlined } from '@ant-design/icons';

function CustomCard() {
  return (
    <Card className={styles.card}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={12} className={styles.gutterRow}>
          <div className={styles.text}>
            <strong>Reference ID:</strong> 764382378943957480
            <CopyOutlined className={styles.icon} />
          </div>
        </Col>
        <Col span={12} className={styles.gutterRow}>
          <div className={styles.text}>
            <strong>Game Name:</strong> Game_Name
          </div>
        </Col>
        <Col span={12} className={styles.gutterRow}>
          <div className={styles.text}>
            <strong>Bet Time:</strong> 12:21:03 06/03/2023
          </div>
        </Col>
        <Col span={12} className={styles.gutterRow}>
          <div className={styles.text}>
            <strong>Bet Amount:</strong> đ 500
          </div>
        </Col>
        <Col span={12} className={styles.gutterRow}>
          <div className={styles.text}>
            <strong>Valid Bet:</strong> đ 500
          </div>
        </Col>
        <Col span={12} className={styles.gutterRow}>
          <div className={`${styles.text} ${styles.profitLoss}`}>
            <strong>Profit/Loss:</strong> -500
          </div>
        </Col>
      </Row>
    </Card>
  );
}

export default CustomCard;
