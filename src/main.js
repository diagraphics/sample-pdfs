const path = require("node:path");
const fs = require("node:fs");

const pdfDir = path.resolve(__dirname, '..', 'pdf');

const pdfs = fs.readdirSync(pdfDir)
    .reduce((pdfs, file) => {
        pdfs[file] = path.join(pdfDir, file);
        return pdfs;
    }, {});

module.exports = pdfs;
