import { Avatar } from "@components/Avatar";
import { Logo } from "@components/Logo";
import { View } from "react-native";

export function Header() {
  return (
    <View className="flex-row w-full justify-between">
      <Logo />

      <Avatar />
    </View>
  );
}
