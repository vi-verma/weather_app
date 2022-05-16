import { Card, Col, Row } from "antd";
import React from "react";
import { EnvironmentOutlined } from "@ant-design/icons";
import styles from "./HistoryCard.module.css";

export const HistoryCard = ({size}) => {
  const cardSize = {
    small: '25%',
    medium:"50%",
    large:"100%"
};

  return (
    <div style={{width: cardSize.size|| cardSize.large}}>
      <Card className={styles.historyCard}>
        <Row className={styles.historyHeader}>
          <Col span={18}>
            <EnvironmentOutlined />
            City Name
          </Col>
          <Col span={6}>{new Date().toDateString()}</Col>
        </Row>
        <Row>{"Monday"}</Row>
        <Row>
          <Col span={12}>"cloud image</Col>
          <Col className={styles.temp} span={6}>
            <p>37deg</p>
          </Col>
          <Col span={6}>
            <p>
              <span>min: 34deg</span>
              <span>max: 40 </span>
            </p>
            <p>wind: 6km/h</p>
            <p>Humid: 72%</p>
          </Col>
        </Row>
      </Card>
      {/* <Card className={styles.historyCard}>
        <Row>
          <Col span={18}>
            <EnvironmentOutlined />
            City Name
          </Col>
          <Col span={6}>{"new Date()"}</Col>
        </Row>
        <Row>{"Monday"}</Row>
        <Row>
          <Col span={12}>"cloud image</Col>
          <Col span={6}>
            <p>37deg</p>
          </Col>
          <Col span={6}>
            <p>
              <span>min: 34deg</span>
              <span>max: 40 </span>
            </p>
            <p>wind: 6km/h</p>
            <p>Humid: 72%</p>
          </Col>
        </Row>
      </Card> */}
    </div>
  );
};
