function handeResponse(response) {
  if (response.status !== 200) {
    throw new Error('Looks like there was a problem. Status Code: ' +
      response.status);
  }

  // Examine the text in the response
  return response.json().then(function(data) {
    return data;
  });
}

module.exports = function getData() {
  return fetch('https://httpbin.org/ip')
    .then(handeResponse)
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
}
