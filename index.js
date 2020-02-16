const pronote = require('./src/pronote');

/**
 * Fetch all information about an user.
 * @async
 * @param {string} username - Username.
 * @param {string} password - User's password.
 * @param {string} url - Pronote url
 * @param {string} cas - Authentication server
 */
function fetch(username, password, url, cas) {
    return pronote.fetch({username, password, url, cas, type: "fetch"});
}

module.exports = {
    fetch,
    pronote,
};
