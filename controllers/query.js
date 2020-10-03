const fetch = require('node-fetch');
const bigMacIndexJson = require('../db/bigMacIndex.json')

const url = "https://ipvigilante.com/json/";
const settings = { method: "Get" };

const getClientIP = async () => {
    const response = await fetch('https://api.ipify.org?format=json')
    const data = await response.json()
    return await data.ip;
}

const getCountryName = async () => {
    const ip = await getClientIP();
    const response = await fetch((url + ip + '/country_name'), settings)
    const country = await response.json();    
    return await country.data.country_name;
}

const getBigMacData = async (req, res) => {
    try {
        const country = await getCountryName();
        const bigMacData = bigMacIndexJson.find(({Country}) => Country === country);
        res.json(bigMacData);
    } catch (e) {
        console.log(e);
    }
}

const getIndexOfCountry = async () => {
    const country = await getCountryName();
    let index = bigMacIndexJson.map((e) => { 
        return e.Country; 
    }).indexOf(country); 

    return index;
}


module.exports = {
    getClientIP,
    getCountryName,
    getIndexOfCountry,
    getBigMacData
};