document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Create an object to hold the data
    const formData = {
      username: username,
      password: password
    };
  
    // Make an HTTP POST request to send the data to the server
    fetch("/collect", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log("Data collected successfully:", data);
      // You can perform any additional actions with the response data here
    })
    .catch(error => {
      console.error("Error collecting data:", error);
      // Handle any errors that occur during data collection
    });
  });
  