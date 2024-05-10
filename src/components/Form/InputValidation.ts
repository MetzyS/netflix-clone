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
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/i.test(
      value
    )
  ) {
    isValid = true;
  }
  return isValid;
}
