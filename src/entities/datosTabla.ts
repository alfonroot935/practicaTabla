export default class datosTabla {
    id: number;
    nombre: string;
    apellidos: string;
    correo: string;
    numeroTelefono: string;
    fecha: string;


    constructor(item?: any) {
        if (item) {
            this.id = item.id ?? 0;
            this.nombre = item.nombre ?? "";
            this.apellidos = item.apellidos ?? "";
            this.correo = item.correo ?? "";
            this.numeroTelefono = item.numeroTelefono ?? "";
            this.fecha = item.fecha ?? "";

        }
        else {
            this.id = 0;
            this.nombre = "";
            this.apellidos = "";
            this.correo = "";
            this.numeroTelefono = "";
            this.fecha = "";
        }
    }

}