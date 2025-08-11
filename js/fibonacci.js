function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Ejemplo de uso:
const numero = 8;
console.log(`El número de Fibonacci en la posición ${numero} es: ${fibonacci(numero)}`);