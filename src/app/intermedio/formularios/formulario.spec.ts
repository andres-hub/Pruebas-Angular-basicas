import { FormularioRegister } from "./formulario";
import {FormBuilder} from '@angular/forms';

describe('Formularios', ()=>{

    let componente: FormularioRegister;

    beforeEach(()=>{

        componente = new FormularioRegister(new FormBuilder());

    });

    it('Debe crear un formulario con dos campos',()=>{

        expect(componente.from.contains('email')).toBeTruthy();
        expect(componente.from.contains('password')).toBeTruthy();

    });

    it('El email debe ser obligatorio',()=>{

        const control = componente.from.get('email');
        control.setValue('');

        expect(control.valid).toBeFalsy();

    });

    it('El email debe ser un correo valido',()=>{

        const control = componente.from.get('email');
        control.setValue('andres@gmail.com');

        expect(control.valid).toBeTruthy();

    });

})