export function emailValidation(value: string): boolean {
  if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return true;
  }
  return false;
}

export function passwordValidation(value: string): boolean {
  if (
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/g.test(
      value
    )
  ) {
    return true;
  }
  return false;
}

export function creditCardValidation(value: string): boolean {
  if (
    /^\b(?:4[47]\d|(?:4\d|5[1-5]|65)\d{2}|6011)\d{12}\b/g.test(
      value.replace(" ", "")
    )
  ) {
    return true;
  }
  return false;
}

export function expdateValidation(value: string): boolean {
  if (/^(0[1-9]|1[012])[\/][0-9]{2}$/g.test(value)) {
    return true;
  }
  return false;
}

export function cvvValidation(value: string): boolean {
  if (/^[0-9]{3}$/g.test(value)) {
    return true;
  }
  return false;
}
