import { TextInput, TextInputProps } from "react-native";

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="border border-neutral-300 p-5 rounded-default text-neutral-900 font-nunitoLight text-lg"
      {...rest}
    />
  );
}
