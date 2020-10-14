import { AbstractControl } from '@angular/forms';

export class MathValidators {
    static addition(form: AbstractControl): null | object {
        // this.mathForm === form;
        // will return to mathForm.errors
        const { a, b, answer } = form.value;
        if (a + b === +answer) {
        // return no errors
            return null;
        }

        return { addition: true };
    }
}