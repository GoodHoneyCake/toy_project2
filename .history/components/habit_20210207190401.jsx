import React, { Component } from "react";
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMinusSquare,
  faPlusSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

class Habit extends Component {
  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <SafeAreaView style={styles.habit}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.count}>{count}</Text>
        <TouchableOpacity style={styles.button} onPress={this.handleIncrement}>
          <FontAwesomeIcon icon={faPlusSquare} color={"#cfd159"} size={32} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.handleDecrement}>
          <FontAwesomeIcon icon={faMinusSquare} color={"#cfd159"} size={32} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.handleDelete}>
          <FontAwesomeIcon icon={faTrash} color={"#aa3446"} size={32} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  habit: { flex: 1, flexDirection: "row" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
    flex: 1,
    justifyContent: "flex-start",
  },
  count: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
    width: 52,
    height: 32,
    lineHeight: 32,
    textAlign: "center",
    borderRadius: 5,
    color: "#fff",
    backgroundColor: "#7bf781",
  },
  button: { margin: 10 },
});
export default Habit;
