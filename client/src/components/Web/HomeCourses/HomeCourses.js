import React from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import usarbeneficios from "../../../assets/img/jpg/usarbeneficios.JPG";
import consultabeneficios from "../../../assets/img/jpg/consultarbeneficios.JPG";
import registrarclientes from "../../../assets/img/jpg/registrarcliente.JPG";
import consultarcliente from "../../../assets/img/jpg/consultarcliente.JPG";
import reportes from "../../../assets/img/jpg/reportes.JPG";
import estudios from "../../../assets/img/jpg/estudios.JPG";

import "./HomeCourses.scss";

export default function HomeCourses() {
  return (
    <Row className="home-courses">
      <Col lg={24} className="home-courses__title">
        <h2>Consulta Información</h2>
      </Col>
      <Col lg={4} />
      <Col lg={16}>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={usarbeneficios}
              title="Usar Beneficios"
              subtitle="Canjea/bonifica puntos"
              link="https://dnadiagnosticabeneficios.com/usar_beneficios"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={consultabeneficios}
              title="Consultar Beneficios"
              subtitle="Beneficios actuales y puntos disponibles"
              link="https://dnadiagnosticabeneficios.com/consulta_beneficios"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={registrarclientes}
              title="Registrar Cliente"
              subtitle="Altas/Bajas Clientes"
              link="https://dnadiagnosticabeneficios.com/registro_clientes"
            />
          </Col>
          <Col md={6}>
            <CardCourse
              image={consultarcliente}
              title="Consultar Cliente"
              subtitle="Información de clientes"
              link="https://dnadiagnosticabeneficios.com/consulta_clientes"
            />
          </Col>
        </Row>
        <Row className="row-courses">
          <Col md={6}>
            <CardCourse
              image={reportes}
              title="Reportes"
              subtitle="Reportes por clientes, beneficios, tarjetas"
              link="https://dnadiagnosticabeneficios.com/reportes"
            />
          </Col>
          <Col md={6} />
          <Col md={6} />
          <Col md={6}>
            <CardCourse
              image={estudios}
              title="Estudios"
              subtitle="Listado de estudios"
              link="https://dnadiagnosticabeneficios.com/estudios"
            />
          </Col>
        </Row>
      </Col>
      <Col lg={4} />
      <Col lg={24} className="home-courses__more">
        <Link to="google.com"> 
        //to="/courses">
          <Button>Ver más</Button>
        </Link>
      </Col>
    </Row>
  );
}

function CardCourse(props) {
  const { image, title, subtitle, link } = props;
  const { Meta } = Card;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Card
        className="home-courses__card"
        cover={<img src={image} alt={title} />}
        actions={[<Button>INGRESAR</Button>]}
      >
        <Meta title={title} description={subtitle} />
      </Card>
    </a>
  );
}
