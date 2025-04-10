import { useEffect } from "react";

import { useFonts } from "expo-font";

import { StatusBar } from "expo-status-bar";

import { Image, Text, View } from "react-native";

import Logo from "@images/logo.svg";

import "@styles/global.css";

import * as SplashScreen from "expo-splash-screen";

import { Loader } from "@components/Loader";

import { Horse, Heart, Cube } from "phosphor-react-native";
import { ButtonIcon } from "@components/ButtonIcon";

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
    <View className="flex-1 items-center justify-center bg-white">
      <View>
        <Logo width={100} height={100} />
      </View>

      <Text className="text-success-900 text-xl font-bold font-nunito">
        Hello World!
      </Text>

      <Horse />
      <Heart color="#AE2983" weight="fill" size={32} />
      <Cube color="teal" weight="duotone" />

      <Image
        source={require("./assets/images/image-woman-happy.png")}
        style={{ width: 244, height: 288 }}
        resizeMode="contain"
      />

      <ButtonIcon type="primary" icon="add-a-photo" />

      <StatusBar style="auto" />
    </View>
  );
}
