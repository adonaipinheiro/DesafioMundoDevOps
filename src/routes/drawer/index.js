import React, { Component } from "react";
import { ScrollView, SafeAreaView, View, Dimensions } from "react-native";
import {
  createAppContainer,
  createDrawerNavigator,
  DrawerItems
} from "react-navigation";

//Styles
import styles from "./styles";

//Icons
import Icon from "react-native-vector-icons/FontAwesome5";

//Screens
import Main from "../../assets/screens/drawer/main";

//Dimensions
const { width } = Dimensions.get("window");

//CustomDrawer
const DrawerContent = props => (
  <SafeAreaView style={styles.container}>
    <DrawerItems {...props} />
  </SafeAreaView>
);

const DrawerMenu = createDrawerNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="user" size={18} light color={tintColor} />
        ),
        title: "Perfil"
      }
    }
  },
  {
    contentOptions: {
      activeTintColor: "#FFF",
      inactiveTintColor: "#CCC"
    },
    contentComponent: DrawerContent,
    drawerWidth: width * 0.65
  }
);

export default createAppContainer(DrawerMenu);
