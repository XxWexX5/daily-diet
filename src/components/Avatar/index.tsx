import { Image, View } from "react-native";

export function Avatar() {
  return (
    <View className="border-[.25rem] border-neutral-800 rounded-full overflow-hidden w-[4.5rem] h-[4.5rem]">
      <Image
        source={require("@images/image-man.webp")}
        style={{ width: "100%", height: "100%" }}
        resizeMode="cover"
      />
    </View>
  );
}
