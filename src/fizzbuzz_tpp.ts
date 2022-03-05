export class FizzBuzzTPP {
  run = (input: number): string => {
    if (input < 1 || input > 100) {
      throw new Error();
    }

    if (input % 3 === 0 && input % 5 === 0) {
      return 'FizzBuzz';
    } else if (input % 3 === 0) {
      return 'Fizz';
    } else if (input % 5 === 0) {
      return 'Buzz';
    } else {
      return `${input}`;
    }
  };
}
