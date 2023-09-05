import { defineStore } from 'pinia';
import { tabla2 } from '@/entities';


import { nextTick } from 'vue';



export const usetabla2 = defineStore("tabla2", {
    state: () => ({
        formularioArreglo: [],
        tabla2: new tabla2(),

        valid: false,
        contadorId: 0,
        refdatos: null
    }),
    actions: {
        async pushAgregar() {
            const validacion = await this.refdatos?.validate();
            if (validacion.valid) {
                this.contadorId++,
                    this.tabla2.id = this.contadorId

                var d = new Date(this.tabla2.fecha);
                var day = d.getUTCDate();
                var month = d.getUTCMonth() + 1;
                var year = d.getUTCFullYear();
                this.tabla2.fecha = day + "-" + month + "-" + year;
                const datoNuevo = JSON.parse(JSON.stringify(this.tabla2))
                this.formularioArreglo.push(datoNuevo)
                this.tabla2 = new tabla2
                await nextTick()
                this.refdatos?.resetValidation();
            }
            else {
                alert("No se puede agregar")
            }
        },
        editarDato(dato: any): void {
            this.tabla2 = JSON.parse(JSON.stringify(dato));
        },
        async modificarDato() {
            const editDato = JSON.parse(JSON.stringify(this.tabla2))
            let indexDato: number = this.formularioArreglo.findIndex((dato) => {
                return editDato.id = dato.id
            })
            if (indexDato != -1) {
                this.formularioArreglo[indexDato] = editDato;
                this.tabla2 = new tabla2;
                await nextTick()
                this.refdatos?.resetValidation();
            }
            else {
                alert("Error, dato no guardado")
            }

        },
        eliminarDato(itemDato: any) {
            let indexDato: number = this.formularioArreglo.findIndex((dato) => {
                return itemDato.id = dato.id
            })
            if (indexDato != -1) {
                this.formularioArreglo.splice(indexDato, 1)
            }
            else {
                alert("No se puede eliminar el dato")
            }

        }
    }
})