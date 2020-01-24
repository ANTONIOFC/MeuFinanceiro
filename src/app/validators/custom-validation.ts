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

    static getErrorMsg(fieldName: string, validatorName: string, validatorValue?: any) {
        const config = {
          'required': `${fieldName} é obrigatório.`,
          'minlength': `${fieldName} precisa ter no mínimo ${validatorValue.requiredLength} caracteres.`,
          'maxlength': `${fieldName} precisa ter no máximo ${validatorValue.requiredLength} caracteres.`,
          'cepInvalido': 'CEP inválido.',
          'emailInvalido': 'Email já cadastrado!',
          'equalsTo': 'Campos não são iguais',
          'invalidQtd': `${fieldName} inválida.`,
          'pattern': 'Campo inválido',
          'invalidTipo': `${fieldName} inválido.`
        };
    
        return config[validatorName];
      }

}
