class Calculadora {
    // Suma dos números
    suma(a, b) {
        return a + b;
    }

    // Resta dos números
    resta(a, b) {
        return a - b;
    }

    // Multiplica dos números
    multiplicar(a, b) {
        return a * b;
    }

    // Divide dos números, lanzando error si el divisor es cero
    division(a, b) {
        if (b === 0) {
            throw new Error('No se puede dividir entre cero');
        }
        return a / b;
    }
}

module.exports = Calculadora;