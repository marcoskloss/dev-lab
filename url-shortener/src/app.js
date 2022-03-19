const express = require('express')
const path = require('path')

const app = express()
const port = 3000
const appUrl = 'http://localhost:' + port

const db = { counter: 0, urls: [] }

const dbSave = (data) => {
    db.urls.push(data)
    db.counter++
}
const dbGetById = (id) => {
    return db.urls.find(item => item.short === id)    
}

app.use(express.json())

app.use(
    express.static(path.resolve(__dirname, 'public'))
)

app.post('/url', (req, res) => {
    const currentId = db.counter

    dbSave({ full: req.body.url, short: currentId })
    
    const shortUrl = `${appUrl}/${currentId}`
    res.json({ shortUrl })
})

app.get('/:id', (req, res) => {
    const url  = dbGetById(Number(req.params.id))

    if (!url) {
        return res.status(404).send('<strong>Not found</strong>')
    }

    res.redirect(url.full)
})

app.listen(port, () => console.log('server on'))
