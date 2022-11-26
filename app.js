const express = require('express')
const app = express()
// const port = process.env.PORT || 3000;
const db = require('./src/config/db/db')
const route = require('./src/routes/index')
var bodyParser = require('body-parser')
// const path = require('path')



// import db from './src/config/db/db'
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
db.connect()
route(app)
app.get('/', function(req, res){
    res.json({message:'none'})
})
// console.log(process.env.PORT)
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });