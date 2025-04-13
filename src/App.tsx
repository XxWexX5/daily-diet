import { useEffect } from "react";

import { useFonts } from "expo-font";

import { SafeAreaView, StatusBar, Text, View } from "react-native";

import "@styles/global.css";

import * as SplashScreen from "expo-splash-screen";

import * as Icon from "phosphor-react-native";

import { Loader } from "@components/Loader";
import { Header } from "@components/Header";
import { Hero } from "@components/Hero";
import { Button } from "@components/Button";
import { colors } from "./theme";

export default function App() {
  const [loaded] = useFonts({
    Nunito: require("./assets/fonts/NunitoSans/NunitoSans.ttf"),
    NunitoItalic: require("./assets/fonts/NunitoSans/NunitoSans-Italic.ttf"),
    NunitoBold: require("./assets/fonts/NunitoSans/NunitoSans-Bold.ttf"),
    NunitoLight: require("./assets/fonts/NunitoSans/NunitoSans-Light.ttf"),
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

        <Hero />

        <Button className="bg-neutral-800">
          <Icon.Plus size={24} color={colors.neutral.full} />

          <Text className="text-neutral-full font-nunitoBold text-lg">
            Nova refeição
          </Text>
        </Button>
      </View>
    </>
  );
}
