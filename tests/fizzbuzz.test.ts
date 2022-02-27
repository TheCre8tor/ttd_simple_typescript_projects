import { FizzBuzz } from './../src/fizzbuzz';

describe('FizzBuzz', () => {
  let fizzbuzz: FizzBuzz;

  beforeEach(() => {
    fizzbuzz = new FizzBuzz();
  });

  it('should throw an Error if numbers is less than 1', () => {
    const result = (): string => fizzbuzz.shakeNumber(-2);
    expect(result).toThrowError();
  });

  it('should throw an Error if numbers is greater than 100', () => {
    const result = (): string => fizzbuzz.shakeNumber(101);
    expect(result).toThrowError();
  });

  it('should return "Fizz" if number is divisible by 3', () => {
    const result = fizzbuzz.shakeNumber(9);
    expect(result).toBe('Fizz');
  });

  it('should return "Buzz" if number is divisible by 5', () => {
    const result = fizzbuzz.shakeNumber(10);
    expect(result).toBe('Buzz');
  });

  it('should return "FizzBuzz" if number is divisible by 3 and 5', () => {
    const result = fizzbuzz.shakeNumber(15);
    expect(result).toBe('FizzBuzz');
  });

  it("should return input number as a string if it's not divisible by 3 and 5", () => {
    const result = fizzbuzz.shakeNumber(41);
    expect(result).toEqual<string>('41');
  });
});
