import React from "react";
import { Row, Col, Card, Icon } from "antd";

import "./HowMyCoursesWork.scss";

export default function HowMyCoursesWork() {
  return (
    <Row className="how-my-courses-work">
      <Col lg={24} className="how-my-courses-work__title">
        <h2>¿Cómo funcionan la membresía?</h2>
        <h3>
          Cada visita acumula puntos y trae beneficios despues de completar algún descuento o un estudio totalmente gratis
        </h3>
      </Col>

      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              icon="clock-circle"
              title="Sin caducidad"
              description="Ven y visitanos cualquier día del año y disfruta de tus beneficios"
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="key"
              title="Acceso 24/7"
              description="Visita cualquiera de nuestras sucursales sin importar día y hora."
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="message"
              title="Dudas? "
              description="Personal altamente capacitado para asesorate en el proceso."
            />
          </Col>
        </Row>
        <Row className="row-cards">
          <Col md={8}>
            <CardInfo
              icon="user"
              title="Se cliente distinguido y acumulas más puntos"
              description="Al visitarnos con más frecuencia es mas probable que obtengas mas descuentos"
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="dollar"
              title="Precios bajos"
              description="Además de acumular puntos recibiras descuento en todos los estudios despues del primer año"
            />
          </Col>
          <Col md={8}>
            <CardInfo
              icon="check-circle"
              title="totalmente verificable via internet"
              description="Recibiras un usuario y contraseña para revisar tu estado de cuenta cada que desees."
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
    </Row>
  );
}

function CardInfo(props) {
  const { icon, title, description } = props;
  const { Meta } = Card;

  return (
    <Card className="how-my-courses-work__card">
      <Icon type={icon} />
      <Meta title={title} description={description} />
    </Card>
  );
}
