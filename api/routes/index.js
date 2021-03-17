const express = require('express');
const { isPrime } = require('./../../utils/utils.js');

const router = express.Router();

router.get('/api/mensagem', (req, res) => {
  res.send({ express: 'Waiting..' });
});

router.post('/api/teste', (req, res) => {
  let listResult = isPrime(
    req.body.input.startNumber,
    req.body.input.endNumber
  );

  return res.send(listResult);
});

module.exports = router;
