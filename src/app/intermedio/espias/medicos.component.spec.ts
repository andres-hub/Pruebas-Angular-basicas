import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from as observableFrom, empty as observableEmpty,throwError} from 'rxjs';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servico = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent(servico);
    });


    it('Init: Debe de cargar los medicos', () => {

        const medicos = ['Medico1', 'Medico2', 'Medico3'];

        spyOn(servico,'getMedicos').and.callFake(()=>{
            return observableFrom([medicos]);
        })

        componente.ngOnInit();

        expect(componente.medicos.length).toBeGreaterThan(0);

    });

    it('Debe de llamar al servidor para agregar un medico',()=>{

        const espia = spyOn(servico,'agregarMedico').and.callFake(medico=>{

            return observableEmpty();

        });

        componente.agregarMedico();

        expect(espia).toHaveBeenCalled();

    });

    it('Debe de agregar un nuevo medico al arreglo de medicos',()=>{

        const medico = {id:1, nombre: 'vicky'};

        spyOn(servico,'agregarMedico').and.returnValue(observableFrom([medico]));

        componente.agregarMedico();

        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);

    });

    it('Si falla la adicion, la propiedad mensajeError, debe ser igual al error del servicio',()=>{

        const miError = 'No se pudo agregar el medico';

        spyOn(servico,'agregarMedico').and.returnValue(throwError(miError));

        componente.agregarMedico();
        expect(componente.mensajeError).toBe(miError);

    });

    it('Debe llamar al servidor para borrar un medico',()=>{

        spyOn(window,'confirm').and.returnValue(true);

        const espia = spyOn(servico,'borrarMedico').and.returnValue(observableEmpty());

        componente.borrarMedico('1');

        expect(espia).toHaveBeenCalledWith('1');

    });

    it('No debe llamar al servidor para borrar un medico',()=>{

        spyOn(window,'confirm').and.returnValue(false);

        const espia = spyOn(servico,'borrarMedico').and.returnValue(observableEmpty());

        componente.borrarMedico('1');

        expect(espia).not.toHaveBeenCalledWith('1');

    });


});
