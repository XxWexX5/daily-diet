import { StatusBar } from "expo-status-bar";

import { Text, View } from "react-native";

import Logo from "./assets/images/logo.svg";

import "./styles/global.css";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View>
        <Logo width={100} height={100} />
      </View>

      <Text className="text-blue-500 text-xl font-bold">Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
