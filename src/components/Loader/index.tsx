import { useEffect, useRef } from "react";
import { View, Animated, StyleSheet } from "react-native";

export function Loader() {
  const anims = [
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
  ];

  useEffect(() => {
    anims.forEach((anim, index) => {
      Animated.loop(
        Animated.sequence([
          Animated.delay(index * 100),
          Animated.timing(anim, {
            toValue: -10,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(anim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
        ])
      ).start();
    });
  }, []);

  return (
    <View className="flex-row justify-center gap-2">
      {anims.map((translateY, idx) => (
        <Animated.View
          key={idx}
          style={[styles.dot, { transform: [{ translateY }] }]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    backgroundColor: "#1B1D1E",
    borderRadius: 5,
  },
});
