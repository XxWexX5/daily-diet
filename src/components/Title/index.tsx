import { Text } from "react-native";

interface TitleProps {
  content: string;
}

export function Title({ content }: TitleProps) {
  return <Text className="font-nunitoBold text-2xl">{content}</Text>;
}
