const { createReadStream } = require('fs')
const path = require('path')
const { pipeline } = require('stream/promises')
const { Transform, Writable } = require('stream')
const { parse } = require('csv-parse')

const { connect, disconnect } = require('./mongodb')

const dataFile = path.resolve('data.csv')

const columnNames = [
  'region',
  'itemType',
  'salesChannel',
  'orderPriority',
  'orderDate',
  'orderId',
  'totalProfit',
]

const csvParser = () => {
  return parse({
    columns: columnNames,
    skipEmptyLines: true,
    delimiter: ',',
    trim: true,
  })
}

// https://stackoverflow.com/questions/56190776/node-js-stream-with-array
class BufferStream extends Transform {
  constructor(bufferSize = 1000) {
    super({ objectMode: true })
    this.buffer = new Array(bufferSize)
    this.BUFFER_SIZE = bufferSize
  }

  _transform(data, _enc, callback) {
    this.buffer.push(data);
    if (this.buffer.length >= this.BUFFER_SIZE) {
      if (this.push(this.buffer.splice(0).filter(Boolean))) {
        callback();
      } else {
        this._read = () => {
          delete this._read;
          callback();
        };
      }
    } else {
      callback();
    }
  }

  _final(callback) {
    this.push(this.buffer.filter(Boolean));
    callback();
  }
}

const chunkStream = () => new BufferStream()

const save = (db) => {
  let totalCount = 0
  return new Writable({
    objectMode: true,
    write(chunk, _enc, cb) {
      process.stdout.write(`[INFO] receiving chunk of size ${chunk.length}\n`)
      const data = chunk.map(item => ({
        insertOne: {
          document: { 
            ...item, 
            totalProfit: parseInt(item.totalProfit),
            orderDate: parseInt(item.orderDate),
          }
        }
      }))

      db
        .collection('sales')
        .bulkWrite(data)
        .then(() => {
          totalCount += chunk.length
          process.stdout.write(`[INFO] ${chunk.length} docs inserted\n`)
          process.stdout.write(`[INFO] total: ${totalCount}\n`)
          cb()
        })
        .catch(cb)
    }
  })
}

const run = async () => {
  const db = await connect()

  await pipeline(
    createReadStream(dataFile),
    csvParser(),
    chunkStream(),
    save(db),
  )
  .catch((err) => console.log('[ERROR] seed failed', err))
  .finally(disconnect)
}

run()
