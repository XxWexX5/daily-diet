import { Text } from "react-native";

interface ContentTextProps {
  children: React.ReactNode;
  className?: string;
}

function Title({ children, className }: ContentTextProps) {
  return (
    <Text
      className={`font-nunitoBold text-neutral-900 text-4xl ${className || ""}`}
    >
      {children}
    </Text>
  );
}

function Content({ children, className }: ContentTextProps) {
  return (
    <Text
      className={`font-nunitoLight text-neutral-900 text-base ${
        className || ""
      }`}
    >
      {children}
    </Text>
  );
}

export const Wrap = {
  Title,
  Content,
};
