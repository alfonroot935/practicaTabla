

export default class tabla3 {
    id: Number;
    nombre: string;
    apellidos: string;
    materia: string;
    imagen: File;
    pagoMateria: boolean;
    numeroPago: number;


    constructor(item?: any) {
        if (item) {
            this.id = item.id ??= 0
            this.nombre = item.nombre ??= ""
            this.apellidos = item.apellidos ??= ""
            this.materia = item.materia ??= ""
            this.imagen = item.imagen ??= null
            this.pagoMateria = item.pagoMateria = false
            this.numeroPago = item.numeroPago = 0

        }
        else {
            this.id = 0
            this.nombre = ""
            this.apellidos = ""
            this.materia = ""
            this.imagen = undefined
            this.pagoMateria = false
            this.numeroPago = 0

        }
    }
}