import { FormGroup, Validator } from '@angular/forms'; // validator = interface
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MatchPassword implements Validator {
    validate(formGroup: FormGroup): null | {} {
        const { password, passwordConfirmation } = formGroup.value;
        if (password === passwordConfirmation) {
            return null;
        } else {
            return { passwordsDontMatch: true };
        }
    }
}