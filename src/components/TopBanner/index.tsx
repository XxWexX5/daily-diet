import { TouchableOpacity, View } from "react-native";

import * as Icon from "phosphor-react-native";

import { colors } from "@theme/index";

import { Wrap } from "@components/Wrap";

import { RootStackParamList } from "@routes/app.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

interface TopBannerProps {
  result: number;
}

export function TopBanner({ result }: TopBannerProps) {
  const navigate = useNavigation<NavigationProps>();

  return (
    <View
      className={`${
        result >= 90 ? "bg-success-500" : "bg-error-500"
      } py-14 items-center`}
    >
      <TouchableOpacity
        onPress={() => navigate.navigate("home")}
        className="absolute top-2 left-6 w-20 h-14"
      >
        <Icon.ArrowLeft
          color={result >= 90 ? colors.success[900] : colors.error[900]}
          size={32}
        />
      </TouchableOpacity>

      <Wrap.Title>
        {Number.isInteger(result)
          ? result
          : result.toFixed(1).replace(".", ",")}
        %
      </Wrap.Title>
      <Wrap.Content>das refeições dentro da dieta</Wrap.Content>
    </View>
  );
}
