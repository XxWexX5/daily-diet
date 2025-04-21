import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { SafeAreaView, StatusBar, View } from "react-native";

import { TopBanner } from "@components/TopBanner";
import { Title } from "@components/Title";
import { Card } from "@components/Card";
export function Statistic() {
  const route = useRoute();

  const { result } = route.params as { result: number };

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
          <Card.Title>22</Card.Title>
          <Card.Text>melhor sequência de pratos dentro da dieta</Card.Text>
        </Card.Primary>

        <Card.Primary>
          <Card.Title>109</Card.Title>
          <Card.Text>refeições registradas</Card.Text>
        </Card.Primary>

        <View className="flex-row gap-4">
          <Card.Success>
            <Card.Title>99</Card.Title>
            <Card.Text>refeições dentro da dieta</Card.Text>
          </Card.Success>

          <Card.Error>
            <Card.Title>10</Card.Title>
            <Card.Text>refeições fora da dieta</Card.Text>
          </Card.Error>
        </View>
      </View>
    </>
  );
}
