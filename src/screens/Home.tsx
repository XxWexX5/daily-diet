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
import { mealsGetAll } from "@storage/Meal/mealGetAll";
import { MealType } from "@storage/Meal/mealCreate";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

import { formatDateToDDMMYY } from "@utils/formatDateToDDMMYY";
import { formatToHourMinute } from "@utils/formatToHourMinute";
import { useEffect, useState } from "react";

export function Home() {
  const [meals, setMeals] = useState<MealType[]>([]);
  const navigate = useNavigation<NavigationProps>();

  function transformMeals(meals: MealType[]) {
    const grouped: {
      [date: string]: { time: string; item: string; status: string }[];
    } = {};

    const sortedMeals = [...meals].sort(
      (a, b) => new Date(b.time).getTime() - new Date(a.time).getTime()
    );

    for (const meal of sortedMeals) {
      const dateKey = formatDateToDDMMYY(new Date(meal.data));
      const timeFormatted = formatToHourMinute(new Date(meal.time));

      const item = {
        time: timeFormatted,
        item: meal.name.trim(),
        status: Number(meal.isOnDiet) ? "success" : "error",
      };

      if (!grouped[dateKey]) {
        grouped[dateKey] = [];
      }

      grouped[dateKey].push(item);
    }

    return Object.entries(grouped).map(([title, data]) => ({
      title,
      data,
    }));
  }

  useEffect(() => {
    async function dataMealsGetAll() {
      try {
        const response = await mealsGetAll();

        setMeals(response);
      } catch (error) {
        console.log("Error");
      }
    }

    dataMealsGetAll();
  }, []);

  const data = transformMeals(meals);

  const countMealsOnDiet = meals.filter((meal) => Number(meal.isOnDiet)).length;

  const resultPercentageOnDiet = (countMealsOnDiet / meals.length) * 100;

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

        <Hero result={resultPercentageOnDiet} />

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
            sections={data}
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
