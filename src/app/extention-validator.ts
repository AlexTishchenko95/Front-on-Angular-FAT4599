import { FormControl, ValidationErrors } from '@angular/forms';

export function extentionValidator(control: FormControl): ValidationErrors {
    if (!control.value || control.value.endsWith('.txt')) {
        return null;
    }
    return { extention: 'Invalid file name! File must be .txt' };
}
