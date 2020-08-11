'use strict';

const kayttajat={
    'matti': '1234',
    'leila': 'salainen',
    'hilkka': 'secret'
};

const tarkastaKayttaja=(kayttaja,salasana)=>kayttajat[kayttaja]===salasana;

module.exports={tarkastaKayttaja};