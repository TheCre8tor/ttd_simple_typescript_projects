export class RecentlyUsedList {
  private limit: number | undefined = 5;
  private list: string[] = [];

  constructor(limit?: number) {
    this.limit = limit;
  }

  getList = (): string[] => {
    return this.list;
  };

  setList = (insert: string) => {
    if (insert === '') throw new Error('Insertions must contain a valid value');
  };
}
