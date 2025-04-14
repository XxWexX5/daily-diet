import { Text, TouchableOpacity, View } from "react-native";

import * as Icon from "phosphor-react-native";

import { colors } from "@theme/index";
import { GroupText } from "@components/GroupText";

export function Hero() {
  return (
    <TouchableOpacity className="relative bg-success-500 rounded-default p-12">
      <View className="absolute top-2 right-2">
        <Icon.ArrowUpRight color={colors.success[900]} size={32} />
      </View>

      <View className="justify-center items-center">
        <GroupText title="90,86%" text="das refeições dentro da dieta" />
      </View>
    </TouchableOpacity>
  );
}
