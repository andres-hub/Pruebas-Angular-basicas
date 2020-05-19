
import { IncrementadorComponent } from './incrementador.component';

describe('Incrmentador Component unit',()=>{

    let component: IncrementadorComponent;

    beforeEach(()=> component = new IncrementadorComponent());

    it('No debe de pasar de 100 el proegrso',()=>{

        component.progreso = 50;
        component.cambiarValor(5);

        expect(component.progreso).toBe(55);

    });

});
import { from } from 'rxjs';
import { Component } from '@angular/core';
