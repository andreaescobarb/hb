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
    "IDNacionalidad": number,
    "Edad": number,
    "Genero": string,
    "CiudadResidencia": number,
    "Residencia": number,
    "IDUsers": string
}

export interface User {
    //"Pacientes":Array<any>,
    "IDUsers": number,
    "Correo": string,
    "Password": string,
    "Cotizaciones":number,
    "Rol": number,
    "Estado": number
}