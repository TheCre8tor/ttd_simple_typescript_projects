export class Fibonacci {
  parseNumber = (input: number): number => {
    if (input < 1) {
      throw Error();
    }

    const initial = 0;
    const anchor = 1;

    const fibList = [initial, anchor];

    for (let i = 2; i <= input; i++) {
      fibList.push(fibList[i - 1] + fibList[i - 2]);
    }

    return fibList[input];
  };
}
