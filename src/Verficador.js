class Verificador{
    constructor(cadena){
        cadena = this.cadena;
    }

    VerificarCocheteEntrada(cadena){
        return "[";
    }

    VerificarCorcheteCierre(cadena){
        return "]"
    }
}

export default Verificador;