const path = require('node:path');

//unir rutas con path.join

//`./content/subfolder` => x

//barra separadora de carpetas por sistema operativo
console.log(path.sep)

const filePath = path.joi('.','/content', '/subfolder', '/test.txt')

const base = path.basename('temp/midu/password.txt')

const extension = path.extname('image.jpg')

