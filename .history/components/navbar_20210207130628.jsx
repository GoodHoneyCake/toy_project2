import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";

class Navbar extends Component {
  render() {
    return (
      <SafeAreaView style={styles.navbar}>
        <View>
          <FontAwesomeIcon icon={faLeaf} color={"blue"} size={32} />
          <Text>Habit Tracker</Text>
          <Text>9</Text>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "red",
    flex: 0.5,
    flexDirection: "row",
  },
});
export default Navbar;
