const { connect } = require('./mongodb')

async function query() {
  const db = await connect()
  const salesCollection = db.collection('sales')

  // Criando um índice no campo 'orderDate'
  // https://www.mongodb.com/docs/drivers/node/current/fundamentals/indexes/#single-field-indexes
  await salesCollection.createIndex({ orderDate: 1 })

  // Criando um índice no campo 'region'
  // https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/read-operations/text/#search-text
  await salesCollection.createIndex({ region: 'text' })
  
  console.log('Venda de ordem mais recente:')
  console.log(await findMostRecentOrder(salesCollection))
  console.log('\n\n\n')

  console.log('Venda de lucro entre 3000 e 3010:')
  console.log(await findWithProfitBetween(salesCollection, 3000, 3010))
  console.log('\n\n\n')

  console.log('Venda com data entre 2020-05-25 e 2020-05-26:')
  console.log(await findWithDateBetween(salesCollection, 20200525, 20200526))
  console.log('\n\n\n')

  console.log('Vendas das regioẽs que dão match com "america"')
  console.log(await findByRegion(salesCollection, 'america'))
  console.log('\n\n\n')
}

async function findMostRecentOrder(collection) {
  return collection
    .findOne({}, { sort: { orderDate: -1 } })
}

async function findWithProfitBetween(collection, min, max) {
  const cursor = await collection
    .find({
      totalProfit: {
        $gte: min,
        $lte: max,
      }
    })
    .limit(2)
  return cursor.toArray()
}

async function findWithDateBetween(collection, min, max) {
  const cursor = await collection
    .find({
      orderDate: {
        $gte: min,
        $lte: max,
      }
    })
    .limit(2)
  return cursor.toArray()
}

async function findByRegion(collection, region) {
  const cursor = await collection
    .find({
      $text: {
        $search: region,
      }
    })
    .limit(2)
    return cursor.toArray()
}

query()