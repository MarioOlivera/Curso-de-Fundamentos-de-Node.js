import fs, { read } from 'fs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { Stream } from 'stream'
import util from 'util'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

let data = ''

let readableStream = fs.createReadStream(__dirname + '/input.txt')

readableStream.setEncoding('UTF8');

readableStream.on('data', (chunk) => {
    data += chunk
})

readableStream.on('end', () => {
    console.log(data)
})

//process.stdout.write('hola');
//process.stdout.write('que');
//process.stdout.write('tal');

const Transform = Stream.Transform

function Upper() {
    Transform.call(this)
}

util.inherits(Upper, Transform)

Upper.prototype._transform = function (chunk, codif, cb) {
    let chunkUpper = chunk.toString().toUpperCase()

    this.push(chunkUpper)
    cb()
}

let upper = new Upper()

readableStream
    .pipe(upper)
    .pipe(process.stdout)