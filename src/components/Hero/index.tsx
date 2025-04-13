import { Text, TouchableOpacity, View } from "react-native";

import * as Icon from "phosphor-react-native";

import { colors } from "@theme/index";

export function Hero() {
  return (
    <TouchableOpacity className="relative bg-success-500 rounded-xl p-12">
      <View className="absolute top-2 right-2">
        <Icon.ArrowUpRight color={colors.success[900]} size={32} />
      </View>

      <View className="justify-center items-center">
        <Text className="font-nunitoBold text-4xl">90,86%</Text>
        <Text className="font-nunitoLight text-base">
          das refeições dentro da dieta
        </Text>
      </View>
    </TouchableOpacity>
  );
}
