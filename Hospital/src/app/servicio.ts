export interface Servicio {
    "ServiciosEnPromocions":Array<any>,
    "IDServicio": number,
    "Nombre": string,
    "Precio": number,
    "Recomendaciones": string,
    "Contraindicaciones": string,
    "Advertencias":string
}
    
export interface Promocion {
    "IDPromocion": number,
    "Nombre": string,
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
    "SegundoApellido": string,
    "Identidad": string,
    "Edad": number,
    "Genero": string,
    "IDNacionalidad": number,
    "Ciudad": number,
    "Residencia": number,
    "IDUser": string
}

export interface User {
    //"Pacientes":Array<any>,
    "Correo": string,
    "Password": string,
    "Cotizaciones":number,
    "Rol": number,
    "Estado": number
}