import { Fibonacci } from './../src/fibonacci';

describe('Fibonacci', () => {
  it('should throw an Error if input is not a positive integers', () => {
    // Arrange (Given) - preconditions
    const fibonacci = new Fibonacci();

    // Act (When) - act out the behavior
    const result = (): number => fibonacci.parseNumber(-1);

    // Assert (Then) - postconditions
    expect(result).toThrowError();
  });

  it('should generate the Fobonacci number for 4 position', () => {
    // Arrange (Given) - preconditions
    const fibonacci = new Fibonacci();

    // Act (When) - act out the behavior
    const result = fibonacci.parseNumber(4);

    // Assert (Then) - postconditions
    expect(result).toBe<number>(3);
  });
});
