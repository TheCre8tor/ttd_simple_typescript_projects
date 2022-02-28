import { ErrorValidator, PasswordValidator } from './../src/password_validator';

describe('Passsword Validator', () => {
  test('should detect if password is between 5 and 15 characters long', () => {
    const passwordValidator = new PasswordValidator();
    const result: ErrorValidator = {
      isValid: true,
      errors: [],
    };

    const password = 'testtouou';

    expect(passwordValidator.validate(password)).toMatchObject<ErrorValidator>(
      result,
    );
  });
});
