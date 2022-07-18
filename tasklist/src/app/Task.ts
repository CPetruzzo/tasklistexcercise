export interface Task {
    id?: number;
    title: string;
    day: string;
    reminder: boolean;
}

// ESTO PERMITE QUE NO ME MANDE ERRORES AL CARGAR LOS DATOS
// NO SE PUEDE AGREGAR UN REMINDER QUE SEA UN NÚMERO POR EJEMPLO