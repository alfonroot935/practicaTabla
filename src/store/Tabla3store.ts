import { defineStore } from 'pinia';
import { tabla3 } from '@/entities'

export const usetabla3 = defineStore("tabla3", {
    state: () => ({
        arregloFormulario: [],
        tabla3: new tabla3,

        valid: false,
        contadorId: 0,
        refdatos: null


    }),

    actions: {
        async pushAgregar() {
            const datoNuevo = JSON.parse(JSON.stringify(this.tabla3))
            this.arregloFormulario.push(datoNuevo)
            this.tabla3 = new tabla3

        }

    }
})