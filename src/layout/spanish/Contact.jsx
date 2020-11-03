import { Grid, IconButton, ListItemIcon, SvgIcon } from "@material-ui/core";
import React from "react";

import GitHubIcon from "@material-ui/icons/GitHub";
import TelegramIcon from "@material-ui/icons/Telegram";
import EmailIcon from "@material-ui/icons/Email";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness2Icon from "@material-ui/icons/Brightness2";

function Contact(props) {
  return (
    <Grid container>
      {/* <Grid item xs={12} sm={12}>
        <h2>Contacto.</h2>
      </Grid> */}
      <Grid container className={"icons-container contact-" + props.mode}>
        <Grid item>
          <a href="https://github.com/alepiumetti" className="link-icon">
            <GitHubIcon className={"icon-" + props.mode} fontSize="large" />
          </a>
        </Grid>
        <Grid item>
          <a href="https://t.me/Piuma14" className="link-icon">
            <TelegramIcon className={"icon-" + props.mode} fontSize="large" />
          </a>
        </Grid>
        <Grid item>
          <a href="mailto:alepiumetti@gmail.com" className="link-icon">
            <EmailIcon className={"icon-" + props.mode} fontSize="large" />
          </a>
        </Grid>
        <Grid item>
          <IconButton className="link-icon" onClick={props.setMode}>
            {props.mode === "dark-theme" ? (
              <Brightness4Icon
                className={"button-" + props.mode}
                fontSize="large"
              />
            ) : (
              <Brightness2Icon
                className={"button-" + props.mode}
                fontSize="large"
              />
            )}
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Contact;
