import React from "react";
import "react-native-gesture-handler";
import { ApplicationProvider, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import { mapping, light as lightTheme } from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/Home";
import Thread from "./src/screens/Thread";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Groups" }}
          />
          <Stack.Screen
            name="Thread"
            component={Thread}
            options={{ title: "HelpNow" }}
          />
        </Stack.Navigator>
      </ApplicationProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  m: {
    margin: 20
  }
});
