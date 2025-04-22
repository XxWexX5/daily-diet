import { useEffect } from "react";

import { useFonts } from "expo-font";

import "@styles/global.css";

import * as SplashScreen from "expo-splash-screen";

import { Loader } from "@components/Loader";

import Routes from "./routes";

import { Host } from "react-native-portalize";
import { clearStorage } from "@storage/clearStorage";

export default function App() {
  const [loaded] = useFonts({
    Nunito: require("./assets/fonts/NunitoSans/NunitoSans.ttf"),
    NunitoItalic: require("./assets/fonts/NunitoSans/NunitoSans-Italic.ttf"),
    NunitoBold: require("./assets/fonts/NunitoSans/NunitoSans-Bold.ttf"),
    NunitoLight: require("./assets/fonts/NunitoSans/NunitoSans-Light.ttf"),
  });

  useEffect(() => {
    //clearStorage();

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return <Loader />;
  }

  return (
    <Host>
      <Routes />
    </Host>
  );
}
