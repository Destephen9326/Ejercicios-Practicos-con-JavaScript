function esPrimo(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Ejemplo de uso:
const numero = 7;
if (esPrimo(numero)) {
  console.log(`${numero} es un número primo.`);
} else {
  console.log(`${numero} no es un número primo.`);
}