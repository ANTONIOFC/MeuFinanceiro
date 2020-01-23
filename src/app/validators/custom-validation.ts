import { AbstractControl, ValidatorFn, NgControl } from '@angular/forms';

export class CustomValidation {

    static quantidadeVendaValidator(qtdAtual: number) : ValidatorFn {

        return (control: AbstractControl): { [key: string]: any } | null => {

            if(control.value !== null) {
                if (control.value == 0 || control.value > qtdAtual)
                    return { invalidQtd: true };
            }
            return null;
        }
    } 
}
