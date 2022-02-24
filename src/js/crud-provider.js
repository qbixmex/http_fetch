const urlCRUD = "https://reqres.in/api/users";

/**
 * Get User from API
 * @param { number } id
 * @returns {Promise<{
 *  id: number,
 *  first_name: string,
 *  last_name: string,
 *  email: string,
 *  avatar: string
 * }>}
 */
const getUser = async ( id ) => {
    const response = await fetch(`${ urlCRUD }/${ id }`);
    const { data } = await response.json();

    return data;
};

/**
 * Create user to database.
 * @param {{ name: string, job: string }} user
 * @returns {Promise<{
 *  id: string,
 *  name: string,
 *  job: string,
 *  createdAt: string
 * }>}
 */
const createUser = async ( user ) => {
    const response = await fetch( urlCRUD, {
        method: "POST",
        body: JSON.stringify( user ),
        headers: {
            "Content-Type": "application/json"
        }
    });

    return await response.json();
};

/**
 * Update user to database
 * @param {number} id
 * @param {{ name: string, job: string }} user
 * @returns {Promise<{
 *  name: string,
 *  job: string,
 *  createdAt: string
 * }>}
 */
const updateUser = async ( id, user ) => {
    const response = await fetch( `${ urlCRUD }/${ id }`, {
        method: "PATCH",
        body: JSON.stringify( user ),
        headers: {
            "Content-Type": "application/json"
        }
    });

    return await response.json();
};

export {
    getUser,
    createUser,
    updateUser,
};