function callAPI() {
  fetch("http://localhost:3000/api1/sample")
    .then(response => response.json())
    .then(data => alert(JSON.stringify(data)))
    .catch(error => console.error('API Error:', error));
}

