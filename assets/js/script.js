// Crear Super Clase Propietario
class Propietario {
    constructor(nombre, direccion, telefono) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    datoPropietario() {
        return `El nombre del dueño es: ${this.nombre}. El domicilio es ${this.direccion} y el número telefónico de contacto es ${this.telefono}.`;
    }
}

// Crear subclase Animal
class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }
    get tipo() {
        return `El tipo de animal es un: ${this._tipo}`;
    }
}

//Crear subclase Mascota
class Mascota extends Animal{
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad){
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }

    get nombreMascota() {
        return this._nombreMascota;
    }

    set nombreMascota(nuevoNombre) {
        this._nombreMascota = nuevoNombre;
    }

    get enfermedad() {
        return this._enfermedad;
    }

    set enfermedad(nuevaEnfermedad) {
        this._enfermedad = nuevaEnfermedad;
    }
    datosMascota() {
        return `${this.tipo}, mientras que el nombre de la mascota es: ${this.nombreMascota} y la enfermedad es: ${this.enfermedad}`;
    }
}

const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); 
            
    const nombrePropietario = document.getElementById("propietario").value;
    const direccion = document.getElementById("direccion").value;
    const telefono = document.getElementById("telefono").value;
    const nombreMascota =document.getElementById("nombreMascota").value;
    const enfermedad =document.getElementById("enfermedad").value;
    const tipoMascota=document.getElementById("tipo").value;

    const propietario = new Propietario(nombrePropietario, direccion, telefono);
    const mascota = new Mascota(nombrePropietario, direccion, telefono, tipoMascota, nombreMascota, enfermedad);
    
    resultado.innerHTML = `
    <ul>
        <li>${propietario.datoPropietario()}</li>
        <li>${mascota.datosMascota()}</li>
    </ul>`;
});