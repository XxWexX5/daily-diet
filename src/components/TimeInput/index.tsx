import { useState } from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Portal } from "react-native-portalize";

import { colors } from "@theme/index";

export function TimeInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (date: Date) => void;
}) {
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
        <Text>{value}</Text>
      </Pressable>

      <Portal>
        <DateTimePickerModal
          isVisible={showPicker}
          mode="time"
          onConfirm={handleConfirm}
          onCancel={hide}
          is24Hour={true}
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
  },
});
