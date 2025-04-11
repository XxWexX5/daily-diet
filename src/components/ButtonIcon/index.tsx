import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

type ButtonIconProps = TouchableOpacityProps & {
  type: "primary" | "secondary";
  icon: keyof typeof MaterialIcons.glyphMap;
};

import { colors } from "@theme/index";

export function ButtonIcon({ type, icon, ...rest }: ButtonIconProps) {
  return (
    <TouchableOpacity
      className="size-[6vw] justify-center items-center"
      {...rest}
    >
      <MaterialIcons
        name={icon}
        size={24}
        color={type === "primary" ? colors.neutral[900] : colors.neutral[500]}
      />
    </TouchableOpacity>
  );
}
