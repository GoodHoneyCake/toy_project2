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
  state = {
    count: 0,
  };

  handleIncrement = () => {
    const count = this.state.count + 1;
    this.setState({ count: count < 100 ? count : 99 });
  };

  handleDecrement = () => {
    const count = this.state.count - 1;
    this.setState({ count: count < 0 ? 0 : count });
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
          <TouchableOpacity style={styles.button}>
            <FontAwesomeIcon icon={faTrash} color={"#aa3446"} size={32} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  ul: { flex: 3, marginRight: 45 },
  li: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
  count: {
    fontSize: 24,
    margin: 10,
    width: 32,
    height: 32,
    lineHeight: 32,
    textAlign: "center",
    borderRadius: 5,
    backgroundColor: "#7bf781",
    color: "#fff",
  },
  button: { margin: 10 },
});
export default Habit;
