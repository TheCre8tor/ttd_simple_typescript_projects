export class StatsCalculator {
  private list: number[];

  constructor(list: number[]) {
    this.list = list;
  }

  minimumValue(): number {
    let min = 0;

    for (let i = 0; i <= this.list.length; i++) {
      if (min > this.list[i]) {
        min = this.list[i];
      }
    }

    return min;
  }

  maximumValue(): number {
    let max = 0;

    for (let i = 0; i <= this.list.length; i++) {
      if (max < this.list[i]) {
        max = this.list[i];
      }
    }

    return max;
  }

  numberOfElements(): number {
    return this.list.length;
  }
}
