export interface Servicio {
    "ServiciosEnPromocions": Array<any>,
    "IDServicio": number,
    "Nombre": string,
    "Precio": number,
    "Recomendaciones": string,
    "Contraindicaciones": string,
    "Advertencias": string
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
    "Nombre": string,
    "Apellido": string,
    "SegundoApellido": string,
    "Identidad": string,
    "Edad": number,
    "Genero": string,
    "IDNacionalidad": number,
    "Ciudad": number,
    "Residencia": number,
    "IDUser": number
}

export interface User {
    "Correo": string,
    "Password": string,
    "Cotizaciones": number,
    "Rol": number,
    "Estado": number
}

export interface Usuario {
    "IDUsers": number,
    "Correo": string,
    "Password": string,
    "Cotizaciones": number,
    "Rol": number,
    "Estado": number
}

export interface Nacionalidad {
    //"Pacientes":Array<any>,
    "IDNacionalidad": number,
    "Nombre": string
}

export interface Ciudad {
    //"Pacientes":Array<any>,
    "IDCiudad": number,
    "Nombre": string
}

export interface Residencia {
    "IDResidencia": number,
    "Nombre": string,
    "IDCiudad": number
}

export interface Especialidad {
    "IDEspecialidad": number,
    "Nombre": string
}

export interface Medico {
    "IDMedico": number,
    "Nombre": string,
    "Apellido": string,
    "Lunes": string,
    "Martes": string,
    "Miercoles": string,
    "Jueves": string,
    "Viernes": string,
    "Sabado": string,
    "Titulos": string,
    "Img": string,
    "IDEspecialidad": number,
    "IDUser": number
}