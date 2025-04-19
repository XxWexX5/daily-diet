import { TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  className?: string;
}

export function Button({ className, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      className={`flex-row items-center justify-center py-6 px-8 rounded-default gap-4 ${className}`}
      {...rest}
    ></TouchableOpacity>
  );
}
