import { useEffect } from "react";

import { useFonts } from "expo-font";

import { SafeAreaView, StatusBar, View } from "react-native";

import "@styles/global.css";

import * as SplashScreen from "expo-splash-screen";

import { Loader } from "@components/Loader";
import { Header } from "@components/Header";

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
    return <Loader />;
  }

  return (
    <>
      <SafeAreaView className="bg-neutral-full" />

      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <View className="bg-neutral-full min-h-screen pt-6 px-8">
        <Header />
      </View>
    </>
  );
}
