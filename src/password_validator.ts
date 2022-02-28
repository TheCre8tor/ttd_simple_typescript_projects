export interface ErrorValidator {
  isValid: boolean;
  errors: string[];
}

const result: ErrorValidator = {
  isValid: true,
  errors: [],
};

export class PasswordValidator {
  validate(password: string): ErrorValidator {
    // if (password.length >= 5 && password.length <= 15) {
    //   return { ...result, isValid: true };
    // }

    return { ...result, isValid: true };
  }
}
