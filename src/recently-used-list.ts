export class RecentlyUsedList {
  private limit?: number;
  private bound = 5;
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
      } else {
        // 1. Set list bound to 5 if limit is not provided

        // 2. If length is less than 5 && this.limit is undefined
        // 3. else if length is === 5 && this.limit is undefined
        // ---- pop the last item and unshift the recent item

        if (this.list.length < this.bound && this.limit === undefined) {
          this.list.unshift(insert);
        } else {
          console.log(insert);
        }
      }
    }
  }
}
