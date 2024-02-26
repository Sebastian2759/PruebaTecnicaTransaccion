export interface Transaccion {
    transaccionID: number;
    vehiculo: VehiculosGlobalDto;
    vehiculoID: number;
    cliente: ClientesGlobalDto;
    clienteID: number;
    concesionario: ConcesionariosGlobalDto;
    concesionarioID: number;
    fechaVenta: Date;
    precioVenta: number;
}

export interface VehiculosGlobalDto {
    vehiculoID: number;
    marca: string;
    modelo: string;
    anio: number;
    precio: number;
}
export interface ClientesGlobalDto {
    clienteID: number;
    nombre: string;
    email: string;
    telefono: string;
}
export interface ConcesionariosGlobalDto {
    concesionarioID: number;
    nombre: string;
    direccion: string;
    ciudad: string;
}
