const jokeUrl  = "https://api.chucknorris.io/jokes/random";
const usersUrl = "https://reqres.in/api/users?page=1";
/**
 * @typedef {Object} Joke
 * @property {string} id - Joke ID
 * @property {string} icon_url - Icon Image
 * @property {string} value - Joke
 */

/**
 * Get Random Joke from API
 * @returns {Promise<Joke>}
 */
const getJoke = async () => {
    try {

        const response = await fetch( jokeUrl );

        if ( !response.ok ) throw "Could not get jokes from this api service!";

        const { id, icon_url, value } = await response.json();
    
        return { id, icon_url, value };

    } catch( error ) {

        throw error;

    }
}

const getUsers = async () => {
    try {

        const response = await fetch( usersUrl );

        if ( !response.ok ) throw "Could not get users from this api service!";

        const { data: users } = await response.json();

        return users;

    } catch ( error ) {

        throw error;

    }
};

export {
    getJoke,
    getUsers,
};

