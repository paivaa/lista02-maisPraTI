// Função para calcular os primeiros n elementos da Sequência de Fibonacci
function fibonacci(n) {
  let fib = [1, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

const n = 10; // Número de elementos a serem mostrados
const sequencia = fibonacci(n);

console.log(`Os ${n} primeiros elementos da Sequência de Fibonacci são:`);
console.log(sequencia.join(", "));
