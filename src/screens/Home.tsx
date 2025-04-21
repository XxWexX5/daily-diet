import { View, Text, SafeAreaView, StatusBar } from "react-native";

import { Header } from "@components/Header";
import { Hero } from "@components/Hero";
import { Title } from "@components/Title";
import { Topic } from "@components/Topic";
import { Button } from "@components/Button";

import * as Icon from "phosphor-react-native";

import { colors } from "@theme/index";

export function Home() {
  return (
    <>
      <SafeAreaView className="bg-neutral-full" />

      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <View className="bg-neutral-full min-h-screen gap-10 pt-6 px-8">
        <Header />

        <Hero result={80} />

        <View className="gap-2">
          <Topic.Title className="font-nunitoLight text-xl">
            Refeições
          </Topic.Title>

          <Button className="bg-neutral-800">
            <Icon.Plus size={24} color={colors.neutral.full} />

            <Text className="text-neutral-full font-nunitoBold text-lg">
              Nova refeição
            </Text>
          </Button>
        </View>

        <View className="gap-2">
          <Title className="text-2xl">12.08.22</Title>

          <View className="gap-4">
            <Topic.Wrapper>
              <Topic.Content>
                <Topic.Title>20:00</Topic.Title>

                <Topic.Separator />

                <Topic.Description>X-tudo</Topic.Description>
              </Topic.Content>

              <Topic.Error />
            </Topic.Wrapper>

            <Topic.Wrapper>
              <Topic.Content>
                <Topic.Title>16:00</Topic.Title>

                <Topic.Separator />

                <Topic.Description>Whey protein com leite</Topic.Description>
              </Topic.Content>

              <Topic.Success />
            </Topic.Wrapper>

            <Topic.Wrapper>
              <Topic.Content>
                <Topic.Title>12:30</Topic.Title>

                <Topic.Separator />

                <Topic.Description>
                  Salada cesar com frango grelhado
                </Topic.Description>
              </Topic.Content>

              <Topic.Success />
            </Topic.Wrapper>

            <Topic.Wrapper>
              <Topic.Content>
                <Topic.Title>09:30</Topic.Title>

                <Topic.Separator />

                <Topic.Description>
                  Vitamina de banana com abacate
                </Topic.Description>
              </Topic.Content>

              <Topic.Success />
            </Topic.Wrapper>
          </View>

          <Title className="text-2xl">11.08.22</Title>

          <View className="gap-4">
            <Topic.Wrapper>
              <Topic.Content>
                <Topic.Title>20:00</Topic.Title>

                <Topic.Separator />

                <Topic.Description>X-tudo</Topic.Description>
              </Topic.Content>

              <Topic.Error />
            </Topic.Wrapper>

            <Topic.Wrapper>
              <Topic.Content>
                <Topic.Title>16:00</Topic.Title>

                <Topic.Separator />

                <Topic.Description>Whey protein com leite</Topic.Description>
              </Topic.Content>

              <Topic.Success />
            </Topic.Wrapper>

            <Topic.Wrapper>
              <Topic.Content>
                <Topic.Title>12:30</Topic.Title>

                <Topic.Separator />

                <Topic.Description>
                  Salada cesar com frango grelhado
                </Topic.Description>
              </Topic.Content>

              <Topic.Success />
            </Topic.Wrapper>

            <Topic.Wrapper>
              <Topic.Content>
                <Topic.Title>09:30</Topic.Title>

                <Topic.Separator />

                <Topic.Description>
                  Vitamina de banana com abacate
                </Topic.Description>
              </Topic.Content>

              <Topic.Success />
            </Topic.Wrapper>
          </View>
        </View>
      </View>
    </>
  );
}
