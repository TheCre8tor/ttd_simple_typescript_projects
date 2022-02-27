export class PalindromeChecker {
  isAPalindrome(str: string): boolean {
    const lowSplitStr = str
      .toLowerCase()
      .split(' ')
      .join('');

    const reverse = lowSplitStr
      .split('')
      .reverse()
      .join('');

    return reverse === lowSplitStr;
  }
}
