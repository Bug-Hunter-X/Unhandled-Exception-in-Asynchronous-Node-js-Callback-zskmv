const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Use promises to handle asynchronous operations and errors
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        resolve('Success!');
      } else {
        reject(new Error('Something went wrong!'));
      }
    }, 1000);
  })
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    });
});
app.listen(3000, () => console.log('Server listening on port 3000'));