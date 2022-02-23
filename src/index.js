import { getJoke } from "./js/http-provider";
import "./sass/styles.scss";

getJoke()
    .then( joke => console.table( joke ) )
    .catch( error => console.error( error ));