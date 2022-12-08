const { MongoClient } = require('mongodb')
const { log } = console

// docs sobre a encriptação Client-Side Field Level Encryption (CSFLE)
// https://www.mongodb.com/docs/manual/core/csfle/quick-start/#std-label-csfle-quick-start
const uri = 'mongodb://admin:admin@localhost:27017'
const dbName = 'sales-tde'

const client = new MongoClient(uri)

let connected = false

async function connect() {
  if (connected) {
    return client.db(dbName)
  }

  await client.connect()
    .then(() => log('[INFO] mongodb connection stablished'))
    .catch((err) => log('[ERROR] error when connecting to mongodb', err))

  connected = true
  return connect()
}

async function disconnect() {
  log('[INFO] closing mongodb connection')
  await client.close()
}

module.exports = { connect, disconnect }