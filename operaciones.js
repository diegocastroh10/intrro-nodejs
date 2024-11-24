const fs = require('fs');

// Crear archivo
const verificarArchivo = (ruta) => {
    if (!fs.existsSync(ruta)) {
        fs.writeFileSync(ruta, JSON.stringify([], null, 2), 'utf-8');
    }
};

// Registrar Cita
function registrarCita(nombre, edad, tipo, color, enfermedad) {
    const archivo = 'citas.json';

    // Verificar archivo existente
    verificarArchivo(archivo);

    // Leer el contenido del archivo
    const datos = JSON.parse(fs.readFileSync(archivo, 'utf-8'));

    // Crear el objeto 
    const nuevaCita = {
        nombre,
        edad,
        tipo,
        color,
        enfermedad,
    };

    // Agregar cita
    datos.push(nuevaCita);

    // Guardar el arreglo en citas.json
    fs.writeFileSync(archivo, JSON.stringify(datos, null, 2), 'utf-8');

    console.log(`Cita registrada para ${nombre}`);
}

// leer y mostrar las citas
function leerCitas() {
    const archivo = 'citas.json';

    // Verificar y crear el archivo
    verificarArchivo(archivo);

    const datos = JSON.parse(fs.readFileSync(archivo, 'utf-8'));

    if (datos.length === 0) {
        console.log("No hay citas registradas.");
    } else {
        console.log("Citas registradas:");
        datos.forEach((cita, index) => {
            console.log(`\nCita ${index + 1}`);
            console.log(`Nombre: ${cita.nombre}`);
            console.log(`Edad: ${cita.edad}`);
            console.log(`Tipo: ${cita.tipo}`);
            console.log(`Color: ${cita.color}`);
            console.log(`Enfermedad: ${cita.enfermedad}`);
        });
    }
}

module.exports = { registrarCita, leerCitas };
