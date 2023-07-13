function getFiles() {
    const directoryInput = document.getElementById('directoryInput');
  
    if (!directoryInput.files || directoryInput.files.length === 0) {
      console.error('Каталог не выбран');
      return;
    }
  
    const directoryPath = directoryInput.files[0].path;
  
    fetch('/get-files', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ directoryPath })
    })
    .then(response => response.json())
    .then(data => {
      const fileListElement = document.getElementById('fileList');
      fileListElement.innerHTML = '';
  
      data.forEach(file => {
        const listItem = document.createElement('li');
        listItem.textContent = file;
        fileListElement.appendChild(listItem);
      });
    })
    .catch(error => console.error('Ошибка:', error));
  }
  