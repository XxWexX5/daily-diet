import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Statistic } from "@screens/Statistic";

export type RootStackParamList = {
  home: undefined;
  statistic: {
    result: number;
  };
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
      <Screen name="home" component={Home} />
      <Screen name="statistic" component={Statistic} />
    </Navigator>
  );
}
