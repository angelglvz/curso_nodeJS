const { error } = require('node:console');
const fs = require('node:fs/promises');
const path = require('node:path');

const folder = process.argv[2] ?? '.'

async function ls(folder){
    let files
    try{
        files = await fs.readdir(folder)
    }
    catch{
        console.error('error al leer directorio.')
        proccess.exit(1)
    }

    const filePromises = files.map(async file =>{
        const filePath = path.join(folder, file)
        let fileStats;
        try{
            fileStats = await fs.stat(filePath)

        }
        catch{
            console.error('no se pudo leer el archivo: ', filePath)
            process.exit(1)
        }

        const isDirectory = fileStats.isDirectory()
        const fileType = isDirectory? 'd': '-'
        const fileSize = String(fileStats.size)
        const fileModified = fileStats.mtime.toLocaleString()

        return `${fileType} ${file.padEnd(20)} ${fileSize.padStart(10)} ${fileModified}`


    })

    const filesInfo = await Promise.all(filePromises)
    filesInfo.forEach(fileInfo => console.log(fileInfo))
}

ls(folder)