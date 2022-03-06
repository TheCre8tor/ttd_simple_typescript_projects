/* 1. -- The most recent added item is first
   2. -- The least recently added item is least
   3. Item can be looked up by index, which count from 0
   4. Item in the list are unique, so duplicate insertions
      are moved rather than added.
   5. ## 1. A recently-used-list is also initially empty. ++
   6. ## Null insertions (empty strings) are not allowed. ++
   7. ## Size limit is optional. if not supplied, 
      make 5 as default bound capacity [0 - 4].
   8. If numbers supplied is greater than bound capacity,
      least recently added items should dropped on 
      overflow.
   9. While getting items by index, supplied index-value 
      should be within the bounds of List 
  10. ## Nagative index value not allowed.
*/

import { RecentlyUsedList } from './../src/recently-used-list';

describe('RecentlyUsedList', () => {
  it('should be an empty list at it initial state', () => {
    const recentlyUsedList = new RecentlyUsedList();

    const result = recentlyUsedList.getList();

    expect(result).toEqual([]);
  });

  it('should throw Error if insertion is an empty string', () => {
    const recentlyUsedList = new RecentlyUsedList();

    const result = (): void => recentlyUsedList.setList('');

    expect(result).toThrow(Error);
  });

  it.todo('should place the most recently added item as first');

  it.todo('should place the least recently added item as last');
});
