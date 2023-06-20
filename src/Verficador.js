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
}

export default Verificador;