const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hola woeon', app: 'natours' });
});

app.post('/', (req, res) => {
  res.send('you can post here');
});

const port = 3000;
app.listen(port, () => {
  console.log('app runing on port ' + port);
});
