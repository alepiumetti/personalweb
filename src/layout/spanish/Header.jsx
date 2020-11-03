import { Grid } from "@material-ui/core";
import React from "react";
import img from "../../img/img-alejandro-piumetti.jpg";

function Header() {
  return (
    <Grid container className="container">
      <Grid className="container-title-header" item sm={6} xs={12}>
        <div className="div-title-header" style={{ paddingTop: "10%" }}>
          <div>
            <p style={{ marginBottom: "-4%" }}>Hola, soy</p>
            <h1>Alejandro Piumetti</h1>
            <p style={{ marginTop: "-4%" }}>
              desarrollador y emprendedor autodidacta
            </p>
          </div>
          <br />
          <p>
            Hace 2 años me lancé a trabajar por mi cuenta creando Yoop, en poco
            tiempo logré muchas cosas pero principalmente aprendí muchisimo,
            llevando a cabo desde el diseño, la creación de la web,
            administración de la aplicación y el marketing del negocio.
            <br />
            Finalmente encontré mi fuerte y pasión por lo que hace un año qué
            estoy programando en ReactJS y Firebase.
          </p>
        </div>
      </Grid>
      <Grid className="container-img-header" item sm={6} xs={12}>
        <img
          src={img}
          alt="imagen Alejandro Piumetti"
          className="img-header  img-dark-theme"
        />
      </Grid>
    </Grid>
  );
}

export default Header;
