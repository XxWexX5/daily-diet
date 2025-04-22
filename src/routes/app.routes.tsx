import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Statistic } from "@screens/Statistic";
import { Meal } from "@screens/Meal";
import { Create } from "@screens/Create";
import { Edit } from "@screens/Edit";

export type RootStackParamList = {
  home: undefined;
  statistic: {
    result: number;
  };
  meal: {
    isOnDiet: boolean;
    data: string;
    time: string;
    item: string;
    description: string;
  };
  create: undefined;
  edit: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} initialRouteName="home">
      <Screen name="home" component={Home} />
      <Screen name="statistic" component={Statistic} />
      <Screen name="meal" component={Meal} />
      <Screen
        name="create"
        component={Create}
        options={{ presentation: "card" }}
      />
      <Screen name="edit" component={Edit} />
    </Navigator>
  );
}
