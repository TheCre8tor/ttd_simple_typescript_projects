export class FizzBuzzTPP {
  run = (input: number): string => {
    if (input < 1 || input > 100) {
      throw new Error();
    }

    return 'Fizz';
  };
}
