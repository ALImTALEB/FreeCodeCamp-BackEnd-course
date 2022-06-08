//  app.use('/json',  middleware=(req, res, next)=> {

// console.log(req.method + " " + req.path + " - " + req.ip)

//     next()
// } )

// app.use('/hi',  middleware=(req, res, next)=> {

//     console.log('middle'+"/"+ req.path )
    
//     } )

// app.get("/hi", (req, res) => {
//     res.send("Hello Express");
//   });

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/views/index.html')
// } )

// app.use("/public", express.static(__dirname + "/public"));

// app.get('/json', (req, res, next)=> {

//     if (process.env.MESSAGE_STYLE === 'uppercase'){
//         res.json(({
//             "message": "Hello json".toUpperCase()
//         }))
//     } else {
//         res.json({
//             "message": "Hello json"
//         })
//     }
    
// })


// app.get('/now', (req, res, next)=> {
//     req.time = new Date().toString()
//     next()
// }, (req, res)=> {
//     res.send({
//        time: req.time
//     })
// }

// )

// app.get('/:word/echo', (req, res)=> {
//     res.send({
//         echo: req.params.word
//     })
// })
// app.use(bodyParser.urlencoded({extended: false}))
// app.use(bodyParser.json());

// app.route('/name').get( (req, res) => {
//     const  { first, last } = req.query
//     res.send({
//         name: `${first} ${last}` 
//     })
// } ).post( (req, res) => {
//     const  { first, last } = req.body
//     res.send ({
//         name: `${first} ${last}`
//     })
// } )
