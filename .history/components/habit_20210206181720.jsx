import React, { Component } from "react";
import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMinusSquare,
  faPlusSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
const STORAGE_KEY = "@save_name";
class Habit extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    this.retrieveData();
  }

  retrieveData = async () => {
    try {
      const count = await AsyncStorage.getItem(STORAGE_KEY);

      if (count !== null) {
        this.setState({ count });
      }
    } catch (e) {
      alert("Failed to load count.");
    }
  };

  save = async (count) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, count);
      this.setState({ count });
    } catch (e) {
      alert("Failed to save count.");
    }
  };

  onChangeText = (count) => this.setState({ count });

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
  };

  render() {
    return (
      <SafeAreaView style={styles.li}>
        <Text style={styles.title}>Reading</Text>
        <Text style={styles.count}>{this.state.count}</Text>
        <TouchableOpacity style={styles.button} onPress={this.handleIncrement}>
          <FontAwesomeIcon icon={faPlusSquare} color={"#cfd159"} size={32} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={this.handleDecrement}>
          <FontAwesomeIcon icon={faMinusSquare} color={"#cfd159"} size={32} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
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
    width: 32,
    height: 32,
    lineHeight: 32,
    textAlign: "center",
    borderRadius: 5,
  },
  button: { margin: 10 },
});
export default Habit;
