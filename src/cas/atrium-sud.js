const jsdom = require('jsdom');
const util = require('../util');

async function login({username, password, url}) {
    console.log(`Logging in '${username}' for '${url}' using Atrium-Sud CAS`);

    let jar = new jsdom.CookieJar();
    let dom = await util.getDOM({
        url: "https://atrium-sud.fr/connexion/login",
        jar
    });

    let lt = dom.window.document.getElementsByName('lt');
    let execution = dom.window.document.getElementsByName('execution');
    lt = lt[0].value;
    execution = execution[0].value;

    dom = await util.getDOM({
        url: "https://atrium-sud.fr/connexion/login",
        jar,
        method: 'POST',
        data: {
            username: username,
            password: password,
            lt: lt,
            execution: execution,
            _eventId: 'submit',
            submit: ''
        },
        asIs: true
    })

    dom = await util.getDOM({
        url: url,
        jar,
        method: 'GET',
        asIs: true,
        followRedirects: true
    });

    return util.tryExtractStart(username, dom);
}

module.exports = login;
