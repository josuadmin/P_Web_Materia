const express = require('express');
const app = express();

function esPrimo(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
}

app.get('/home', (req, res) => {
  const n1 = parseInt(req.query.n1);
  const n2 = parseInt(req.query.n2);
  const n3 = parseInt(req.query.n3);

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    return res.status(400).json({ error: 'Uno o más valores proporcionados no son números válidos.' });
  }

  let mayor = Math.max(n1, n2, n3);
  let menor = Math.min(n1, n2, n3);
  let medio = n1 + n2 + n3 - mayor - menor;

  res.json({
    n1,
    n2,
    n3,
    mayor,
    medio,
    menor,
    n1_esPrimo: esPrimo(n1),
    n2_esPrimo: esPrimo(n2),
    n3_esPrimo: esPrimo(n3),
  });
});

app.get('/nosotros', (req, res) => {
  res.send("Aquí estamos nosotros");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});