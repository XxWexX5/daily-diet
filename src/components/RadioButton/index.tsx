import { Title } from "@components/Title";
import { View, Text, TouchableOpacity } from "react-native";
import { twMerge } from "tailwind-merge";

interface RadioButtonProps {
  label: string;
  value: string;
  selected: boolean;
  onSelect: (value: string) => void;
}

function Success({ label, value, selected, onSelect }: RadioButtonProps) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(value)}
      className={twMerge(
        `flex-1 border-2 border-neutral-200 flex-row items-center justify-center gap-4 w-full bg-neutral-200 py-4 rounded-default ${
          selected && "border-success-900 bg-success-500"
        }`
      )}
    >
      <View className="size-3 rounded-full bg-success-900"></View>
      <Title className="text-xl">{label}</Title>
    </TouchableOpacity>
  );
}

function Error({ label, value, selected, onSelect }: RadioButtonProps) {
  return (
    <TouchableOpacity
      onPress={() => onSelect(value)}
      className={twMerge(
        `flex-1 border-2 border-neutral-200 flex-row items-center justify-center gap-4 w-full bg-neutral-200 py-4 rounded-default ${
          selected && "border-error-900 bg-error-500"
        }`
      )}
    >
      <View className="size-3 rounded-full bg-error-900"></View>
      <Title className="text-xl">{label}</Title>
    </TouchableOpacity>
  );
}

export const RadioButton = {
  Success,
  Error,
};
