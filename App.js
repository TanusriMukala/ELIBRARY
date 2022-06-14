import React, { Component } from "react";
import BottomTabNavigator from "./components/BottomTabNavigator";
import {View,Text,StyleSheet,TouchableOpacity} from "react-native";
import * as Permissions from "expo-permissions";
import {BarCodeScanner} from "expo-barcode-scanner";
import db from "../config";

//export default class TransactionScreen extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <TouchableOpacity
        style = {styles.button}>
          <Text style = {styles.buttonText}>Scan QR code</Text>
        </TouchableOpacity>
        </View>
    );
  
  }
//}
export default class TransactionScreen extends Component {
  constructor{props}{
    super(props);
    this.state = {
      bookId: "",
      studentId: "",
      domState:"normal",
      hasCameraPermissions:null,
      scanned:false,
      scanData: ""
    }
  }
  getCameraPermissions = asyncdomState => {
    const {status} = await Permissions.askAsync(Permissions.CAMERA);

    this.setState({
      /*Status === "granted" is true when user has granted Permission
      Status ===   "granted" is false when user had no granted the Permission
      */
     hasCameraPermissions: status === "granted",
     domState: domState,
     scanned: false
  }
}