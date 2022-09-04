// Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file
const countriesFile = require('./countries') 
const webTechsFile = require('./web_techs')
console.log(countriesFile.countries);
console.log(webTechsFile.webTechs);

