export default class tabla2 {
    id: number;
    nombre: string;
    apellido: string;
    correo: string;
    contrasenia: string;
    fecha: any;

    constructor(item?: any) {
        if (item) {
            this.id = item.id ?? 0;
            this.nombre = item.nombre ?? "";
            this.apellido = item.apellido ?? "";
            this.correo = item.correo ?? "";
            this.contrasenia = item.contrasenia ?? "";
            this.fecha = item.fecha ?? "";

        }
        else {
            this.id = 0;
            this.nombre = "";
            this.apellido = "";
            this.correo = "";
            this.contrasenia = "";
            this.fecha = "";
        }
    }
}
