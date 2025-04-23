import { useEffect, useState } from "react";

import { Image, TouchableOpacity, View } from "react-native";

import * as ImagePicker from "expo-image-picker";
import { avatarCreate } from "@storage/Avatar/AvatarCreate";
import { avatarGet } from "@storage/Avatar/AvatarGet";

export function Avatar() {
  const [avatarUri, setAvatarUri] = useState<string | any>(null);

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert("Permissão negada para acessar a galeria.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;

      setAvatarUri(uri);
      await avatarCreate(uri);
    }
  };

  useEffect(() => {
    async function loadAvatar() {
      try {
        const uri = await avatarGet();
        if (uri) setAvatarUri(uri);
      } catch (error) {
        console.log("Erro ao carregar avatar:", error);
      }
    }

    loadAvatar();
  }, []);
  return (
    <TouchableOpacity
      onPress={pickImage}
      className="border-[.25rem] border-neutral-800 rounded-full overflow-hidden size-[3.5rem]"
    >
      <Image
        source={
          avatarUri ? { uri: avatarUri } : require("@images/image-man.webp")
        }
        style={{ width: "100%", height: "100%" }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
}
