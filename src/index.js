import "./sass/styles.scss";

const jokeUrl = "https://api.chucknorris.io/jokes/random";

fetch( jokeUrl ).then( response => {
    response.json().then( ({ id, value }) => {
        console.log( "ID:", id );
        console.log( "Value:", value );
    })
});
