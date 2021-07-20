import React from "react";
import AcademyLogo from "../../../../assets/img/png/academy-logo.png";

import "./PresentationCourses.scss";

export default function PresentationCourses() {
  return (
    <div className="presentation-courses">
      <img src={AcademyLogo} alt="DNA Diagnostica" />
      <p>Proyecto realizado para DNA diagnostica y proceso de beneficios</p>
      <p>Aprovecha y obten tu tarjeta de beneficios</p>
    </div>
  );
}
