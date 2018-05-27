import { AbstractControl } from "@angular/forms";
export class CustomValidators {
  static Match(firstControlName, secondControlName) {
    return (AC: AbstractControl) => {
      const firstControlValue = AC.get(firstControlName).value;
      const secondControlValue = AC.get(secondControlName).value;
      if (firstControlValue !== secondControlValue) {
        AC.get(secondControlName).setErrors({ MatchFields: true });
      } else {
        return null;
      }
    };
  }
}
