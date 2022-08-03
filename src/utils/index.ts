export const dataFormatter = (date: string) => {
  const newDate = new Date(date);
  return `${newDate.toLocaleDateString("en-US")} - ${newDate.toLocaleTimeString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  )}`;
};
