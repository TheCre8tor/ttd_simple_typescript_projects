export class RecentlyUsedList {
  private limit: number | undefined = 5;
  private list: string[] = [];

  constructor(limit?: number) {
    this.limit = limit;
  }

  get getList(): string[] {
    return this.list;
  }

  set setList(insert: string) {
    if (insert === '') throw new Error('Insertions must contain a valid value');

    if (this.list.length === 0) {
      this.list.push(insert);
    } else {
      this.list.unshift(insert);
    }
  }
}
