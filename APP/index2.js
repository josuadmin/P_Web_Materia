const express = require('express');
const app = express();

function esPar(numero) {
  return numero % 2 === 0;
}

function obtenerMayorMedioMenor(n1, n2, n3) {
  let mayor, medio, menor;

  if (n1 > n2 && n1 > n3) {
    mayor = n1;
    medio = n2 > n3 ? n2 : n3;
    menor = n2 < n3 ? n2 : n3;
  } else if (n2 > n1 && n2 > n3) {
    mayor = n2;
    medio = n1 > n3 ? n1 : n3;
    menor = n1 < n3 ? n1 : n3;
  } else {
    mayor = n3;
    medio = n1 > n2 ? n1 : n2;
    menor = n1 < n2 ? n1 : n2;
  }

  return { mayor, medio, menor };
}

app.get('/home', function (req, res) {
  const n1 = parseInt(req.query.n1);
  const n2 = parseInt(req.query.n2);
  const n3 = parseInt(req.query.n3);

  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    return res.status(400).json({ error: 'Por favor, ingrese números válidos.' });
  }

  const { mayor, medio, menor } = obtenerMayorMedioMenor(n1, n2, n3);
  const resultadoN1 = esPar(n1) ? 'par' : 'impar';
  const resultadoN2 = esPar(n2) ? 'par' : 'impar';
  const resultadoN3 = esPar(n3) ? 'par' : 'impar';

  res.json({
    n1,
    n2,
    n3,
    resultadoN1,
    resultadoN2,
    resultadoN3,
    mayor,
    medio,
    menor,
  });
});

app.get('/nosotros', function (req, res) {
  res.send('Aqui estamos nosotros');
});

const port = 3000;
app.listen(port, function () {
  console.log(`Escuchando en el puerto ${port}`);
});