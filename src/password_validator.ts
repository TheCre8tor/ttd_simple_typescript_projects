export interface ErrorValidator {
  isValid: boolean;
  errors: string[];
}

export class PasswordValidator {
  validate(password: string): ErrorValidator {
    let response: ErrorValidator = { isValid: false, errors: [] };

    const parseError = (
      response: ErrorValidator,
      msg: string,
    ): ErrorValidator => {
      return {
        isValid: false,
        errors: [...response.errors, msg],
      };
    };

    if (password.length >= 5 && password.length <= 15) {
      response = { ...response, isValid: true };
    } else {
      response = parseError(
        response,
        'password length must be between 5 to 15 chars long',
      );
    }

    if (password.match(/\d+/g) != null) {
      response = { ...response, isValid: true };
    } else {
      response = parseError(
        response,
        'password must contain at least one digit',
      );
    }

    if (password.match(/["A-Z"]/)) {
      response = { ...response, isValid: true };
    } else {
      response = parseError(
        response,
        'password must contain at least one upper case letter',
      );
    }

    return response;
  }
}
