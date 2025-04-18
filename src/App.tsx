import { useEffect, useRef, useState } from "react";

import { useFonts } from "expo-font";

import {
  Keyboard,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";

import "@styles/global.css";

import * as SplashScreen from "expo-splash-screen";

import * as Icon from "phosphor-react-native";

import { Loader } from "@components/Loader";
import { Header } from "@components/Header";
import { Hero } from "@components/Hero";
import { Button } from "@components/Button";
import { colors } from "./theme";
import { Topic } from "@components/Topic";
import { TopBanner } from "@components/TopBanner";
import { Title } from "@components/Title";
import { Card } from "@components/Card";
import { Input } from "@components/Input";
import { DateInput } from "@components/DateInput";

export default function App() {
  const [description, setDescription] = useState("");

  const descriptionInputRef = useRef<TextInput>(null);

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
      <SafeAreaView className="bg-success-600" />

      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <TopBanner />

      <View className="bg-neutral-full min-h-screen pt-6 px-8">
        {/* <Header />

        <Hero />

        <Button className="bg-neutral-800">
          <Icon.Plus size={24} color={colors.neutral.full} />

          <Text className="text-neutral-full font-nunitoBold text-lg">
            Nova refeição
          </Text>
        </Button>

        <Topic.Wrapper>
          <Topic.Content>
            <Topic.Title>20:00</Topic.Title>

            <Topic.Separator />

            <Topic.Description>X-tudo</Topic.Description>
          </Topic.Content>

          <Topic.Error />
        </Topic.Wrapper>

        <Title content="12.08.22" />

        <Card.Error>
          <Card.Title>22</Card.Title>
          <Card.Text>melhor sequência de pratos dentro da dieta</Card.Text>
        </Card.Error>*/}

        <Title className="text-xl text-neutral-800">Nome</Title>

        <Input
          placeholder="Digite o nome"
          keyboardType="ascii-capable"
          onBlur={() => Keyboard.dismiss()}
        />

        <Title className="text-xl text-neutral-800">Descrição</Title>

        <Input
          value={description}
          onChangeText={setDescription}
          inputRef={descriptionInputRef}
          placeholder="Digite a descrição"
          multiline
          numberOfLines={6}
          className="h-[10rem]"
          onBlur={() => Keyboard.dismiss()}
          textAlignVertical="top"
        />

        <Title className="text-xl text-neutral-800">Data</Title>

        <DateInput />
      </View>
    </>
  );
}
