import { Grid } from "@material-ui/core";
import React from "react";
import img from "../../img/img-alejandro-piumetti.jpg";

function Header(props) {
  return (
    <Grid container className="container">
      <Grid className="container-title-header" item sm={6} xs={12}>
        <div className="div-title-header" style={{ paddingTop: "10%" }}>
          <div>
            <p style={{ marginBottom: "-4%", fontWeight: "lighter" }}>
              Hola, soy
            </p>
            <h1
              style={{
                textTransform: "uppercase",
                fontWeight: "1000",
              }}
            >
              Alejandro Piumetti
            </h1>
            <p style={{ marginTop: "-4%", fontWeight: "ExtraLight" }}>
              desarrollador y emprendedor autodidacta
            </p>
          </div>
          <br />
          <p>
            En 2018 comencé a trabajar por mi cuenta en un proyecto personal
            (Yoop), en ese tiempo aprendí mucho sobre el proceso: diseño y
            creación de la web, administración de la aplicación y marketing.
          </p>
          <p>
            Un año después encontré mi fuerte: la combinación de ReactJs y
            Firebase.
          </p>
        </div>
      </Grid>
      <Grid className="container-img-header" item sm={6} xs={12}>
        <img
          src={img}
          alt="imagen Alejandro Piumetti"
          className={"img-header  img-" + props.mode}
        />
      </Grid>
    </Grid>
  );
}

export default Header;
