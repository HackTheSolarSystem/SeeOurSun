const solis = require('../solis');

console.log('----- Solis Test -----');

console.log('\n\nTesting SOHO...');
console.log('---------------------');
/**
 * @params wavelength, date, outputDir
 */
solis.getSOHO(5, new Date().toISOString(),'./output');

console.log('\n\nTesting SDO...');
console.log('---------------------');
/**
 * @params wavelength, date, outputDir
 */
solis.getSDO(14, new Date().toISOString(),'./output');

console.log('\n\n----- Test End -----\n');
