import React, { Component } from "react";
import { FlatList } from "react-native";

//Filters
import Filter from "../item";

//Data
import data from "../../../data/data.json";

export default class FilterExercices extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exercices: data.exercices
    };
  }

  render() {
    return (
      <FlatList
        data={this.state.exercices}
        contentContainerStyle={{ alignItems: "center" }}
        renderItem={({ item }) => <Filter data={item} />}
        horizontal={false}
        refreshing
        keyExtractor={(item, index) => item.name}
      />
    );
  }
}
