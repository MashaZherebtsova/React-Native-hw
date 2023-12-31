import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./Screens/LoginScreen";
// import PostScreen from "./Screens/PostsScreen";
// import RegistrationScreen from './Screens/RegistrationScreen';
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoRegular: require("./assets/fonts/Roboto-Black.ttf"),
    RobotoMedium: require("./assets/fonts/Roboto-Medium.ttf"),
    RobotoBold: require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <LoginScreen />

      {/* <Text> start working on your app!</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
