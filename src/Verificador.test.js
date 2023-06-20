import Verificador from "./Verficador";

const cadena = "[]";
const verificador = new Verificador(cadena);

describe("Verificar Corchetes de apertura y cierre", () => {
    it("deberia verficar si existe un corchete de apertura", () => {
      expect(verificador.get_CocheteEntrada(cadena)).toEqual("[");
    });
    it("deberia verficar si existe un corchete de cierre", () => {
        expect(verificador.get_CorcheteCierre(cadena)).toEqual("]");
    });
    it("deberia verficar si existe un corchete de apertura y cierre vacio", () => {
        expect(verificador.VerficarCorchetes(cadena)).toEqual("[]");
    });
});
  
const CadenaCorrecta = "[[]]";
const CadenaIncorrecta = "[[]";

describe("Verificar los corchetes devolviendo Correcto o Incorrecto", () => {
    it("deberia verficar si existe un corchete de apertura y cierre correspondientes devolviendo la palabra Correcto", () => {
        expect(verificador.VerificarCorrecto(CadenaCorrecta)).toEqual("Correcto");
    });
    it("deberia verficar si existe un corchete de apertura y cierre correspondientes devolviendo la palabra Incorrecto", () => {
        expect(verificador.VerificarIncorrecto(CadenaIncorrecta)).toEqual("Incorrecto");
    });
});