import * as CRUD from "./js/crud-provider";

import "./sass/styles.scss";

// CRUD.getUser( 1 ).then( console.table );


const newUser = {
    name: "Daniel",
    job: "developer"
};

CRUD.createUser( newUser ).then( console.table );
