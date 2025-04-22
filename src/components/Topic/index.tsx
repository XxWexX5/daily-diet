import { Text, TextProps, TouchableOpacity, View } from "react-native";
import { twMerge } from "tailwind-merge";

interface TopicProps {
  className?: string;
  children: React.ReactNode;
  onPress?: () => void;
}

function Title({ children, ...rest }: TextProps) {
  return (
    <Text className="font-nunitoBold text-lg" {...rest}>
      {children}
    </Text>
  );
}

function Separator() {
  return <View className="w-px h-6 bg-neutral-400"></View>;
}

function Description({ children, ...rest }: TextProps) {
  return (
    <Text
      className="font-nunito text-lg max-w-[13rem]"
      numberOfLines={1}
      ellipsizeMode="tail"
      {...rest}
    >
      {children}
    </Text>
  );
}

function Error() {
  return <View className="size-6 rounded-full bg-error-600" />;
}

function Success() {
  return <View className="size-6 rounded-full bg-success-600" />;
}

function Content({ children }: { children: React.ReactNode }) {
  return <View className="flex-row items-center gap-4">{children}</View>;
}
function Wrapper({ children, onPress, className }: TopicProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={twMerge(
        `flex-row items-center justify-between border border-neutral-300 p-5 rounded-default ${className}`
      )}
    >
      {children}
    </TouchableOpacity>
  );
}

export const Topic = {
  Wrapper,
  Content,
  Title,
  Separator,
  Description,
  Error,
  Success,
};
