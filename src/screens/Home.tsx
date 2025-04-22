import { View, Text, SafeAreaView, StatusBar, SectionList } from "react-native";

import { Header } from "@components/Header";
import { Hero } from "@components/Hero";
import { Title } from "@components/Title";
import { Topic } from "@components/Topic";
import { Button } from "@components/Button";

import * as Icon from "phosphor-react-native";

import { colors } from "@theme/index";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "@routes/app.routes";
import { useNavigation } from "@react-navigation/native";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export function Home() {
  const navigate = useNavigation<NavigationProps>();

  const DATA = [
    {
      title: "12.08.22",
      data: [
        {
          time: "20:00",
          item: "X-tudo",
          status: "error",
        },
        {
          time: "16:00",
          item: "Sanduíche",
          status: "success",
        },
        {
          time: "12:30",
          item: "Lasanha de frango com queijo",
          status: "error",
        },
      ],
    },
    {
      title: "11.08.22",
      data: [
        {
          time: "20:00",
          item: "X-tudo",
          status: "error",
        },
        {
          time: "16:00",
          item: "Whey protein com leite",
          status: "success",
        },
        {
          time: "12:30",
          item: "Salada cesar com frango grelhado",
          status: "success",
        },
        {
          time: "09:30",
          item: "Vitamina de banana com abacate",
          status: "success",
        },
      ],
    },
  ];

  return (
    <>
      <SafeAreaView className="bg-neutral-full" />

      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <View className="bg-neutral-full min-h-screen gap-10 pt-6 px-8">
        <Header />

        <Hero result={80} />

        <View className="gap-2">
          <Topic.Title className="font-nunitoLight text-xl">
            Refeições
          </Topic.Title>

          <Button
            onPress={() => navigate.navigate("create")}
            className="bg-neutral-800"
          >
            <Icon.Plus size={24} color={colors.neutral.full} />

            <Text className="text-neutral-full font-nunitoBold text-lg">
              Nova refeição
            </Text>
          </Button>
        </View>

        <View className="gap-2 h-[24rem]">
          <SectionList
            sections={DATA}
            scrollEnabled={true}
            keyExtractor={(item, index) => item.item + index}
            ItemSeparatorComponent={() => <View className="h-3"></View>}
            SectionSeparatorComponent={() => <View className="h-6"></View>}
            renderItem={({ item }) => (
              <Topic.Wrapper
                onPress={() =>
                  navigate.navigate("meal", {
                    isOnDiet: item.status === "success",
                  })
                }
              >
                <Topic.Content>
                  <Topic.Title>{item.time}</Topic.Title>

                  <Topic.Separator />

                  <Topic.Description>{item.item}</Topic.Description>
                </Topic.Content>

                {item.status === "success" ? (
                  <Topic.Success />
                ) : (
                  <Topic.Error />
                )}
              </Topic.Wrapper>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Title className="text-2xl">{title}</Title>
            )}
          />
        </View>
      </View>
    </>
  );
}
