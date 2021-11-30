const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

const publicDir = path.join(__dirname, './public')

app.use(express.static(publicDir))

app.get('', (req, res) => {
    res.send('index')
})

app.get('*', (req, res) => {
    res.send('404 ERROR! Page not found.')
})

app.listen(port, () => {
    console.log('Server is up on port ' + port + '.')
})