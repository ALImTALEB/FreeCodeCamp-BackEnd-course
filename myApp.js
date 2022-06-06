let express = require('express');
let app = express();

 require('dotenv').config()


// app.get("/hi", (req, res) => {
//     res.send("Hello Express");
//   });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
} )

app.use("/public", express.static(__dirname + "/public"));

app.get('/json', (req, res)=> {

    if (process.env.MESSAGE_STYLE === 'uppercase'){
        res.json(({
            "message": "Hello json".toUpperCase()
        }))
    } else {
        res.json({
            "message": "Hello json"
        })
    }
    
})

 module.exports = app;
