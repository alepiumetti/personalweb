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
            <p style={{ marginTop: "-4%" }}>Desarrollador y emprendedor</p>
          </div>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
            sunt omnis iste enim eaque ad doloribus voluptatem molestias
            deleniti facilis rerum nisi velit, alias quaerat qui officiis
            perferendis blanditiis nam?
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
