const Calculadora = require('./calculadora');

describe('Calculadora', () => {
    let calculadora;

    beforeEach(() => {
        calculadora = new Calculadora();
    });

    test('La suma de 1 y 2 debe resultar en 3', () => {
        expect(calculadora.suma(1, 2)).toBe(3);
    });

    test('La suma de -1 y -2 debe resultar en -3', () => {
        expect(calculadora.suma(-1, -2)).toBe(-3);
    });

    test('La resta de 5 y 2 debe ser 3', () => {
        expect(calculadora.resta(5, 2)).toBe(3);
    });

    test('La multiplicación de 3 y 4 debe ser 12', () => {
        expect(calculadora.multiplicacion(3, 4)).toBe(12);
    });

    test('La división de 10 y 2 debe ser 5', () => {
        expect(calculadora.division(10, 2)).toBe(5);
    });

    test('La división por cero debe lanzar un error', () => {
        expect(() => {
            calculadora.division(10, 0);
        }).toThrow('No se puede dividir entre cero');
    });
});