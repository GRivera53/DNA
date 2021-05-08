import React from "react";
import { Row, Col, Card, Avatar } from "antd";
import AvatarPersona from "../../../assets/img/jpg/avatar-persona.jpg";

import "./ReviewsCourses.scss";

export default function ReviewsCourses() {
  return (
    <Row className="reviews-courses">
      <Row>
        <Col lg={4} />
        <Col lg={16} className="reviews-courses__title">
          <h2>
            Forma parte de las 100+ personas que se estan uniendo a los beneficios que ofrece DNA, adquiriendo su membresía y usandola en cada visita.
          </h2>
        </Col>
        <Col lg={4} />
      </Row>
      <Row>
        <Col lg={4} />
        <Col lg={16}>
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="Persona 1 "
                subtitle="Cliente Sucursal Revolución"
                avatar={AvatarPersona}
                review="Excelente Servicio."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Persona 2"
                subtitle="Cliente Sucursal Gomez"
                avatar={AvatarPersona}
                review="Excelente Servicio."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Persona 3"
                subtitle="Cliente Sucursal Senderos"
                avatar={AvatarPersona}
                review="Excelente Servicio."
              />
            </Col>
          </Row>
          <Row className="row-cards">
            <Col md={8}>
              <CardReview
                name="Persona 4"
                subtitle="Cliente surusal Viñedos"
                avatar={AvatarPersona}
                review="Excelente Servicio."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Persona 5"
                subtitle="Cliente sucursal Matamoros"
                avatar={AvatarPersona}
                review="Excelente Servicio."
              />
            </Col>
            <Col md={8}>
              <CardReview
                name="Persona 6"
                subtitle="Cliente sucursal centro"
                avatar={AvatarPersona}
                review="Excelente Servicio."
              />
            </Col>
          </Row>
        </Col>
        <Col lg={4} />
      </Row>
    </Row>
  );
}

function CardReview(props) {
  const { name, subtitle, avatar, review } = props;
  const { Meta } = Card;

  return (
    <Card className="reviews-courses__card">
      <p>{review}</p>
      <Meta
        avatar={<Avatar src={avatar} />}
        title={name}
        description={subtitle}
      />
    </Card>
  );
}
