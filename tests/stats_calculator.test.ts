import { StatsCalculator } from './../src/stats_calculator';

describe('Stats Calculator', () => {
  test('should be able to determine the minimum value from the list of integers', () => {
    const stats = [2, 4, 21, -8, 53, 40];
    const statsCalculator = new StatsCalculator(stats);

    expect(statsCalculator.minimumValue()).toBe<number>(-8);
  });

  test('should be able to determine the maximum value from the list of integers', () => {
    const stats = [2, 4, 21, -8, 53, 40];
    const statsCalculator = new StatsCalculator(stats);

    expect(statsCalculator.maximumValue()).toBe<number>(53);
  });
});
