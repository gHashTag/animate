var proxy = require('express-http-proxy')
var app = require('express')()
 
app.use('/proxy', proxy("https://cloud.1c.fitness/app02/199/hs/api/v1/"))
app.listen(5000)
