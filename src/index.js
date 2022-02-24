import * as CRUD from "./js/crud-provider";

import "./sass/styles.scss";

CRUD.getUser( 1 ).then( console.table );
