import { PalindromeChecker } from './../src/index';

describe('palindrome checker', () => {
  let palindromeChecker: PalindromeChecker;

  beforeEach(() => {
    palindromeChecker = new PalindromeChecker();
  });

  it('should be able to tell that "mom" is a palindrome', () => {
    // Act (When) - act out the behavior
    const result = palindromeChecker.isAPalindrome('mom');

    // Assert (Then) - postconditions
    expect(result).toBeTruthy();
  });

  it('should be able to tell that "bill" isn\'t a palindrome', () => {
    // Act (When) - act out the behavior
    const result = palindromeChecker.isAPalindrome('bill');

    // Assert (Then) - postconditions
    expect(result).toBeFalsy();
  });

  it('should still detect a palindrome even if the casing is off', () => {
    // Act (When) - act out the behavior
    const result = palindromeChecker.isAPalindrome('Mom');

    // Assert (Then) - postconditions
    expect(result).toBeTruthy();
  });

  it('should be able to tell that "Was It A Rat I Saw" is a palindrome', () => {
    // Act (When) - act out the behavior
    const result = palindromeChecker.isAPalindrome('Was It A Rat I Saw');

    // Assert (Then) - postconditions
    expect(result).toBeTruthy();
  });

  it('should be able to tell that "Never Odd or Even" is palindrome', () => {
    // Act (When) - act out the behavior
    const result = palindromeChecker.isAPalindrome('Never Odd or Even');

    // Assert (Then) - postconditions
    expect(result).toBeTruthy();
  });
});
