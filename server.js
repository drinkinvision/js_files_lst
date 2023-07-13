const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/get-files', (req, res) => {
  const directoryPath = req.body.directoryPath;

  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).send('Произошла ошибка при чтении каталога');
      return;
    }

    res.json(files);
  });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
