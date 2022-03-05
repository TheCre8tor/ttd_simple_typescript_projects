import { FizzBuzzTPP } from './../src/fizzbuzz_tpp';

describe('FizzBuzz', () => {
  it('should throw an error if number is less than 1', () => {
    const fizzbuzz = new FizzBuzzTPP();

    const result = (): string => fizzbuzz.run(-2);

    expect(result).toThrow(Error);
  });

  it('should throw an error if number is greater than 100', () => {
    const fizzbuzz = new FizzBuzzTPP();

    const result = (): string => fizzbuzz.run(101);

    expect(result).toThrowError();
  });

  it('should return "Fizz" if number is divisible by 3', () => {
    const fizzbuzz = new FizzBuzzTPP();

    const result = fizzbuzz.run(6);

    expect(result).toBe('Fizz');
  });
});
