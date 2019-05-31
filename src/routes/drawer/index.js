import React, { Component } from "react";
import { createAppContainer, createDrawerNavigator } from "react-navigation";

//Screens
import Main from "../../assets/screens/drawer/main";

const DrawerMenu = createDrawerNavigator({
  Main: {
    screen: Main
  }
});

export default createAppContainer(DrawerMenu);
