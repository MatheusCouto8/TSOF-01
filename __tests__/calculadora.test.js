import { somar } from "../src/calculadora.js";
import { subtrair } from "../src/calculadora.js";
import { multiplicar } from "../src/calculadora.js";
import { dividir } from "../src/calculadora.js";

describe("Calculadora", () => {
    test("Deve somar dois numeros corretamente", () => {
        // AAA
        //Arranjar (Preparar)
        const a = 2;
        const b = 3;

        // Act (Executar)
        const resultado = somar(a, b);

        // Assert (Verificar)
        expect(resultado).toBe(5);
    });

    test("Deve subtrair dois numeros corretamente", () => {
        // AAA
        //Arranjar (Preparar)
        const a = 13;
        const b = 3;

        // Act (Executar)
        const resultado = subtrair(a, b);

        // Assert (Verificar)
        expect(resultado).toBe(10);
    });


    test("Deve multiplicar dois numeros corretamente", () => {
        //AAA
        //Arranjar (Preparar)
        const a = 5;
        const b = 3;

        // Act (Executar)
        const resultado = multiplicar(a, b);

        // Assert (Verificar)
        expect(resultado).toBe(15);
    });

    test("Deve dividir dois numeros corretamente", () => {
        //AAA
        //Arranjar (Preparar)
        const a = 6;
        const b = 3;

        // Act (Executar)
        const resultado = dividir(a, b);

        // Assert (Verificar)
        expect(resultado).toBe(2);
    });

    test("Não é possível dividir por zero", () => {
        expect(() => {
            dividir(5, 0);
        }).toThrow("Não é possível dividir por zero");
    });
});