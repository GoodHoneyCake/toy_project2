import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from "react-native";
import HabitAddForm from "./habitAddForm";
class Navbar extends Component {
  handleAdd = (name) => {
    this.props.onAdd(name);
  };
  render() {
    return (
      <React.Fragment>
        <SafeAreaView style={styles.navbar}>
          <TouchableOpacity style={styles.icon}>
            <FontAwesomeIcon icon={faLeaf} color={"green"} size={32} />
          </TouchableOpacity>
          <Text style={styles.title}>취미 기록</Text>
          <Text style={styles.count}>{this.props.totalCount}</Text>
        </SafeAreaView>
        <HabitAddForm onAdd={this.handleAdd} />
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "pink",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
  icon: { marginTop: 30, marginLeft: 10 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
  },
  count: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
    marginRight: 10,
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
