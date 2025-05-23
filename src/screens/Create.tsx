import { useState } from "react";

import {
  Keyboard,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { Feedback } from "@components/Feedback";

import * as Icon from "phosphor-react-native";

import { colors } from "@theme/index";

import { Wrap } from "@components/Wrap";
import { Button } from "@components/Button";
import { Title } from "@components/Title";
import { Input } from "@components/Input";
import { DateInput } from "@components/DateInput";
import { TimeInput } from "@components/TimeInput";
import { RadioButton } from "@components/RadioButton";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "@routes/app.routes";
import { mealCreate, MealType } from "@storage/Meal/mealCreate";

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const getCurrentTime = () => {
  const now = new Date();
  return now;
};

export function Create() {
  const [showFeedback, setShowFeedback] = useState(false);
  const navigate = useNavigation<NavigationProps>();

  const route = useRoute();

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: "",
      name: "",
      description: "",
      data: new Date(),
      time: getCurrentTime(),
      isOnDiet: "",
    },
  });

  async function onSubmit(data: MealType) {
    if (data) {
      const generateId = () => {
        const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

        return id;
      };

      await mealCreate({
        id: generateId(),
        name: data.name,
        description: data.description,
        data: data.data,
        time: data.time,
        isOnDiet: data.isOnDiet,
      });

      return setShowFeedback(true);
    }
  }

  const { isOnDiet } = getValues();

  if (showFeedback && isOnDiet === "1") {
    return <Feedback.Positive />;
  }

  if (showFeedback && isOnDiet === "0") {
    return <Feedback.Negative />;
  }

  return (
    <SafeAreaView className="bg-neutral-300 flex-1">
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <View className="bg-neutral-300 flex-1">
        <View className={`relative flex-row py-8 items-center`}>
          <TouchableOpacity
            onPress={() => navigate.goBack()}
            className="absolute top-5 left-0 w-20 h-14 px-8 z-10"
          >
            <Icon.ArrowLeft color={colors.neutral[800]} size={32} />
          </TouchableOpacity>

          <Wrap.Title className="flex-1 text-center text-[1.5rem] -mt-3">
            Nova refeição
          </Wrap.Title>
        </View>

        <View className="px-8 py-10 bg-neutral-full flex-1 rounded-3xl">
          <View className="flex-1 gap-y-6">
            <View className="gap-y-2">
              <Title className="text-xl text-neutral-800">Nome</Title>

              <Controller
                control={control}
                name="name"
                rules={{ required: "Nome é obrigatório" }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="Digite o nome"
                    keyboardType="ascii-capable"
                    value={value}
                    onChangeText={onChange}
                    onBlur={() => Keyboard.dismiss()}
                  />
                )}
              />

              {errors.name && (
                <Text className="text-red-500 text-sm">
                  {errors.name.message as string}
                </Text>
              )}
            </View>

            <View className="gap-y-2">
              <Title className="text-xl text-neutral-800">Descrição</Title>

              <Controller
                control={control}
                name="description"
                rules={{ required: "Descrição é obrigatório" }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    value={value}
                    onChangeText={onChange}
                    onBlur={() => Keyboard.dismiss()}
                    placeholder="Digite a descrição"
                    className="overflow-hidden"
                  />
                )}
              />

              {errors.description && (
                <Text className="text-red-500 text-sm">
                  {errors.description.message as string}
                </Text>
              )}
            </View>

            <View className="gap-4 flex-row">
              <View className="flex-1 gap-y-2">
                <Title className="text-xl text-neutral-800">Data</Title>

                <Controller
                  control={control}
                  name="data"
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <DateInput mode="date" value={value} onChange={onChange} />
                  )}
                />
              </View>

              <View className="flex-1 gap-y-2">
                <Title className="text-xl text-neutral-800">Hora</Title>

                <Controller
                  control={control}
                  name="time"
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <TimeInput
                      value={value.toLocaleTimeString("pt-BR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                      onChange={onChange}
                    />
                  )}
                />
              </View>
            </View>

            <View className="gap-y-2">
              <Title className="text-xl text-neutral-800">
                Está dentro da dieta?
              </Title>

              <Controller
                control={control}
                name="isOnDiet"
                rules={{ required: "Está dentro da dieta é obrigatório" }}
                render={({ field: { onChange, value } }) => (
                  <View className="flex-row gap-4">
                    <RadioButton.Success
                      label="Sim"
                      value="1"
                      selected={value === "1"}
                      onSelect={onChange}
                    />

                    <RadioButton.Error
                      label="Não"
                      value="0"
                      selected={value === "0"}
                      onSelect={onChange}
                    />
                  </View>
                )}
              />

              {errors.isOnDiet && (
                <Text className="text-red-500 text-sm">
                  {errors.isOnDiet.message as string}
                </Text>
              )}
            </View>
          </View>

          <Button onPress={handleSubmit(onSubmit)} className="bg-neutral-800">
            <Text className="text-neutral-full font-nunitoBold text-lg">
              Cadastrar refeição
            </Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
