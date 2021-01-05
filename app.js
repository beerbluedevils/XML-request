const firstReq = new XMLHttpRequest();
firstReq.addEventListener('load',function() {
    console.log('First request work!');
    const data = JSON.parse(this.responseText);
    const filmURL = data.results[0].films[0];//access to the first result and first film of the first result
    const filmReq = new XMLHttpRequest(); //create a XML request
    filmReq.addEventListener('load', function(){ //chaining the request inside the first request
        console.log('Second request work!');
        const filmData = JSON.parse(this.responseText); //convert JSON to Javascript object
        console.log(filmData); //show the result if request is success
    })
    filmReq.addEventListener('error', function(e){
        console.log('Error!', e); //show the result if request is error
    })
    filmReq.open('GET',  filmURL);
    filmReq.send();
});

firstReq.addEventListener('error', (e) => {
    console.log('Error!!')
});
firstReq.open('GET', 'https://swapi.dev/api/planets/');
firstReq.send();