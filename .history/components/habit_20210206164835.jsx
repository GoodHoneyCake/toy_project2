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
      <SafeAreaView>
        <View>
          <Text style={styles.habitName}>Reading</Text>
          <Text style={styles.habitCount}>8</Text>
          <TouchableOpacity style={(styles.habitButton, styles.habitIncrease)}>
            <FontAwesomeIcon icon={faPlusSquare} color={"red"} />
          </TouchableOpacity>
          <TouchableOpacity style={(styles.habitButton, styles.habitDecrease)}>
            <FontAwesomeIcon icon={faMinusSquare} color={"green"} size={32} />
          </TouchableOpacity>
          <TouchableOpacity style={(styles.habitButton, styles.habitDelete)}>
            <FontAwesomeIcon icon={faTrash} color={"blue"} size={32} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  habitName: {},
  habitCount: {},
  habitButton: { fontSize: 32 },
  habitIncrease: {},
  habitDecrease: {},
  habitDelete: {},
});
export default Habit;
