function descomponerFactoresPrimos(n) {
  const factores = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor === 0) {
      factores.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factores;
}

// Ejemplo de uso:
const numero = 18;
console.log(`La descomposición en factores primos de ${numero} es: ${descomponerFactoresPrimos(numero).join(' x ')}`);