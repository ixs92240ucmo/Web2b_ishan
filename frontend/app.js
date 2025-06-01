function callAPI() {
  fetch("https://your-api-url.com/sample")
    .then(response => response.json())
    .then(data => alert(JSON.stringify(data)))
    .catch(error => console.error('API Error:', error));
}
