import React from "react";
import { Row, Col } from "antd";

import "./MainBanner.scss";

export default function MainBanner() {
  return (
    <div className="main-banner">
      <div className="main-banner__dark" />
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <h2>
            DNA Diagnóstica <br /> Sistema de Beneficios
          </h2>
          <h3>
            Eres un cliente frecuente? pasa por tu tarjeta de beneficios
            <br />
            Lo mejor en ahorro y forma de invertir tu dinero
          </h3>
        </Col>
        <Col lg={4} />
      </Row>
    </div>
  );
}
