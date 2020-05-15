import { mensaje } from './string';
// describe('Pruebas de strings');
// it('Debe regresar un string');
describe('Pruebas de strings',()=>{

    it('Debe regresar un string', ()=>{

        const resp = mensaje('Andres');

        expect(typeof resp).toBe('string');

    });

    it('Debe regresar un saludo con el nombre enviado', ()=>{

        const nombre = 'Andrea';
        const resp = mensaje(nombre);

        expect(resp).toContain(nombre);

    });

});
