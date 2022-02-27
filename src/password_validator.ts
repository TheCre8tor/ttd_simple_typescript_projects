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
    return result;
  }
}
