import { AbstractControl, ControlContainer, ValidatorFn } from "@angular/forms";

export function nameValidator(control:AbstractControl):{[key:string]:any}|null{
    const forbidden=/admin/.test(control.value);
    return forbidden?{forbiddenname:{value:control.value}}:null;
}


export function nameValidator2(forbiddenName:RegExp):ValidatorFn{
    return (control:AbstractControl):{[key:string]:any}|null=>{
        const forbidden=forbiddenName.test(control.value);
        return forbidden?{forbiddenname:{value:control.value}}:null;
    };
}
