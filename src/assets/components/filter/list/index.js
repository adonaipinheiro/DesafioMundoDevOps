import React, { Component } from "react";
import { FlatList } from "react-native";

//Filters
import Filter from "../item";

//Data
import data from "../../../data/data.json";

export default class FilterList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: data.filters
    };
  }

  render() {
    return (
      <FlatList
        data={this.state.filters}
        contentContainerStyle={{ alignItems: "center" }}
        renderItem={({ item }) => <Filter data={item} />}
        horizontal={true}
        refreshing
        keyExtractor={(item, index) => item.name}
      />
    );
  }
}
