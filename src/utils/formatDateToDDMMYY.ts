export function formatDateToDDMMYY(dateInput: any): string {
    const date = new Date(dateInput);

    if (isNaN(date.getTime())) {
      console.error("Data inválida:", dateInput);
      return "";
    }
  
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
  
    return `${day}/${month}/${year}`;
  }