// import { init } from "./js/jokes-page";
import { getUsers } from "./js/http-provider";
import "./sass/styles.scss";

getUsers().then( console.log );

// init();
