function callAPI() {
  fetch("https://backend-app.azurewebsites.net/api1/sample")
    .then(response => response.json())
    .then(data => alert(JSON.stringify(data)))
    .catch(error => console.error('API Error:', error));
}

