import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Statistic } from "@screens/Statistic";
import { Meal } from "@screens/Meal";

export type RootStackParamList = {
  home: undefined;
  statistic: {
    result: number;
  };
  meal: {
    isOnDiet: boolean;
  };
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
      <Screen name="home" component={Home} />
      <Screen name="statistic" component={Statistic} />
      <Screen name="meal" component={Meal} />
    </Navigator>
  );
}
