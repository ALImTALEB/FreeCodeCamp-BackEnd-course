let express = require('express');
let app = express();

const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))


app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/views/index.html')
})

app.use('/public', express.static(__dirname + '/public'))

// app.get('/json', (req, res)=> {

//     if ( process.env.MESSAGE_STYLE === "uppercase" )  {
//         res.json({
//             message: "Hello json".toUpperCase()
//         })
//     } else {
//     res.json({
//         message: "Hello json"
//     })
//     }

// })

// app.get('/json', (req, res, next) => {
//     console.log(req.method + " " + req.path + " - " + req.ip)
//     next()
// })

// app.get('/now', (req, res, next) => {
//     req.time = new Date().toString()
//     next()
// },(req, res) => {
//     res.json({
//         time: req.time
//     })
// })

// app.get('/name/:name/last/:last', (req, res)=>{

//     res.json({
//         echo: req.params
//     })
// })

// app.get('/name', (req, res)=> {

//     res.json({
//         name: req.query.first +" "+ req.query.last
//     })
// })

app.post('/name', (req, res)=> {
    res.json({
        name: req.body.first +" "+ req.body.last
    })
})



 module.exports = app;
