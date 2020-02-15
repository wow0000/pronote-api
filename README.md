# Pronote library

Original api from Litarvan (https://github.com/Litarvan/pronote-api)

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

Encore une fois, cette liste peut être agrandie : n'hésitez pas à me contacter, je fais ça rapidement

## Utilisation
```Javascript
const pronote = require("pronote");

let url = "http://xxx.com/pronote/";
let cas = "ac-lyon";

pronote.fetch(username, password, url, cas).then(function(res){
    console.log(res);
});
``` 
