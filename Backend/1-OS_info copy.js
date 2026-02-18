//modulo ECMA SCRIPT -ES-

import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('informacion del sistema operativo')
console.log('---------------')
console.log('nombre del sistema operativo', platform())
console.log('version del sistema operativo', release())
console.log('arquitectura', arch())
console.log('cpu', cpus())
console.log('memoria libre',freemem())
console.log('memoria total', totalmem())
console.log('uptime', uptime()/60)