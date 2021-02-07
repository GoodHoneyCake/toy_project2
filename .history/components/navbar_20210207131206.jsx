import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";

class Navbar extends Component {
  render() {
    return (
      <SafeAreaView style={styles.navbar}>
        <FontAwesomeIcon icon={faLeaf} color={"green"} size={32} />
        <Text style={styles.title}>Habit Tracker</Text>
        <Text style={styles.count}>{this.props.totalCount}</Text>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "pink",
    flex: 0.2,
    flexDirection: "row",
  },
  title: {
    fontSize: 32,
  },
  count: {
    fontSize: 32,
  },
});
export default Navbar;
