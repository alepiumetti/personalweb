import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Grid, Link } from "@material-ui/core";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Link
        onClick={handleClickOpen}
        component="button"
        style={{ textDecoration: "none" }}
      >
        <p className="link-dark-theme">¿Con qué está hecha esta página?</p>
      </Link>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          id="responsive-dialog-title"
          style={{ backgroundColor: "#d5e0da" }}
        >
          <h3>
            <b>Ésta página está hecha con:</b>
          </h3>
        </DialogTitle>
        <DialogContent style={{ backgroundColor: "#d5e0da" }}>
          <FileSystemNavigator />
        </DialogContent>
        <DialogActions style={{ backgroundColor: "#d5e0da" }}>
          <Button
            onClick={handleClose}
            autoFocus
            className="button-dialog-footer"
            variant="text"
          >
            <p className="text-button-dialog-footer">Volver</p>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function FileSystemNavigator() {
  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <TreeItem nodeId="1" label={<p>ReactJS</p>} />
      <TreeItem nodeId="3" label={<p>HTML</p>} />
      <TreeItem nodeId="4" label={<p>SASS/SCSS</p>} />
      <TreeItem nodeId="5" label={<p>Material-UI</p>} />
      <TreeItem nodeId="6" label={<p>Firebase Hosting</p>} />
    </TreeView>
  );
}
