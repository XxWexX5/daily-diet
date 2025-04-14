import { Text } from "react-native";

interface GroupTextProps {
  title: string;
  text: string;
}

export function GroupText({ title, text }: GroupTextProps) {
  return (
    <>
      <Text className="font-nunitoBold text-4xl">{title}</Text>
      <Text className="font-nunitoLight text-base">{text}</Text>
    </>
  );
}
