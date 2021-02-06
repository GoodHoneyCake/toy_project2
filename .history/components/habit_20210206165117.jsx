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
          <TouchableOpacity>
            <FontAwesomeIcon
              icon={faPlusSquare}
              style={(styles.habitButton, styles.habitIncrease)}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesomeIcon
              icon={faMinusSquare}
              style={(styles.habitButton, styles.habitDecrease)}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesomeIcon
              icon={faTrash}
              style={(styles.habitButton
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
