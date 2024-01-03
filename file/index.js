const apiUrl = 'https://silver-spork-979w477wqxr92p5qg-1337.app.github.dev/api/header-texts'; // Replace with your API endpoint
const apiToken = 'fa3a50628fcece98a817217a13fab588fb83e85c03fe926349d867a300d252aeb09b4ce1578ec62438858f2c318321694bd7350dac6529206c6f4457977aa370d0c3ee451cb92124242b08a0f01f827b29360ee49c04d6109c72ec30c23a9cfd2999f5861b54bd1290703d29112e44bb62fd02df0ffd3b00752cb0371a95caf0'; // Replace with your actual API token

const headers = {
  'Authorization': `Bearer ${apiToken}`,
  'Content-Type': 'application/json',
  // Add any other headers your API may require
};

fetch(apiUrl, {
  method: 'GET',
  headers: headers,
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Handle the data returned by the API
    console.log(data);
  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error);
  });
