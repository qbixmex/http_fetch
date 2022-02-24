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

export {
    getUser
};