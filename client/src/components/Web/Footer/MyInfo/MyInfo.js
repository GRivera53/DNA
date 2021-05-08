import React from "react";
import LogoWhite from "../../../../assets/img/jpg/dnalogo.JPG";
import SocialLink from "../../SocialLinks";

import "./MyInfo.scss";

export default function MyInfo() {
  return (
    <div className="my-info">
      <img src={LogoWhite} alt="DNA DIAGNOSTICA" />
      <h4>
        Ven y conoce los beneficios de tener una membresía con nosotros,
        recibe descuentos, puntos canjeables por estudios, acceso a tus datos personales
      </h4>
      <SocialLink />
    </div>
  );
}
