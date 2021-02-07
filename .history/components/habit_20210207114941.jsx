import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMinusSquare,
  faPlusSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

class Habit extends Component {
  handleIncrement = (e) => {
    console.log(e);
  };

  handleDecrement = (e) => {
    console.log(e);
  };

  handleDelete = (e) => {
    console.log(e);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <SafeAreaView style={styles.ul}>
        <View style={styles.li}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.count}>{count}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={this.handleIncrement}
          >
            <FontAwesomeIcon icon={faPlusSquare} color={"#cfd159"} size={32} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={this.handleDecrement}
          >
            <FontAwesomeIcon icon={faMinusSquare} color={"#cfd159"} size={32} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.handleDelete}>
            <FontAwesomeIcon icon={faTrash} color={"#aa3446"} size={32} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  ul: {},

  li: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "green",
  },
  title: {
    fontSize: 24,
    margin: 10,
    flex: 1,
    justifyContent: "flex-start",
  },
  count: {
    fontSize: 24,
    margin: 10,
    width: 32,
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
