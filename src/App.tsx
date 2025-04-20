import { useEffect, useRef, useState } from "react";

import { useFonts } from "expo-font";

import {
  Keyboard,
  Modal,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";

import "@styles/global.css";

import * as SplashScreen from "expo-splash-screen";

import * as Icon from "phosphor-react-native";

import { useForm, Controller } from "react-hook-form";

import { Loader } from "@components/Loader";
import { Header } from "@components/Header";
import { Hero } from "@components/Hero";
import { Button } from "@components/Button";
import { colors } from "./theme";
import { Topic } from "@components/Topic";
import { TopBanner } from "@components/TopBanner";
import { Title } from "@components/Title";
import { Card } from "@components/Card";
import { Input } from "@components/Input";
import { DateInput } from "@components/DateInput";
import { TimeInput } from "@components/TimeInput";
import { RadioButton } from "@components/RadioButton";
import { Feedback } from "@components/Feedback";
import { GroupButton } from "@components/GroupButton";
import { Pill } from "@components/Pill";

const getCurrentTime = () => {
  const now = new Date();
  return now;
};

export default function App() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const {
    setValue,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      data: new Date(),
      timer: getCurrentTime(),
      isOnTheDiet: "",
    },
  });

  const [loaded] = useFonts({
    Nunito: require("./assets/fonts/NunitoSans/NunitoSans.ttf"),
    NunitoItalic: require("./assets/fonts/NunitoSans/NunitoSans-Italic.ttf"),
    NunitoBold: require("./assets/fonts/NunitoSans/NunitoSans-Bold.ttf"),
    NunitoLight: require("./assets/fonts/NunitoSans/NunitoSans-Light.ttf"),
  });

  function onSubmit(data: any) {
    console.log("Form data", data);
  }

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return <Loader />;
  }

  return (
    <>
      {/* <SafeAreaView className="bg-success-600" />

      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <TopBanner />

      <View className="bg-neutral-full min-h-screen pt-6 px-8">
        <Header />

        <Hero />

        <Button className="bg-neutral-800">
          <Icon.Plus size={24} color={colors.neutral.full} />

          <Text className="text-neutral-full font-nunitoBold text-lg">
            Nova refeição
          </Text>
        </Button>

        <Topic.Wrapper>
          <Topic.Content>
            <Topic.Title>20:00</Topic.Title>

            <Topic.Separator />

            <Topic.Description>X-tudo</Topic.Description>
          </Topic.Content>

          <Topic.Error />
        </Topic.Wrapper>

        <Title>12.08.22</Title>

        <Card.Error>
          <Card.Title>22</Card.Title>
          <Card.Text>melhor sequência de pratos dentro da dieta</Card.Text>
        </Card.Error>

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
          <Text style={{ color: "red" }}>{errors.name.message as string}</Text>
        )}

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
              multiline
              numberOfLines={6}
              className="h-[10rem]"
              textAlignVertical="top"
            />
          )}
        />

        {errors.description && (
          <Text style={{ color: "red" }}>
            {errors.description.message as string}
          </Text>
        )}

        <Title className="text-xl text-neutral-800">Data</Title>

        <Controller
          control={control}
          name="data"
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <DateInput mode="date" value={value} onChange={onChange} />
          )}
        />

        <Title className="text-xl text-neutral-800">Hora</Title>

        <Controller
          control={control}
          name="timer"
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

        <Title className="text-xl text-neutral-800">
          Está dentro da dieta?
        </Title>

        <Controller
          control={control}
          name="isOnTheDiet"
          render={({ field: { onChange, value } }) => (
            <View className="flex-row gap-4">
              <RadioButton.Success
                label="Sim"
                value="yes"
                selected={value === "yes"}
                onSelect={onChange}
              />

              <RadioButton.Error
                label="Não"
                value="no"
                selected={value === "no"}
                onSelect={onChange}
              />
            </View>
          )}
        />

        <Button onPress={handleSubmit(onSubmit)} className="bg-neutral-800">
          <Text className="text-neutral-full font-nunitoBold text-lg">
            Cadastrar refeição
          </Text>
        </Button>
      </View> 
      
      <Feedback.Negative />
      
      <View className="flex-1 justify-center bg-neutral-full px-10">
        <GroupButton.Vertical>
          <Button className="border border-neutral-800 bg-neutral-800">
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

      <View className="flex-1 w-full justify-center bg-neutral-full px-10">
        <GroupButton.Horizontal>
          <Button className="flex-1 border border-neutral-900">
            <Text className="text-neutral-900 font-nunitoBold text-lg">
              Cancelar
            </Text>
          </Button>

          <Button className="flex-1 border border-neutral-800 bg-neutral-800">
            <Text className="text-neutral-full font-nunitoBold text-lg">
              Sim, excluir
            </Text>
          </Button>
        </GroupButton.Horizontal>
      </View>

      <View className="flex-1 justify-center bg-neutral-full px-10">
        <Pill.Negative />
      </View>
      */}

      <View className="flex-1 w-full justify-center bg-neutral-full px-10">
        <Button
          className="border border-neutral-800 bg-neutral-800"
          onPress={() => setIsVisibleModal(true)}
        >
          <Title className="text-neutral-full">Abrir modal</Title>
        </Button>

        <Modal
          transparent={true}
          visible={isVisibleModal}
          onRequestClose={() => setIsVisibleModal(false)}
        >
          <View className="flex-1 justify-center items-center p-5 bg-black/50">
            <View className="p-8 bg-neutral-full rounded-default gap-y-8">
              <Title className="text-center">
                Deseja realmente excluir o registro da refeição?
              </Title>

              <GroupButton.Horizontal>
                <Button
                  onPress={() => setIsVisibleModal(false)}
                  className="border border-neutral-900"
                >
                  <Text className="text-neutral-900 font-nunitoBold text-lg">
                    Cancelar
                  </Text>
                </Button>

                <Button
                  onPress={() => setIsVisibleModal(false)}
                  className="border border-neutral-800 bg-neutral-800"
                >
                  <Text className="text-neutral-full font-nunitoBold text-lg">
                    Sim, excluir
                  </Text>
                </Button>
              </GroupButton.Horizontal>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}
