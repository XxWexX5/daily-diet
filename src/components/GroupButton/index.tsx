import { ReactNode } from "react";

import { View } from "react-native";

interface GroupButtonProps {
  children: ReactNode;
}

function Vertical({ children }: GroupButtonProps) {
  return <View className="w-full gap-3">{children}</View>;
}

function Horizontal({ children }: GroupButtonProps) {
  return <View className="w-full flex-row gap-3">{children}</View>;
}

export const GroupButton = {
  Vertical,
  Horizontal,
};
