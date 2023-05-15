export function buildStreakCount(date: Date) {
  return {
    startDate: date,
    lastLoginDate: date,
    currentCount: 1,
  };
}

export function resetStreakCount(
  currentStreakCount: { startDate: Date; currentCount: number },
  date: Date
) {
  return {
    startDate: date,
    currentCount: 1,
  };
}

export function incrementStreakCount(currentStreakCount: {
  startDate: Date;
  currentCount: number;
}) {
  return {
    ...currentStreakCount,
    currentCount: currentStreakCount.currentCount += 1,
  };
}
