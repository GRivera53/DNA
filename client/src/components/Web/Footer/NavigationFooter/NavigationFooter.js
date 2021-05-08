import React from "react";
import { Row, Col, Icon } from "antd";
import { Link } from "react-router-dom";

import "./NavigationFooter.scss";

export default function NavigationFooter() {
  return (
    <Row className="navigation-footer">
      <Col>
        <h3>Navegación</h3>
      </Col>
      <Col md={12}>
        <RenderListLeft />
      </Col>
      <Col md={12}>
        <RenderListRight />
      </Col>
    </Row>
  );
}

function RenderListLeft() {
  return (
    <ul>
      <li>
        <a href="#">
          <Icon type="book" /> Registro de Informacion
        </a>
      </li>
      <li>
        <a href="#">
          <Icon type="code" /> Manejo de Clientes
        </a>
      </li>
      <li>
        <a href="#">
          <Icon type="database" /> Estudios Clinicos
        </a>
      </li>
      <li>
        <a href="#">
          <Icon type="right" /> Membresía para clientes frecuentes
        </a>
      </li>
    </ul>
  );
}

function RenderListRight() {
  return (
    <ul>
      <li>
        <a href="#">
          <Icon type="hdd" /> Reportes anuales/mensuales
        </a>
      </li>
      <li>
        <a href="#">
          <Icon type="appstore" /> Altas Clientes
        </a>
      </li>
      <li>
        <a href="#">
          <Icon type="user" /> Bajas Clientes
        </a>
      </li>
      <li>
        <a href="#">
          <Icon type="right" /> Consulta Clientes
        </a>
      </li>
    </ul>
  );
}
