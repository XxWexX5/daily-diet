import { TouchableOpacity, View } from "react-native";

import * as Icon from "phosphor-react-native";

import { colors } from "@theme/index";
import { GroupText } from "./GroupText";

export function TopBanner() {
  return (
    <View className="bg-success-600 py-14 items-center">
      <TouchableOpacity className="absolute top-2 left-6">
        <Icon.ArrowLeft color={colors.success[900]} size={32} />
      </TouchableOpacity>

      <GroupText title="90,86%" text="das refeições dentro da dieta" />
    </View>
  );
}
