// App.js
import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
  if (!file) {
    console.error('No file selected.');
    return;
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('filename', file.name); // Append filename to FormData

  fetch('http://localhost:5000/upload', {
    method: 'POST',
    body: formData,
  })
    .then(response => response.text())
    .then(data => {
      setMessage(data);
      setFile(null); // Reset file state after successful upload
    })
    .catch(error => console.error('Error:', error));
};

  return (
    <div className="App">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload File</button>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
