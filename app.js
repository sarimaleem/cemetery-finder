const express = require('express')
const app = express()
const port = 3000
const path = require('path')

// TODO: figure out how this works?
// app.use(express.static('frontend/'))

app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'frontend/home.html'))
    })

app.listen(port, () => {port
        console.log(`listening at ${port}`)
    })
