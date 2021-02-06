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
            <FontAwesomeIcon icon={faPlusSquare} color={"red"} size={32} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.habitButton}>
            <FontAwesomeIcon icon={faMinusSquare} color={"green"} size={32} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.habitButton}>
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
  habitButton: {},
  habitIncrease: { font: 48 },
});
export default Habit;
