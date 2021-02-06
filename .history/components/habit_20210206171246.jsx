import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMinusSquare,
  faPlusSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

class Habit extends Component {
  render() {
    return (
      <SafeAreaView style={styles.li}>
        <Text style={styles.title}>Reading</Text>
        <Text style={styles.count}>8</Text>
        <TouchableOpacity style={styles.margin}>
          <FontAwesomeIcon icon={faPlusSquare} color={"#cfd159"} size={32} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.margin}>
          <FontAwesomeIcon icon={faMinusSquare} color={"#cfd159"} size={32} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.margin}>
          <FontAwesomeIcon icon={faTrash} color={"#aa3446"} size={32} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  li: { flex: 1, flexDirection: "row" },
  title: { fontSize: 24, margin: 10 },
  count: {
    fontSize: 24,
    margin: 10,
    backgroundColor: "#7bf781",
    width: 31,
    height: 31,
    lineHeight: 31,
    textAlign: "center",
    borderRadius: 5,
  },
  margin: { margin: 10 },
});
export default Habit;
