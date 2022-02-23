import { getUsers } from "./http-provider";

const app = document.getElementById("app");

/** @type { HTMLTableSectionElement | null } */
let tbody;

/** @type { number } */
let rowIndex;

const createHtml = () => {
    
    const html = `
    <h2 class="my-4">Users</h2>

    <table class="table table-dark table-hover table-bordered">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    app?.appendChild( div );

    tbody = document.querySelector("tbody");
};


/**
 * Append a new row with the user data.
 * @param {import("./http-provider").User} user 
 * @returns {void}
 */
const createUserRow = ( user ) => {

    rowIndex++;

    const { first_name, last_name, email, avatar } = user;

    const html = `
        <td scope="col" valign="middle">${ rowIndex }.</td>
        <td scope="col" valign="middle">${ first_name }</td>
        <td scope="col" valign="middle">${ last_name }</td>
        <td scope="col" valign="middle">${ email }</td>
        <td scope="col" valign="middle">
            <img
                class="img-thumbnail"
                src="${ avatar }"
                alt="Avatar Image"
                style="width: 100px;"
            >
        </td>
    `;

    const tr = document.createElement('tr');
    tr.innerHTML = html;

    tbody?.append( tr );

}

/**
 * Initialize HTML
 * @return {Promise<void>}
 */
export const init = async () => {

    createHtml();

    rowIndex = 0;

    try {
        ( await getUsers() )?.forEach( createUserRow );
    } catch( error ) {

        throw error;

    }

};
