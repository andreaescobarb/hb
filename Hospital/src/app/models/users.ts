export interface UserI{
    "Email": string,
    "Password": string,
    "Cotizaciones": number,
    "Rol": number,
    "Estado": number
}

export class User{
    Username: string;
    Email: string;
    Password: string;
    ConfirmPassword: string;
    Cotizaciones: number;
    Rol: number;
    Estado: number;
    token?: string;
}
