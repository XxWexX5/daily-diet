import { TouchableOpacity, View } from "react-native";

import * as Icon from "phosphor-react-native";

import { colors } from "@theme/index";

import { Wrap } from "@components/Wrap";

export function TopBanner() {
  return (
    <View className="bg-success-600 py-14 items-center">
      <TouchableOpacity className="absolute top-2 left-6">
        <Icon.ArrowLeft color={colors.success[900]} size={32} />
      </TouchableOpacity>

      <Wrap.Title>90,86%</Wrap.Title>
      <Wrap.Content>das refeições dentro da dieta</Wrap.Content>
    </View>
  );
}
