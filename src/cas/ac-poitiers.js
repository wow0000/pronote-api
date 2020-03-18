module.exports = ({ username, password, url }) => require('./kdecole-wayf')({
    username,
    password,
    url,

    acName: 'Poitiers',
    casUrl: 'https://ent.ac-poitiers.fr/',
    idp: 'CT_ORIG_URL',
    atenURL: 'https://teleservices.ac-poitiers.fr/login/'
});
