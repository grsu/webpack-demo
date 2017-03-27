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

module.exports = async function getData() {
  let data;

  try {
    const response = await fetch('https://httpbin.org/ip');

    data = await handeResponse(response);
  } catch (err) {
    console.log('Fetch Error :-S', err);
  }

  return data;
}
