import { Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

import * as Icon from "phosphor-react-native";

import { Wrap } from "@components/Wrap";

import { colors } from "@theme/index";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "@routes/app.routes";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

interface HeroProps {
  result: number;
}

export function Hero({ result }: HeroProps) {
  const navigation = useNavigation<NavigationProps>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("statistic", {
          result,
        })
      }
      className={`${
        result >= 90 ? "bg-success-500" : "bg-error-500"
      } relative rounded-default p-12`}
    >
      <View className="absolute top-2 right-2">
        <Icon.ArrowUpRight
          color={result >= 90 ? colors.success[900] : colors.error[900]}
          size={32}
        />
      </View>

      <View className="justify-center items-center">
        <Wrap.Title>
          {Number.isInteger(result)
            ? result
            : result.toFixed(1).replace(".", ",")}
          %
        </Wrap.Title>

        <Wrap.Content>das refeições dentro da dieta</Wrap.Content>
      </View>
    </TouchableOpacity>
  );
}
