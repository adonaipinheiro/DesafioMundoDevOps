import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

//Styles
import styles from "./styles";

//Icons
import Icon from "react-native-vector-icons/FontAwesome5";
const iconSize = 20;

export class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{ width: iconSize, height: iconSize }}
          onPress={() => {
            this.props.navigation.openDrawer();
          }}
        >
          <Icon name="align-left" size={iconSize} color="#FFF" />
        </TouchableOpacity>
        <Text style={styles.mainText}>MEU PERFIL</Text>
        <Icon name="sun" size={iconSize} color="#FFF" solid />
      </View>
    );
  }
}

export default withNavigation(Header);
