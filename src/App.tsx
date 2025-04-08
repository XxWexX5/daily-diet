import { useEffect } from "react";

import { useFonts } from "expo-font";

import { StatusBar } from "expo-status-bar";

import { Text, View } from "react-native";

import Logo from "@images/logo.svg";

import "@styles/global.css";

import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const [loaded] = useFonts({
    Nunito: require("./assets/fonts/NunitoSans/NunitoSans.ttf"),
    NunitoItalic: require("./assets/fonts/NunitoSans/NunitoSans-Italic.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return <Text>Carregando!</Text>;
  }

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View>
        <Logo width={100} height={100} />
      </View>

      <Text className="text-blue-500 text-xl font-bold font-nunito">
        Hello World!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
