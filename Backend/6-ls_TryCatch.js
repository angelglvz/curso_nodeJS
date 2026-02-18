const { error } = require('node:console');
const fs = require('node:fs/promises');

fs.readdir('.')
    .then(files => {
        console.log(files)
    })
    .catch(err =>{
        console.error('error: ', err)
    })