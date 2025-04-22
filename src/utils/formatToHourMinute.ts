export function formatToHourMinute(dateInput: any): string {
    const date = new Date(dateInput);

    if (isNaN(date.getTime())) {
      console.error("Data inválida:", dateInput);
      return "";
    }

    const hours = String(date?.getHours()).padStart(2, '0');
    const minutes = String(date?.getMinutes()).padStart(2, '0');
  
    return `${hours}:${minutes}`;
}