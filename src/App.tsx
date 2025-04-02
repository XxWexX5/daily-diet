import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import "./styles/global.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-blue-500 text-xl font-bold">Hello NativeWind!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
