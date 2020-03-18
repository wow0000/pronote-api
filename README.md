# Pronote library

### Note: This lib was originally ported for a personal project and *no liability is provided* including CAS support.

Original api from Litarvan (https://github.com/Litarvan/pronote-api)

## Installation
![npm](https://img.shields.io/npm/v/pronote-lib)
```Bash
npm install pronote-lib
```
## Usage fetch & geo
```Javascript
const pronote = require("pronote-lib");

let url = "http://xyz.com/pronote/";
let cas = "ac-lyon"; //Use none bypass CAS auth.

pronote.fetch(username, password, url, cas).then(function(res){
    console.log(res);
});

pronote.geo("48.8666", "2.3333").then(function (res) {
	console.log(res)
    /*
    [
      {
        url: 'https://0911028Y.index-education.net/pronote',
        nomEtab: 'COLLEGE BUISSON',
        lat: '48.689780677',
        long: '2.378403720',
        cp: '91260'
      },
      {
        url: 'https://0911029Z.index-education.net/pronote',
        nomEtab: 'COLLEGE PICASSO\r\n',
        lat: '48.690822079',
        long: '2.279716714',
        cp: '91160'
      },
      {
        url: 'https://0910715H.index-education.net/pronote',
        nomEtab: 'LYCEE PROF. JEAN PERRIN',
        lat: '48.691235348',
        long: '2.301254789',
        cp: '91163'
      },
    */
}).catch(function (err) {
	console.log(err)
})

``` 
The fetch request sends a JSON with these informations: [**Exemple de sortie de l'application**](https://gist.github.com/Litarvan/ec666fa544f6d036e515867d0f266ca7)
## Usage User class

```Javascript
const pronote = require("pronote-lib");

let url = "http://xyz.com/pronote/";
let cas = "ac-lyon"; //Use none bypass CAS auth.

let user = new pronote.User({username: "xxx.yyy", "password": "****",url,cas}, function(){
    user.get_marks().then(function(res){
        console.log(res);
    }).catch(function(err){
        console.error(err);   
    })
})
```

#### Methods:
* constructor({username, password, url, cas}, callback = function () {}, auto_login = true)
* get_menu(date = new Date())
* get_profile_pic()
* get_information(since = 3)
* get_homework(weekShift = 9)
* get_absences()
* get_reports()
* get_timeplan(date = new Date())
* get_marks()
* get_student()
* get_messages(show_read = true) //This function return raw pronote data
* get_courses_content()

Every of theses functions returns a promise.

Functions with "=" arguments is default values.

## Quels sont les avantages à l'api originel ?
- Les console.log ont été retiré pour permettre une utilisation également en mode CLI
- Certains erreurs ont été standardisé par un "bad login" (Uniquement dans la plupart des cas)
- Facilité d'utilisation grâce a fetch ainsi que NPM
- Légèrement plus léger grâce au serveur HTTP retiré entièrement, _même en importation de module_.
- Classe

## Données renvoyées

- **Emploi du temps** complet de la semaine en cours + prochaine, ordonné, avec timestamp précis pour chaque cours et semaine,
et marquage des profs absents et cours annulés
- **Devoirs** (si dispo) de la semaine en cours + prochaine, ordonnés, avec timestamp précis et fichiers joints
- **Notes** de tous les trimestres avec moyenne de chaque matière et moyenne générale (de la classe et de l'élève)
- **Bulletins** (si dispo) de tous les trimestres
- **Fichiers** partagés
- **Menu de la Cantine** (si dispo)
- **Informations**
- **Infos de l'élève** (nom + classe + avatar)

## Comptes région supportés

**Uniquement dans le cas où vous ne pouvez PAS vous connecter directement par Pronote, mais devez passer par une interface régionale spéciale**

**Si vous pouvez vous connecter directement sur l'interface de Pronote, l'API devrait fonctionner PEU IMPORTE VOTRE ACADÉMIE**

Sinon, l'API propose de se connecter à Pronote avec des comptes des académies suivantes :

- Académie de Lyon
- Académie de Montpellier
- Académie de Toulouse
- Académie de Grenoble
- Académie de Rouen
- Académie de Rennes
- Académie de Clermont-Ferrand
- Académie de Reims
- Académie de Nancy-Metz
- Académie de Strasbourg
- Académie de Caen
- Académie d'Orleans-Tours
- Académie de Besançon
- ENT "Île de France"
