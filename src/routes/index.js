const authen = require('./authen')
// const home = require('./home')


function route(app){
    app.use('/authen', authen)
}



module.exports = route