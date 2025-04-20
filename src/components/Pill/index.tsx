import { Text } from "react-native";

import { Title } from "@components/Title";

import { View } from "react-native";

function Positive() {
  return (
    <View className="self-start py-4 px-8 flex-row justify-center items-center gap-3 bg-neutral-200 rounded-full">
      <View className="size-3 bg-success-900 rounded-full" />
      <Text className="font-nunitoLight text-base">dentro da dieta</Text>
    </View>
  );
}

function Negative() {
  return (
    <View className="self-start py-4 px-8 flex-row justify-center items-center gap-3 bg-neutral-200 rounded-full">
      <View className="size-3 bg-error-900 rounded-full" />
      <Text className="font-nunitoLight text-base">fora da dieta</Text>
    </View>
  );
}

export const Pill = {
  Positive,
  Negative,
};
