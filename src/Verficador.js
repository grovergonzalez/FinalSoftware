class Verificador{
    constructor(cadena){
        cadena = this.cadena;
    }

    get_CocheteEntrada(){     
        return "[";
    }

    get_CorcheteCierre(){
        return "]"
    }

    get_Corchetes(){
        return "[]";
    }

    VerficarCorchetes(cadena){
        if(cadena == this.get_Corchetes())
        {
            return cadena;
        }
        else
        {
            return " ";
        }
    }

    VerificarCorrecto(cadena){
        if(this.VerficarCorchetes(cadena)){
            return "Correcto";
        }
        else
        {
            return "Incorrecto";
        }
    }
}

export default Verificador;