import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import RegisterButton from "./RegisterButton";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const ItemFlat = (props) => {
  const openDetails = () => {
    fetch("http://10.0.1.48:4000/openDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        count:props.count
      }),
    })
      .then((response) => response.json())
      .then((data) => {props.navigation.navigate("detailsScreen",data.user);})
      .catch((error) => console.error(error));
  };
  return (
    <View style={styles.container}>
      <View style={styles.bigBox}>
        <Image
          source={{
            uri: "https://static.thenounproject.com/png/5034901-200.png",
          }}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <View style={{ flex: 2 }}>
        <View style={styles.smallBox1}>
          <View style={{ width: 80 }}>
            <RegisterButton click={openDetails} text="DETAILS" color="#6CB2D9" />
          </View>
          <View style={{ width: 80 }}>
            <RegisterButton click={() => {}} text="DELETE" color="#6CB2D9" />
          </View>
        </View>
        <View style={styles.smallBox2}>
          <Text style={styles.title}>
            {props.count}: {props.login}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#87CEEB",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  bigBox: {
    flex: 1,
  },
  smallBox1: {
    flex: 1,

    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  smallBox2: {
    flex: 1,
  },
  item: {
    backgroundColor: "#87CEEB",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
  },
  title: {
    fontSize: 32,
  },
});
export default ItemFlat;
