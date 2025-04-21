import { TextInput, TextInputProps } from "react-native";

import { twMerge } from "tailwind-merge";

type InputProps = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};
export function Input({ inputRef, className, ...rest }: InputProps) {
  return (
    <TextInput
      ref={inputRef}
      className={twMerge(
        `border border-neutral-300 px-6 h-16 align-middle rounded-default text-neutral-900 font-nunitoLight text-lg ${className}`
      )}
      {...rest}
    />
  );
}
