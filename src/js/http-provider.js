const jokeUrl  = "https://api.chucknorris.io/jokes/random";
const usersUrl = "https://reqres.in/api/users?page=1";
const cloudPreset = "xgxthp1x";
const cloudUrl = "https://api.cloudinary.com/v1_1/qbixmex/upload";

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

/**
 * @typedef {Object} User
 * @property {number} id         - example: 1
 * @property {string} first_name - example: "John"
 * @property {string} last_name  - example: "Doe"
 * @property {string} email      - example: "johndoe@gmail.com"
 * @property {string} avatar     - example: "https://fake-domain/image.jpg"
 */

/**
 * Get Users from API.
 * @returns { Promise<void|User[]> }
 */
const getUsers = async () => {
    try {

        const response = await fetch( usersUrl );

        if ( !response.ok ) {
            throw `Could not get users from this api service:\n${usersUrl}`
        };

        const { data: users } = await response.json();

        return users;

    } catch ( error ) {

        throw error;

    }
};

/**
 * Upload file to server.
 * @param {File} file
 * @return {Promise<string>}
 */
const uploadImage = async ( file ) => {
    const formdata = new FormData();
    formdata.append( "upload_preset", cloudPreset );
    formdata.append( "file", file );
    
    try {
        const response = await fetch( cloudUrl, {
            method: "post",
            body: formdata,
        });

        if (response.ok) {
            const cloudResponse = await response.json();
            return cloudResponse.secure_url;
        } else {
            throw await response.json();
        }
    } catch (error) {
        throw error;
    }
};

export {
    getJoke,
    getUsers,
    uploadImage,
};

