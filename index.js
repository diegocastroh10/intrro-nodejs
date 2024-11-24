const { registrarCita, leerCitas } = require('./operaciones');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("\n=== Veterinaria 2024 ===");
    console.log("1. Registrar una nueva cita");
    console.log("2. Ver todas las citas");
    console.log("3. Salir");

    rl.question("Selecciona una opción: ", (opcion) => {
        switch (opcion) {
            case '1':
                registrarNuevaCita();
                break;
            case '2':
                mostrarCitas();
                break;
            case '3':
                console.log("Ha abandonado el sistema.");
                rl.close();
                break;
            default:
                console.log("Opción no válida.");
                mostrarMenu();
                break;
        }
    });
}

function registrarNuevaCita() {
    rl.question("Nombre del animal: ", (nombre) => {
        rl.question("Edad del animal: ", (edad) => {
            rl.question("Tipo de animal: ", (tipo) => {
                rl.question("Color del animal: ", (color) => {
                    rl.question("Enfermedad del animal: ", (enfermedad) => {
                        registrarCita(nombre, edad, tipo, color, enfermedad);
                        mostrarMenu();
                    });
                });
            });
        });
    });
}

function mostrarCitas() {
    leerCitas(); 
    rl.question("\nPresiona Enter para volver al menú...", () => {
        mostrarMenu(); 
    });
}

// Mostrar el menú principal
mostrarMenu();
