import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RouteNames } from "../common/constants";
import { useNavigation } from "@react-navigation/native";

const Started = () => {
  const navigation = useNavigation();

  const screenHandler = () => {
    navigation.navigate(RouteNames.SEARCH_SCREEN);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/Images/Front.png")}
        style={{ width: "100%", height: 500 }}
        resizeMode="contain"
      />
      <View style={{ flex: 1 }}>
        <View>
          <Text
            style={{
              fontSize: 35,
              fontWeight: "800",
              textAlign: "center",
              paddingHorizontal: 20,
              color: "gray",
              marginBottom: 30,
            }}
          >
            Discover The Real Value of Travel
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "400",
              textAlign: "center",
              paddingHorizontal: 20,
              color: "gray",
            }}
          >
            Buy your plane ticket with peace of mind and comfort
          </Text>
        </View>
        <View
          style={{
            justifyContent: "flex-end",
            flex: 1,
            marginBottom: 50,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              borderRadius: 10,
              padding: 18,
            }}
            onPress={screenHandler}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Started;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "flex-start",
    backgroundColor: "#FFF",
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 22,
    color: "white",
    textAlign: "center",
  },
});
