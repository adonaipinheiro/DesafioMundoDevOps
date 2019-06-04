import React, { Component } from "react";
import { Image, View, Text } from "react-native";

//Styles
import styles from "./styles";

//Imgs
import {
  gym,
  yoga,
  running,
  cycling,
  ic_bike,
  ic_time,
  ic_balance
} from "../../../img";

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "",
      styleImg: {},
      whenTodayStyle: {},
      whenYesterdayStyle: {},
      time: ""
    };
  }

  componentWillMount() {
    let s = this.state;
    let p = this.props.data;
    let multiplier = 0.85;

    //Imgs
    if (p.name == "Corrida") {
      s.img = running;
      s.styleImg = { width: 102 * multiplier, height: 121 * multiplier };
    } else if (p.name == "Bicicleta") {
      s.img = cycling;
      s.styleImg = {
        width: 142 * multiplier,
        height: 142 * multiplier,
        marginTop: -15
      };
    } else if (p.name == "Musculação") {
      s.img = gym;
      s.styleImg = {
        width: 117 * multiplier,
        height: 146 * multiplier,
        marginTop: -20
      };
    } else if (p.name == "Yoga") {
      s.img = yoga;
      s.styleImg = {
        width: 82 * multiplier,
        height: 136 * multiplier,
        marginTop: -10
      };
    }

    //When
    if (p.when == "") {
      s.whenTodayStyle = {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "#48596a"
      };
      s.whenYesterdayStyle = {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "#48596a"
      };
    } else if (p.when == "today") {
      s.whenTodayStyle = {
        backgroundColor: "#FD3C29",
        borderWidth: 1,
        borderColor: "#FD3C29"
      };
      s.whenYesterdayStyle = {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "#48596a"
      };
    } else if (p.when == "yesterday") {
      s.whenTodayStyle = {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "#48596a"
      };
      s.whenYesterdayStyle = {
        backgroundColor: "#19B996",
        borderWidth: 1,
        borderColor: "#19B996"
      };
    }

    //Time
    if (p.time > 60) {
      s.time = `${(p.time / 60).toFixed(0)}:${(p.time - 60).toFixed(0)} h`;
    } else if (p.time == 60) {
      s.time = `${(p.time / 60).toFixed(0)} h`;
    } else {
      s.time = p.time + " m";
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.exercicesContent}>
          <View style={styles.imgContent}>
            <View style={styles.imgCircle}>
              <Image style={this.state.styleImg} source={this.state.img} />
            </View>
          </View>

          <View
            style={{
              justifyContent: "space-between",
              marginTop: 10,
              marginBottom: 10
            }}
          >
            <Text style={styles.textTitle}>{this.props.data.name}</Text>
            <View style={styles.attributesArea}>
              <View style={styles.attributesContent}>
                <Image style={{ width: 15, height: 15 }} source={ic_bike} />
                <Text style={styles.attributesText}>
                  {this.props.data.calories} Kcal
                </Text>
              </View>
              <View style={styles.separator} />
              <View style={styles.attributesContent}>
                <Image style={{ width: 9, height: 12 }} source={ic_time} />
                <Text style={styles.attributesText}>{this.state.time}</Text>
              </View>
              <View style={styles.separator} />
              <View style={styles.attributesContent}>
                <Image style={{ width: 11, height: 12 }} source={ic_balance} />
                <Text style={styles.attributesText}>
                  {this.props.data.weight} Kg
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View style={[styles.whenArea, this.state.whenTodayStyle]}>
                <Text style={styles.whenText}>HOJE</Text>
              </View>
              <View style={[styles.whenArea, this.state.whenYesterdayStyle]}>
                <Text style={styles.whenText}>ONTEM</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
