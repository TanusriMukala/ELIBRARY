import React, { Component } from "react";
import {NavigationContainer} from "@react-navigation/native";
import { TextInput, Touchable, TouchableOpacity } from "react-native";

export default class TransactionScreen extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.lowerContainer}>
          <View style={styles.textinputContainer}>
            <TextInput
            style={styles.textinput}
            placeholder={"Book Id"}
            placeholderTextColor={"#FFFFFF"}
            value={bookId}
            />
            <View style={styles.textinputContainer,{ marginTop: 25}}>
          <View style={styles.textinputContainer}>
            <TextInput
            style={styles.textinput}
            placeholder={"student Id"}
            placeholderTextColor={"#FFFFFF"}
          
        <TouchableOpacity
        style={styles.scanbutton}
        onPress-{() -> this.getCameraPermissions("bookId")}>

        <Text style = (styles.scanbuttonText)Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.scanbutton}
        onPress-{() -> this.getCameraPermissions("studentId")}>

        <Text style = (styles.scanbuttonText)Scan</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

handleBarcodeScanned = async ({type, data}) => {
  const {domState} = this.state;

  if(domState === "bookId") {
    this.setState({
      bookId: data,
      domState: "normal",
      scanned: true
    });
  } else if (domState === "studentId") {
    this.setState({
      studentId: data,
      domState: "normal",
      scanned: true
    });
  }
  };
}

handleTransaction = () => {
  var {bookId} = this.state;
  db.collection("books")
  .doc(bookId)
  .get()
  .then(doc => {
    console.log(doc.data())
  });
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center</View>",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 30
  }
  lowerContainer: {
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "black",
    borderColor: "white"
  },
  textinput: {
    width: "57%",
    height: 50,
    padding: 10,
    borderColor: "white",
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: "#03b6fc",
    color: "black"
  }
  scanbutton: {
    width: 100,
    height: 50,
    backgroundColor: "#03b6fc",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  scanbuttonText:{
    fontSize: 24,
    color: "pink"
  }

});
