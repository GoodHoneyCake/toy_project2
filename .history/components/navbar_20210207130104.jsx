import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";

class Navbar extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.navbar}>
          <FontAwesomeIcon icon={faLeaf} color={"blue"} size={32} />
          <Text>Habit Tracker</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    flexDirection: "row",
  },
});

export default Navbar;
