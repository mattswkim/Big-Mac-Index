const query = require('./query')
const bigMacIndexJson = require('../db/bigMacIndex.json')

const randomCountryIndexGen = async () => {
    const pos = await query.getIndexOfCountry();
    let rand = Math.floor(Math.random() * Math.floor(58));
    while (rand === pos) {
    rand = Math.floor(Math.random() * Math.floor(58));
    console.log("rand = " + rand + " pos= " + pos)
    }
    return rand
};

const randomCountryGen = async (req, res) => {
    const rand = await randomCountryIndexGen();
    res.json(bigMacIndexJson[rand]);
}


module.exports = {
    randomCountryGen,
    randomCountryIndexGen
};