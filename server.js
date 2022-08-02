const express = require('express');
const { resolve } = require('path');

const app = express();

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.listen(process.env.PORT || 5000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server is running');
  }
});
