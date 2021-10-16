import React from "react";
import { Alert, Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { ConversionInput } from "../../components/ConversionInput";
import colors from "../../constants/colors";
import * as MyDimensions from "../../constants/Dimensions";

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />

      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/background.png")}
          resizeMode="contain"
          style={styles.logoBackground}
        />
        <Image
          source={require("../../assets/images/logo.png")}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>
      {/* Conversion inputs */}
      <ConversionInput
        text="USD"
        onPress={() => Alert.alert("todo", "USD VALUE")}
        onChangeText={(value) => console.log(value)}
      />
      <ConversionInput
        text="GBP"
        onPress={() => Alert.alert("todo", "GBP VALUE")}
        onChangeText={(value) => console.log(value)}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: MyDimensions.ScreenHeight,
    width: MyDimensions.ScreenWidth,
    backgroundColor: colors.blue,
    justifyContent: "center",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoBackground: {
    width: MyDimensions.ScreenWidth * 0.45,
    height: MyDimensions.ScreenHeight * 0.45,
  },
  logo: {
    position: "absolute",
    width: MyDimensions.ScreenWidth * 0.25,
    height: MyDimensions.ScreenHeight * 0.25,
  },
});