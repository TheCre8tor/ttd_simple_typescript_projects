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
      const checkDuplicate = this.list.find(item => item === insert);

      if (checkDuplicate !== undefined) {
        const findIndex = this.list.findIndex(idx => idx === checkDuplicate);

        const item = this.list.splice(findIndex, 1)[0];
        this.list.splice(0, 0, item);

        // for (let i = 0; i < this.list.length; i++) {
        //   if (this.list[i] === insert) {
        //     const item = this.list.splice(i, 1)[0];
        //     this.list.splice(0, 0, item);
        //   }
        // }
      } else {
        this.list.unshift(insert);
      }
    }
  }
}
