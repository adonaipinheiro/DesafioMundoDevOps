import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";

//Styles
import styles from "./styles";

//Components
import Header from "../../../components/header";
import FilterList from "../../../components/filter/list";

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
        </View>
        <View style={styles.body}>
          <View style={styles.bar} />
          <View style={styles.filterArea}>
            <FilterList />
          </View>
          <View style={styles.exercicesArea} />
        </View>
      </View>
    );
  }
}
