import { StatsCalculator } from './../src/stats_calculator';

describe('Stats Calculator', () => {
  const stats = [2, 4, 21, -8, 53, 40];
  let statsCalculator: StatsCalculator;

  beforeEach(() => {
    statsCalculator = new StatsCalculator(stats);
  });

  test('should be able to determine the minimum value from the list of integers', () => {
    const result = statsCalculator.minimumValue();

    expect(result).toBe<number>(-8);
  });

  test('should be able to determine the maximum value from the list of integers', () => {
    const result = statsCalculator.maximumValue();

    expect(result).toBe<number>(53);
  });

  test('should be able to determine the number of elements in the sequence', () => {
    expect(statsCalculator.numberOfElements()).toBe<number>(6);
  });
});
