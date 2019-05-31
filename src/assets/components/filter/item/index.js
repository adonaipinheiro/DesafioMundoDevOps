import React, { Component } from "react";
import { Image, View, Text } from "react-native";

//Styles
import styles from "./styles";

//Components
import LinearGradient from "react-native-linear-gradient";

//Icon
import Icon from "react-native-vector-icons/FontAwesome5";

const img = require("../../../img/ic_lower_body.png");

export default class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      img: "../../../img/ic_dance.png"
    };
  }

  render() {
    return (
      <LinearGradient
        colors={["#7F38F4", "#F22B48"]}
        start={{ x: 0.0, y: 0.5 }}
        end={{ x: 0.5, y: 1.5 }}
        style={styles.container}
      >
        <View style={styles.contentArea}>
          <View style={styles.check}>
            <Icon name="check" size={7.5} color="#FFF" />
          </View>
          <View style={styles.filterArea}>
            <Image style={styles.filterImg} source={img} />
          </View>
        </View>
      </LinearGradient>
    );
  }
}
