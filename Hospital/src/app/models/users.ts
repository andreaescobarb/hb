export interface UserI{
    "Email": string,
    "Password": string,
    "Cotizaciones": number,
    "Rol": number,
    "Estado": number
}

export class User implements UserI{
    id: number;
    Username: string;
    Email: string;
    Password: string;
    Cotizaciones: number;
    Rol: number;
    Estado: number;
    token?: string;
}