import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

class Navbar extends Component {
  render() {
    return (
      <SafeAreaView style={styles.navbar}>
        <TouchableOpacity style={styles.icon}>
          <FontAwesomeIcon icon={faLeaf} color={"green"} size={32} />
        </TouchableOpacity>
        <Text style={styles.title}>Habit Tracker</Text>
        <Text style={styles.count}>{this.props.totalCount}</Text>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: { marginTop: 30 },
  title: {
    fontSize: 24,
    marginTop: 30,
  },
  count: {
    fontSize: 24,
    marginTop: 30,
    width: 32,
    height: 32,
    lineHeight: 32,
    textAlign: "center",
    borderRadius: 5,
    color: "#fff",
    backgroundColor: "#7bf781",
  },
});
export default Navbar;
