import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { Component } from "react";
import Habits from "./habits";

class Main extends Component {
  render() {
    return <Habits />;
  }
}

export default Main;
