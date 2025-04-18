import { useState } from "react";

import { Text, Pressable, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { colors } from "@theme/index";

export function DateInput() {
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);

  const handleConfirm = (selectedDate: Date) => {
    setDate(selectedDate);
    hideDatePicker();
  };

  return (
    <>
      <Pressable style={styles.input} onPress={showDatePicker}>
        <Text>{date.toLocaleDateString("pt-BR")}</Text>
      </Pressable>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
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
