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

const html = `

<!DOCTYPE html>
<html>
<head>
  <title>Список файлов</title>
</head>
<body>
  <h1>Список файлов</h1>
  <input type="file" id="directoryInput" directory="" webkitdirectory="" />
  <button onclick="getFiles()">Получить файлы</button>
  <ul id="fileList"></ul>

  <script src="get-files.js"></script>
</body>
</html>
