import { Box, CssBaseline, Grid, Link } from "@material-ui/core";
import React from "react";
import DialogElements from "./DialogElements";

function Footer(props) {
  return (
    <div className="container-link">
      <DialogElements mode={props.mode} />
    </div>
  );
}

export default Footer;
