import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { SafeAreaView, View } from "react-native";

class Navbar extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <FontAwesomeIcon icon={faLeaf} color={"#cfd159"} size={32} />
        </View>
      </SafeAreaView>
    );
  }
}

export default Navbar;
