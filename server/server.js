const ex = require('express')

const app = ex()


const port = process.env.PORT || 5000
app.use(ex.static('public')).listen(port)
console.log(`http://localhost:${port}`)