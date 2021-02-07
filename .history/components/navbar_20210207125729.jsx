import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { SafeAreaView, View } from "react-native";

class Navbar extends Component {
  render() {
    return (
      <SafeAreaView>
        <FontAwesomeIcon icon={faLeaf} color={"blue"} size={32} />
      </SafeAreaView>
    );
  }
}

export default Navbar;
