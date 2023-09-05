import { defineStore } from 'pinia';
import { datosTabla } from '@/entities';
import { nextTick } from 'vue';


export const usetabla = defineStore("store", {
    state: () => ({
        tabladatos: [],
        datosTabla: new datosTabla(),

        valid: false,
        contadorId: 0,
        refDatos: null


    }),
    actions: {
        async pushAgregar() {
            const validacion = await this.refDatos?.validate();
            if (validacion.valid) {
                this.contadorId++;
                this.datosTabla.id = this.contadorId;
                const datoNuevo = JSON.parse(JSON.stringify(this.datosTabla));
                this.tabladatos.push(datoNuevo);
                this.datosTabla = new datosTabla;
                await nextTick()
                this.refDatos?.resetValidation();
            }
            else {
                alert("no se pudo agregar")
            }

        }, editarDato(dato: any): void {


            this.datosTabla = JSON.parse(JSON.stringify(dato));
        },
        async modificarDato() {
            const editDato = JSON.parse(JSON.stringify(this.datosTabla));
            let indexDato: number = this.tabladatos.findIndex((dato) => {

                return editDato.id = dato.id
            })

            if (indexDato != -1) {
                this.tabladatos[indexDato] = editDato;
                this.datosTabla = new datosTabla;
                await nextTick()
                this.refDatos?.resetValidation();
            }
            else {
                alert("Error dato no guardado")
            }
        },
        eliminarDato(itemDato: any) {
            let indexDato: number = this.tabladatos.findIndex((dato) => {
                return itemDato.id = dato.id
            })

            if (indexDato != -1) {
                this.tabladatos.splice(indexDato, 1)
            }
            else {
                alert("Error no se puede eliminar")
            }
        }


    }
})