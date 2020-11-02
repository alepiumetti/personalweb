import { Grid, ListItemIcon, SvgIcon } from "@material-ui/core";
import React from "react";

import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";
import EmailIcon from "@material-ui/icons/Email";

function Contact() {
  return (
    <Grid container>
      {/* <Grid item xs={12} sm={12}>
        <h2>Contacto.</h2>
      </Grid> */}
      <Grid container className="icons-container contact-dark-theme">
        <Grid item>
          <a href="https://github.com/alepiumetti" className="link-icon">
            <GitHubIcon className="icon-dark-theme" fontSize="large" />
          </a>
          <a href="https://t.me/Piuma14" className="link-icon">
            <TelegramIcon className="icon-dark-theme" fontSize="large" />
          </a>
          <a href="mailto:alepiumetti@gmail.com" className="link-icon">
            <EmailIcon className="icon-dark-theme" fontSize="large" />
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contact;
