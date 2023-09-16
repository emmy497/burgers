import React from "react";
import Aux from "../../hoc/Auxi/Auxi";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default layout;