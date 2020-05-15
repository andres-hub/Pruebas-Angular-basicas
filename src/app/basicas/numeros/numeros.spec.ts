import { incrementar } from './numeros';

describe('Pruebas de numeros',()=>{

    it('Debe retornar 100, si el numero es mayor a 100',()=>{

        const resp = incrementar(300);
        expect(resp).toBe(100);

    });

    it('Debe retornar el numero ingresado + 1 si no es mayor a 100',()=>{

        const resp = incrementar(30);
        expect(resp).toBe(31);

    });

});