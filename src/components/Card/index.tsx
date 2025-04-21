import { Wrap } from "@components/Wrap";
import { View } from "react-native";

function Title({ children }: { children: React.ReactNode }) {
  return <Wrap.Title>{children}</Wrap.Title>;
}

function Text({ children }: { children: React.ReactNode }) {
  return <Wrap.Content className="px-4 text-center">{children}</Wrap.Content>;
}
function Primary({ children }: { children: React.ReactNode }) {
  return (
    <View className="bg-neutral-200 items-center py-10 rounded-default">
      {children}
    </View>
  );
}

function Success({ children }: { children: React.ReactNode }) {
  return (
    <View className="flex-1 bg-success-500 items-center py-10 rounded-default">
      {children}
    </View>
  );
}

function Error({ children }: { children: React.ReactNode }) {
  return (
    <View className="flex-1 bg-error-500 items-center py-10 rounded-default">
      {children}
    </View>
  );
}

export const Card = {
  Primary,
  Success,
  Error,
  Text,
  Title,
};
