import { PasswordValidator } from './../src/password_validator';

describe('Passsword Validator', () => {
  let passwordValidator: PasswordValidator;
  let password: string;

  beforeEach(() => {
    passwordValidator = new PasswordValidator();
    password = 'tesyu6Z';
  });

  test('should detect if password is between 5 and 15 characters long', () => {
    const result = passwordValidator.validate(password);

    expect(result).toMatchObject({
      isValid: true,
      errors: [],
    });
  });

  test('should detect if password contains at least one digit', () => {
    const result = passwordValidator.validate(password);

    expect(result).toMatchObject({
      isValid: true,
      errors: [],
    });
  });

  test('should detect if password contains at least one upper case letter', () => {
    const result = passwordValidator.validate(password);

    expect(result).toMatchObject({
      isValid: true,
      errors: [],
    });
  });
});
