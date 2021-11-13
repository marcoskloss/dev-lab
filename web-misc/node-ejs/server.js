const express = require('express')
const app = express()

const todos = [
    { title: 'Task #1', description: 'Some string here' },
    { title: 'Task #2', description: 'Another one' },
    { title: 'Task #3', description: 'Last one' }
]

app.set('view engine', 'ejs')

app.get('/test', (_, res) => {
        res.send('<h1>my name is Jhon Cenaaa</h1>')
})

app.get('/', (_, res) => {
    res.render('index', { todos })
})

app.listen(7777, () => console.log('its alive!'))
