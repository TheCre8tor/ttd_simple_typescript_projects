export class RecentlyUsedList {
  private limit: number | undefined = 5;
  private list: string[] = [];

  constructor(limit?: number) {
    this.limit = limit;
  }

  getList = (): string[] => {
    return this.list;
  };

  setList = (insert: string): void => {
    if (insert === '') throw new Error('Insertions must contain a valid value');
    this.list.push(insert);
  };
}
