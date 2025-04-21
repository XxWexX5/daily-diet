import { Text, Pressable, StyleSheet } from "react-native";

import DateTimePickerModal from "react-native-modal-datetime-picker";

import { colors } from "@theme/index";
import { useState } from "react";
import { Portal } from "react-native-portalize";

type DateInputProps = {
  value?: Date;
  onChange: (date: Date) => void;
  mode: "date" | "time";
};

export function DateInput({ value, onChange, mode }: DateInputProps) {
  const [showPicker, setShowPicker] = useState(false);

  const show = () => setShowPicker(true);
  const hide = () => setShowPicker(false);

  const handleConfirm = (date: Date) => {
    onChange(date);
    hide();
  };

  return (
    <>
      <Pressable style={styles.input} onPress={show}>
        <Text>{value?.toLocaleDateString("pt-BR")}</Text>
      </Pressable>

      <Portal>
        <DateTimePickerModal
          isVisible={showPicker}
          mode={mode}
          onConfirm={handleConfirm}
          onCancel={hide}
          locale="pt-BR"
        />
      </Portal>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.neutral[300],
    padding: 20,
    borderRadius: 12,
    color: colors.neutral[900],
    zIndex: 100,
  },
});
