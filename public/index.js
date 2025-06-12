function showMessage() {
  fetch("/api/hello")
    .then(response => response.json())
    .then(data => {
      document.getElementById("message").innerText = data.message;
    })
    .catch(error => {
      console.error("Error:", error);
      document.getElementById("message").innerText = "Failed to fetch message";
    });
}
