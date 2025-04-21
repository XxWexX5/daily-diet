import {
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

import { useRoute } from "@react-navigation/native";

import * as Icon from "phosphor-react-native";

import { colors } from "@theme/index";

import { Wrap } from "@components/Wrap";
import { Title } from "@components/Title";
import { Pill } from "@components/Pill";
import { GroupButton } from "@components/GroupButton";
import { Button } from "@components/Button";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "@routes/app.routes";
import { useNavigation } from "@react-navigation/native";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export function Meal() {
  const navigate = useNavigation<NavigationProps>();

  const route = useRoute();

  const { isOnDiet } = route.params as { isOnDiet: boolean };

  return (
    <>
      <SafeAreaView
        className={`${isOnDiet ? "bg-success-500" : "bg-error-500"}`}
      />

      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <View
        className={`relative ${
          isOnDiet ? "bg-success-500" : "bg-error-500"
        } flex-row py-8 items-center`}
      >
        <TouchableOpacity
          onPress={() => navigate.goBack()}
          className="absolute top-5 left-0 w-20 h-14 px-8 z-10"
        >
          <Icon.ArrowLeft
            color={isOnDiet ? colors.success[900] : colors.error[900]}
            size={32}
          />
        </TouchableOpacity>

        <Wrap.Title className="flex-1 text-center text-[1.5rem] -mt-3">
          Refeição
        </Wrap.Title>
      </View>

      <View className="px-8 py-10 bg-neutral-full flex-1 rounded-3xl">
        <View className="flex-1 gap-y-8">
          <View className="gap-y-1">
            <Title>Sanduíche</Title>

            <Text className="font-nunitoLight text-neutral-900 text-xl">
              Sanduíche de pão integral com atum e salada de alface e tomate.
            </Text>
          </View>

          <View className="gap-y-1">
            <Title className="text-xl">Data e hora</Title>

            <Text className="font-nunitoLight text-neutral-900 text-xl">
              12/08/2022 às 16:00
            </Text>
          </View>

          {isOnDiet ? <Pill.Positive /> : <Pill.Negative />}
        </View>

        <GroupButton.Vertical>
          <Button
            onPress={() => navigate.navigate("edit")}
            className="border border-neutral-800 bg-neutral-800"
          >
            <Icon.PencilSimpleLine size={24} color={colors.neutral.full} />

            <Text className="text-neutral-full font-nunitoBold text-lg">
              Editar refeição
            </Text>
          </Button>

          <Button className="border border-neutral-900">
            <Icon.Trash size={24} color={colors.neutral[900]} />

            <Text className="text-neutral-900 font-nunitoBold text-lg">
              Excluir refeição
            </Text>
          </Button>
        </GroupButton.Vertical>
      </View>
    </>
  );
}
