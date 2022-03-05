import { FizzBuzzTPP } from './../src/fizzbuzz_tpp';

describe('FizzBuzz', () => {
  let fizzbuzz: FizzBuzzTPP;

  beforeEach(() => {
    fizzbuzz = new FizzBuzzTPP();
  });

  it('should throw an error if number is less than 1', () => {
    const result = (): string => fizzbuzz.run(-2);

    expect(result).toThrow(Error);
  });

  it('should throw an error if number is greater than 100', () => {
    const result = (): string => fizzbuzz.run(101);

    expect(result).toThrowError();
  });

  it('should return "Fizz" if number is divisible by 3', () => {
    const result = fizzbuzz.run(6);

    expect(result).toBe('Fizz');
  });

  it('should return "Buzz" if number is divisible by 5', () => {
    const result = fizzbuzz.run(10);

    expect(result).toBe('Buzz');
  });

  it('should return "FizzBuzz" if number is divisible by both 3 and 5', () => {
    const result = fizzbuzz.run(15);

    expect(result).toBe('FizzBuzz');
  });

  it('should return inputted number as string if input is not divisible by 3 and 5', () => {
    const result = fizzbuzz.run(17);

    expect(result).toBe('17');
  });
});
