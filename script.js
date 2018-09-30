$.ajax({
    // URL endpoint for the JSON object
    url: 'https://pokeapi.co/api/v2/type/3',
    // Type of HTTP request
    type: 'GET',
    // Datatype. Usually JSON
    dataType: 'json'
}).done((response) => {
    // let name = response.name
    console.log(response.name)
}).fail(() => {
    console.log('Ajax request fails!')
}).always(() => {
    console.log('This always happens ,regardless of successful ajax request or not.');    
})

var input = $('input')[0]
var button = $('button')[0]
var h1 = $('h1')[0]
button.click(function () {
    $ajax({
        url: 'https://pokeapi.co/api/v2/type/' + input.val(),
        type: 'GET',
        dataType: 'json'
    }}.done((response) => {
        h1.html(response)
    })

})
