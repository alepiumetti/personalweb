import { Grid, IconButton } from "@material-ui/core";
import React from "react";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { GitHub } from "@material-ui/icons";

function Body() {
  return (
    <Grid container className="container">
      <Grid item sm={12} xs={12}>
        <h2>Proyectos.</h2>
      </Grid>
      <Grid className=" container-proyects" item sm={9} xs={12} spacing={2}>
        <div className="container-web-yoop">
          <h2 className="title-proyects">
            Web{" "}
            <IconButton
              onClick={() => {
                window.open("https://yoop.com.ar/", "_blank");
              }}
            >
              <OpenInNewIcon />
            </IconButton>{" "}
            y Admin Yoop
            <IconButton
              onClick={() => {
                window.open("https://sysadmin.yoop.com.ar/", "_blank");
              }}
            >
              <OpenInNewIcon />
            </IconButton>
          </h2>

          <p className="text-proyects">
            Creé y diseñé la nueva web de Yoop y el administrador de los datos
            de la aplicación. Usé ReactJS, Material-UI y CSS3 para crear el
            FrontEnd y Firebase Database Realtime, Storage y Auth para el
            administrador respectivamente.
          </p>
          <p>
            <a
              href="https://alepiumetti.gitbook.io/yoop/"
              target="_blank"
              style={{
                textDecoration: "none",
                color: "#353535",
                fontWeight: "bold",
              }}
            >
              Podés ver más sobre Yoop acá
            </a>
          </p>
        </div>
      </Grid>
      <Grid className=" container-proyects" item sm={3} xs={12}>
        <div className="container-checkout">
          <h2 className="title-proyects">
            Puesta en marcha E-Commerce
            <IconButton
              onClick={() => {
                window.open(
                  "https://alepiumetti-mp-commerce-nodejs.herokuapp.com/",
                  "_blank"
                );
              }}
            >
              <OpenInNewIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                window.open(
                  "https://github.com/alepiumetti/mp-ecommerce-nodejs/",
                  "_blank"
                );
              }}
            >
              <GitHub />
            </IconButton>
          </h2>

          <p className="text-proyects">
            Implementé el Checkout Pro a través del API de MercadoPago con
            Express en un E-Commerce Dummy.
          </p>
        </div>
      </Grid>
      <Grid className=" container-proyects" item sm={3} xs={12}>
        <div className="container-arcovid-ros">
          <h2 className="title-proyects">
            ArCovid Ros
            <IconButton
              onClick={() => {
                window.open(
                  "https://github.com/Hackfun-Rosario/ArCovidRos",
                  "_blank"
                );
              }}
            >
              <GitHub />
            </IconButton>
          </h2>

          <p className="text-proyects">
            Contribuí en el diseño e implementación en la muestra de datos de
            una API colaborativa sobre el Covid en Argentina usando ReactJS y
            Material UI. (API Descontinuada)
          </p>
        </div>
      </Grid>
      <Grid className=" container-proyects" item sm={9} xs={12}>
        <div className="container-blog-personal">
          <h2 className="title-proyects">
            Dolar HOY
            <IconButton
              onClick={() => {
                window.open("https://github.com/alepiumetti/scraper", "_blank");
              }}
            >
              <GitHub />
            </IconButton>
          </h2>

          <p className="text-proyects">
            Creé una <a href="https://scraper-3c915.web.app/">web</a> para ver
            la coticación del dólar en el día, hecha con HTML, CSS y JavaScript
            Vanilla y hosteada en Firebase Hosting. Ésta consume datos de una
            API propia.
          </p>
          <p className="text-proyects">
            La <a href="https://api-scrapper.herokuapp.com/api/dolar">API</a>{" "}
            está hosteada en Heroku, creada con ExpressJS. Para saber la
            cotización del dólar, creé un scraper con CheerioJS y NodeJS que
            "escanea" la web de{" "}
            <a href="https://www.cronista.com/MercadosOnline/dolar.html">
              El Cronista
            </a>{" "}
            y los guarda en un JSON.
          </p>
        </div>
      </Grid>
    </Grid>
  );
}

export default Body;
