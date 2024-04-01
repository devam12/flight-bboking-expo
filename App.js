import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import Route from './src/Route';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <SafeAreaView>
    //     <Text>Open up App.js to start working on your app!</Text>
    //     <StatusBar style="auto" />
    //   </SafeAreaView>
    // </View>

    <View style={styles.container}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar style={"auto"} />
          <Route />
        </NavigationContainer>
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  },
});
