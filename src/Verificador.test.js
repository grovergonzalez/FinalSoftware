import Verificador from "./Verficador";

const cadena = "[]";
const verificador = new Verificador(cadena);

describe("Verificar Corchetes de apertura y cierre", () => {
    it("deberia verficar si existe un corchete de apertura", () => {
      expect(verificador.VerificarCocheteEntrada(cadena)).toEqual("[");
    });
    it("deberia verficar si existe un corchete de cierre", () => {
        expect(verificador.VerificarCorcheteCierre(cadena)).toEqual("]");
    });
  });
  