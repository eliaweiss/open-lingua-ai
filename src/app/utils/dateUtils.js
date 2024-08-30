export const todayStartTime = () => new Date().setHours(0, 0, 0, 0);

export const isSameDay = (timestamp1, timestamp2) => {
  const date1 = new Date(timestamp1);
  const date2 = new Date(timestamp2);
  return date1.toDateString() === date2.toDateString();
};

// ... other date-related functions