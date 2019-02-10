/**
 * Solis
 * Retrieve NASA projection mapping data for the sun
 *
 * @author Tom Lavenziano <tlavenziano@gmail.com>
 */


const axios = require('axios');
const fs = require('fs');

const interface = require('commander');

const config = require('./config')

console.log(config);


// If Solis is executed directly (not as an imported module)
if(require.main === module) {
    callDirect()
}

function getSOHO(wvlen, date, outputDir) {
    date = date === 'Today' ? new Date().toISOString() : new Date(date).toISOString();
    outputDir = !!outputDir ? outputDir : './output';
    console.log('Source: SOHO');
    console.log('Wavelength: ' + wvlen);
    console.log('Date: ' + date);

    // getJP2Image
    axios({
        method: 'get',
        url: `${config.SOHO_URL}?date=${date}&sourceId=${wvlen}`,
        responseType: 'stream'
    }).then(res => {
        let headerLine = res.data.headers['content-disposition']
        let startFileNameIndex = headerLine.indexOf('"') + 1
        let endFileNameIndex = headerLine.lastIndexOf('"')
        let filename = headerLine.substring(startFileNameIndex, endFileNameIndex)
        res.data.pipe(fs.createWriteStream(`${outputDir}/${filename}`).on('error', console.error));

        console.log('OutputDir: ' + `${outputDir}/${filename}`);
    });

}

function getSDO(wvlen, date, outputDir) {
    date = date === 'Today' ? new Date().toISOString() : new Date(date).toISOString();
    outputDir = !!outputDir ? outputDir : './output';
    console.log('Source: SDO');
    console.log('Wavelength: ' + wvlen);
    console.log('Date: ' + date);

    // getJP2Image
    axios({
        method: 'get',
        url: `${config.SDO_URL}?date=${date}&sourceId=${wvlen}`,
        responseType: 'stream'
    }).then(res => {
        let headerLine = res.data.headers['content-disposition']
        let startFileNameIndex = headerLine.indexOf('"') + 1
        let endFileNameIndex = headerLine.lastIndexOf('"')
        let filename = headerLine.substring(startFileNameIndex, endFileNameIndex)
        res.data.pipe(fs.createWriteStream(`${outputDir}/${filename}`).on('error', console.error));

        console.log('OutputDir: ' + `${outputDir}/${filename}`);
    });

}

// Build the cli interface for user-friendly usage
function callDirect() {
    // SOHO wavelengths: 4, 5
    // SDO wavelengths: 8, 9, 10, 11, 12, 13, 14, 15, 16, 17
    interface
        .version('1.0.0')
        .option('-s, --source [SOHO, SDO]', 'Specify the source [source]', 'SOHO')
        .option('-w, --wavelength [SOHO: 4, 5 | SDO: 8-17]', 'Specify the wavelength', 'SOHO: 4 | SDO: 8')
        .option('-d, --date [yyyy-mm-dd]', 'Specify the date', 'Today')
        .option('-D, --dir [./output]', 'Directory the retrieved files are stored in', './output')
        .parse(process.argv);

    if (!process.argv.slice(2).length) {
        interface.help(); // Show help and exit
    }

    const src = interface.source;
    const wvlen = interface.wavelength;
    const date = interface.date;
    const outputDir = interface.dir;

    (src === 'SDO') ? getSDO(wvlen, date, outputDir) : getSOHO(wvlen, date, outputDir);
}

module.exports = {
    getSOHO,
    getSDO
}
