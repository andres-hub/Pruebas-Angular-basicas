import {FormGroup, FormBuilder, Validators} from '@angular/forms';

export class FormularioRegister {

    from: FormGroup;

    constructor(
        fb: FormBuilder
    ){

        this.from = fb.group({

            email: ['', [Validators.required, Validators.email]],
            password: ['',Validators.required]

        });

    }

}