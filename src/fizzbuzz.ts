export class FizzBuzz {
  shakeNumber = (input: number): string => {
    if (input < 1 || input > 100) {
      throw new Error();
    }

    const mod3 = input % 3 === 0;
    const mod5 = input % 5 === 0;

    if (mod3 && mod5) {
      return 'FizzBuzz';
    } else if (mod3) {
      return 'Fizz';
    } else if (mod5) {
      return 'Buzz';
    } else {
      return `${input}`;
    }
  };
}
