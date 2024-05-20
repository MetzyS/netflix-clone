export function emailValidation(value: string): boolean {
  let isValid = false;
  if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    isValid = true;
  }
  return isValid;
}

export function passwordValidation(value: string): boolean {
  let isValid = false;
  if (
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/g.test(
      value
    )
  ) {
    isValid = true;
  }
  return isValid;
}

export function creditCardValidation(value: string): boolean {
  let isValid = false;
  if (/^\b(?:3[47]\d|(?:4\d|5[1-5]|65)\d{2}|6011)\d{12}\b/g.test(value)) {
    isValid = true;
  }
  return isValid;
}
