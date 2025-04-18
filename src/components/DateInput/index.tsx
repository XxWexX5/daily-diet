import { Text, Pressable, StyleSheet } from "react-native";
import DateTimePickerModal, {
  DateTimePickerProps,
} from "react-native-modal-datetime-picker";

import { colors } from "@theme/index";
import { useState } from "react";

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

      <DateTimePickerModal
        isVisible={showPicker}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hide}
        locale="pt-BR"
      />
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
