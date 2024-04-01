import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RouteNames } from "./common/constants";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import Started from "./screens/Started";
import Search from "./screens/Search";
import Details from "./screens/Details";

const AppStack = createNativeStackNavigator();

const Route = () => {
  let initialRoute = RouteNames.GETTING_STARTED_SCREEN;
  return (
    <View style={{ flex: 1 }}>
      <AppStack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          headerShown: false,
          // animation: "slide_from_right",
          // presentation: "transparent",
        }}
      >
        <AppStack.Screen
          name={RouteNames.GETTING_STARTED_SCREEN}
          component={Started}
        />

        <AppStack.Screen name={RouteNames.SEARCH_SCREEN} component={Search} />
        <AppStack.Screen name={RouteNames.DETAILS_SCREEN} component={Details} />
      </AppStack.Navigator>
    </View>
  );
};

export default Route;

const styles = StyleSheet.create({});
