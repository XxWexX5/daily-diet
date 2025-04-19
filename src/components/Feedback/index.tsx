import { Button } from "@components/Button";
import { Title } from "@components/Title";
import { Image, Text, View } from "react-native";

function Positive() {
  return (
    <View className="flex-1 gap-8 items-center justify-center bg-neutral-full px-6">
      <View className="items-center gap-2">
        <Title className="text-success-900 text-3xl">Continue assim!</Title>

        <Title className="font-nunitoLight text-xl">
          Você continua{" "}
          <Text className="font-nunitoBold">dentro da dieta.</Text> Muito bem!
        </Title>
      </View>

      <View className="w-[250px] h-[330px]">
        <Image
          source={require("@images/image-woman-happy.jpg")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
        />
      </View>

      <Button className="bg-neutral-800 px-8">
        <Text className="text-neutral-full font-nunitoBold text-lg">
          Ir para a página inicial
        </Text>
      </Button>
    </View>
  );
}

function Negative() {
  return (
    <View className="flex-1 gap-8 items-center justify-center bg-neutral-full px-6">
      <View className="items-center gap-2">
        <Title className="text-error-900 text-3xl">Que pena!</Title>

        <Title className="font-nunitoLight text-xl text-center">
          Você <Text className="font-nunitoBold">saiu da dieta</Text> dessa vez,
          mas continue se esforçando e não desista!
        </Title>
      </View>

      <View className="w-[250px] h-[330px]">
        <Image
          source={require("@images/image-man-sad.jpg")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
        />
      </View>

      <Button className="bg-neutral-800 px-8">
        <Text className="text-neutral-full font-nunitoBold text-lg">
          Ir para a página inicial
        </Text>
      </Button>
    </View>
  );
}

export const Feedback = {
  Positive,
  Negative,
};
