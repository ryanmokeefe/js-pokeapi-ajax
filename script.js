// Make sure to add your API key to the URL!
const url = 'https://pokeapi.co/api/v2/pokemon/1/';

// $.ajax takes an object as an argument with at least three key-value pairs...
// (1) The URL endpoint for the JSON object.
// (2) Type of HTTP request.
// (3) Datatype. Usually JSON.
$.ajax({
  url: url, // (1)
  type: 'GET', // (2)
  dataType: 'json', // (3)
})
  .done(() => {
    console.log('Ajax request success!');
  })
  .fail(() => {
    console.log('Ajax request fails!');
  })
  .always(() => {
    console.log(
      'This always happens regardless of successful ajax request or not.'
    );
  });
