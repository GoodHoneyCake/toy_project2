import React, { Component } from "react";
import { FlatList, SafeAreaView } from "react-native";
import Habit from "./habit";

class Habits extends Component {
  state = {
    habits: [
      {
        name: "Reading",
        count: 0,
      },
      {
        name: "Coding",
        count: 0,
      },
      {
        name: "Cooking",
        count: 0,
      },
    ],
  };

  Item = ({ count }) => (
    <View>
      <Text>{count}</Text>
    </View>
  );

  App = () => {
    const renderItem = ({ item }) => <Item title={item.count} />;
  };

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={this.state.habits}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      </SafeAreaView>
    );
  }
}

export default Habits;
