import { Jugador } from './clase';

describe('Pruebas de clase',()=>{

     let jugador = new Jugador();

     beforeAll(()=>{

        //jugador.hp = 100;

     })

     beforeEach(()=>{

        jugador.hp = 100;

     });

     afterEach(()=>{

        // jugador.hp = 100;

     });

    it('debe de retornar 80 de hp, si recibe 20 de daño',()=>{

        // const jugador = new Jugador();
        const resp = jugador.recibeDanio(20);

        expect(resp).toBe(80);

    });

    it('debe de retornar 50 de hp, si recibe 50 de daño',()=>{

        const resp = jugador.recibeDanio(50);

        expect(resp).toBe(50);

    });

    it('debe de retornar 0 de hp, si recibe 100 de daño o mas',()=>{

        const resp = jugador.recibeDanio(100);

        expect(resp).toBe(0);

    });

});