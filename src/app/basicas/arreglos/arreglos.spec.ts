import { obtenerRobots } from './arreglos';

xdescribe('Pruebas de arreglos',()=>{

    it('Debe retornar almenos tres robots',()=>{

        const res = obtenerRobots();

        expect(res.length).toBeGreaterThanOrEqual(3);

    });

    it('Debe de existir MegeMan y Ultron',()=>{

        const res = obtenerRobots();

        expect(res).toContain('MegaMan');
        expect(res).toContain('Ultron');

    });

});