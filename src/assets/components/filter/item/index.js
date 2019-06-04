import React, { Component } from "react";
import { Image, View, TouchableOpacity } from "react-native";

//Styles
import styles from "./styles";

//Components
import LinearGradient from "react-native-linear-gradient";

//Icon
import Icon from "react-native-vector-icons/FontAwesome5";

//Imgs
import { ic_yoga, ic_dance, ic_upper_body, ic_lower_body } from "../../../img";

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      styleImg: {},
      styleCheck: { width: 0, height: 0, borderWidth: 0 },
      styleFilter: { marginTop: 15 },
      isChecked: false
    };

    this.checkButton = this.checkButton.bind(this);
  }

  componentWillMount() {
    let s = this.state;
    let p = this.props.data;
    let multiplier = 0.8;
    if (p.name == "Yoga") {
      s.img = ic_yoga;
      s.styleImg = { width: 35 * multiplier, height: 17 * multiplier };
    } else if (p.name == "Upper Body") {
      s.img = ic_upper_body;
      s.styleImg = { width: 28 * multiplier, height: 30 * multiplier };
    } else if (p.name == "Lower Body") {
      s.img = ic_lower_body;
      s.styleImg = { width: 34 * multiplier, height: 29 * multiplier };
    } else if (p.name == "Dance") {
      s.img = ic_dance;
      s.styleImg = { width: 14 * multiplier, height: 35 * multiplier };
    }
  }

  checkButton() {
    let s = this.state;
    if (s.isChecked == false) {
      s.styleCheck = { width: 15, height: 15, borderWidth: 1 };
      s.styleFilter = { marginTop: 0 };
      s.isChecked = true;
      this.setState(s);
    } else if (s.isChecked == true) {
      s.styleCheck = { width: 0, height: 0, borderWidth: 0 };
      s.styleFilter = { marginTop: 15 };
      s.isChecked = false;
      this.setState(s);
    }
  }

  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.checkButton();
        }}
      >
        <LinearGradient
          colors={["#7F38F4", "#F22B48"]}
          start={{ x: 0.0, y: 0.5 }}
          end={{ x: 0.5, y: 1.5 }}
          style={styles.container}
        >
          <View style={[styles.contentArea, this.state.styleFilter]}>
            <View style={[styles.check, this.state.styleCheck]}>
              <Icon name="check" size={7.5} color="#FFF" />
            </View>
            <View style={styles.filterArea}>
              <Image
                style={[styles.filterImg, this.state.styleImg]}
                source={this.state.img}
              />
            </View>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}
