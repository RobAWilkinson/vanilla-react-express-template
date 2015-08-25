import express from 'express';
import path from 'path';
var app = express();
console.log(path.join(__dirname, 'client'));
app.get('/', (req, res) => {
  res.send('Hello ppl!');
});
app.use('/', express.static(path.join(__dirname, 'client')));
app.listen(3000, () => {
  console.log('listening on 3000');
});

