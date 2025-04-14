import { Text, View } from "react-native";

interface TopicProps {
  isDiet?: boolean;
}
export function Topic({ isDiet }: TopicProps) {
  return (
    <View className="flex-row items-center justify-between border border-neutral-300 p-6 rounded-default">
      <View className="flex-row items-center gap-4">
        <Text className="font-nunitoBold text-lg">20:00</Text>

        <View className="w-px h-6 bg-neutral-400"></View>

        <Text className="font-nunito text-lg">X-tudo</Text>
      </View>

      <View
        className={`size-6 rounded-full ${
          isDiet ? "bg-success-600" : "bg-error-600"
        }`}
      />
    </View>
  );
}
