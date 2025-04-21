import { ReactNode } from "react";

import { Text, TextProps } from "react-native";
import { twMerge } from "tailwind-merge";

type TitleProps = TextProps & {
  children: ReactNode;
};

export function Title({ children, className, ...rest }: TitleProps) {
  return (
    <Text
      className={twMerge(
        `font-nunitoBold text-neutral-900 text-2xl ${className}`
      )}
      {...rest}
    >
      {children}
    </Text>
  );
}
