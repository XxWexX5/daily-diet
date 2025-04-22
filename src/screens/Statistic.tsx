import { useEffect, useState } from "react";

import { useRoute } from "@react-navigation/native";

import { SafeAreaView, StatusBar, View } from "react-native";

import { TopBanner } from "@components/TopBanner";
import { Title } from "@components/Title";
import { Card } from "@components/Card";

import { MealType } from "@storage/Meal/mealCreate";
import { mealsGetAll } from "@storage/Meal/mealGetAll";
export function Statistic() {
  const [meals, setMeals] = useState<MealType[]>([]);

  const route = useRoute();

  const { result } = route.params as { result: number };

  const mealsOnDiet = meals.filter((meal) => Number(meal.isOnDiet));
  const mealsNotOnDiet = meals.filter((meal) => !Number(meal.isOnDiet));

  function getMaxOnDietSequence() {
    const sortedMeals = [...meals].sort(
      (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
    );

    let current = 0;
    let max = 0;

    for (const meal of sortedMeals) {
      if (Number(meal.isOnDiet)) {
        current++;
        if (current > max) max = current;
      } else {
        current = 0;
      }
    }

    return max;
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

  return (
    <>
      <SafeAreaView
        className={`${result >= 90 ? "bg-success-500" : "bg-error-500"}`}
      />

      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <TopBanner result={result} />

      <View className="flex-1 py-10 px-8 gap-4 bg-neutral-full">
        <Title className="text-xl text-center mb-4">Estatísticas gerais</Title>

        <Card.Primary>
          <Card.Title>{getMaxOnDietSequence()}</Card.Title>
          <Card.Text>melhor sequência de pratos dentro da dieta</Card.Text>
        </Card.Primary>

        <Card.Primary>
          <Card.Title>{meals.length}</Card.Title>
          <Card.Text>refeições registradas</Card.Text>
        </Card.Primary>

        <View className="flex-row gap-4">
          <Card.Success>
            <Card.Title>{mealsOnDiet.length}</Card.Title>
            <Card.Text>refeições dentro da dieta</Card.Text>
          </Card.Success>

          <Card.Error>
            <Card.Title>{mealsNotOnDiet.length}</Card.Title>
            <Card.Text>refeições fora da dieta</Card.Text>
          </Card.Error>
        </View>
      </View>
    </>
  );
}
