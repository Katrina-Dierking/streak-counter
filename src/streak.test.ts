import {
  buildStreakCount,
  resetStreakCount,
  incrementStreakCount,
} from "./lib";

describe("buildStreakCount", () => {
  it("should return a streakCount object", () => {
    const currentDate = new Date();
    const actual = buildStreakCount(currentDate);

    expect(Object.prototype.hasOwnProperty.call(actual, "currentCount")).toBe(
      true
    );
    expect(Object.prototype.hasOwnProperty.call(actual, "startDate")).toBe(
      true
    );
    expect(Object.prototype.hasOwnProperty.call(actual, "lastLoginDate")).toBe(
      true
    );

    expect(actual.startDate).toBe(currentDate);
    expect(actual.lastLoginDate).toBe(currentDate);
    expect(actual.currentCount).toBe(1);
  });
});

describe("resetStreakCount", () => {
  it("should reset the date and count", () => {
    const currentDate = new Date();
    const fakeStreakCount = {
      currentCount: 5,
      startDate: new Date(),
    };

    const updatedStreakCount = resetStreakCount(fakeStreakCount, currentDate);

    expect(updatedStreakCount.startDate).toBe(currentDate);
    expect(updatedStreakCount.currentCount).toBe(1);
  });
});

describe("incrementStreakCount", () => {
  it("should increment the currentCount", () => {
    const fakeStreakCount = {
      currentCount: 5,
      startDate: new Date(),
    };

    const updatedStreakCount = incrementStreakCount(fakeStreakCount);

    expect(updatedStreakCount.currentCount).toBe(6);
  });
});

/*

TODO@jsjoeio
shouldIncrementOrResetStreakCount
returns a boolean value indicating whether or not you should
increment the streak count

function shouldIncrementOrResetStreakCount(currentDate: Date, lastLoginDate: Date): IncrementDetails

import { differenceInDays } from 'date-fns'

params: currentDate, lastLoginDate (of streak)

const difference = differenceInDays(currentDate, lastLoginDate)

const incrementDetails = {
  shouldIncrement: boolean,
  shouldReset: boolean,
}

// logging in on the same day
if (difference === 0) {
  return {
    shouldIncrement: false,
    shouldReset: false,
  }
}

// This means they logged in the day after - the current
if (difference === 1) {
  return {
    shouldIncrement: true,
    shouldReset: false,
  }
}

// Otherwise, they logged in after a day, which
// would break the streak
  return {
    shouldIncrement: false,
    shouldReset: true,
  }
*/
