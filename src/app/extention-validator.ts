import { FormControl, ValidationErrors } from '@angular/forms';

export function extentionValidator(control: FormControl): ValidationErrors {
    if (!control.value || control.value.endsWith('.txt') || control.value.endsWith('.js') || control.value.endsWith('.ts')) {
        return null;
    }
    return { extention: 'Invalid file name! File must be .txt' };
}
