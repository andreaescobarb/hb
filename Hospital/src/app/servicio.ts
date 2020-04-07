export interface Servicio {
    "ServiciosEnPromocions":Array<any>,
    "IDServicio": number,
    "NombreServicio": string,
    "Precio": number,
    "Recomendaciones": string
}
    
export interface Promocion {
    "IDPromocion": number,
    "NombrePromocion": string,
    "Detalle": string,
    "FechaExpiracion": string
}

export interface ServiciosEnPromocion {
    "IDPromocion": number,
    "IDServicio": number,
    "PrecioFinal": number,
    "ID": number
}

export interface Paciente {
    "IDPaciente": number,
    "Nombre": string,
    "Apellido": string,
    "Apellido2": string,
    "Identidad": string,
    "IDNacionalidad": number,
    "Edad": number,
    "Genero": string,
    "CiudadResidencia": number,
    "Residencia": number,
    "IDUsers": string
}

export interface User {
    "IDUser": number,
    "Correo": string,
    "Password": string,
    "Rol": number,
    "Cotizaciones":number
}