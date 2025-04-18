import { Text, Pressable, StyleSheet } from "react-native";
import DateTimePickerModal, {
  DateTimePickerProps,
} from "react-native-modal-datetime-picker";

import { colors } from "@theme/index";

type DateInputProps = DateTimePickerProps & {
  data?: Date | string;
  showDatePicker?: () => void;
  isDatePickerVisible?: boolean;
};

export function DateInput({
  data,
  showDatePicker,
  isDatePickerVisible,
  ...rest
}: DateInputProps) {
  return (
    <>
      <Pressable style={styles.input} onPress={showDatePicker}>
        <Text>{data as string}</Text>
      </Pressable>

      <DateTimePickerModal isVisible={isDatePickerVisible || false} {...rest} />
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
