interface Asistente {
  nombre: string;
  carrera: string;
  email?: string;
  asiento?: number;
}

const asistencia1 : Asistente = {
  nombre: "Juan Pérez",
  carrera: "Ingeniería de Software",
  email: "juan.perez@universidad.edu",
  asiento: 15
};

const asistencia2 : Asistente = {
  nombre: "María García",
  carrera: "Medicina",
};


//asistencia 1
if (asistencia1.email && asistencia1.asiento) {
  console.log(`Asistente 1: ${asistencia1.nombre}, ${asistencia1.carrera}, ${asistencia1.email}, Asiento: ${asistencia1.asiento}`);
} else {
  console.log(`Asistente 1: ${asistencia1.nombre}, ${asistencia1.carrera}`);
}
//asistencia 2
if (asistencia2.email && asistencia2.asiento) {
  console.log(`Asistente 2: ${asistencia2.nombre}, ${asistencia2.carrera}, ${asistencia2.email}, Asiento: ${asistencia2.asiento}`);
} else {
  console.log(`Asistente 2: ${asistencia2.nombre}, ${asistencia2.carrera}`);
}



