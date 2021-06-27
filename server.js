const express = require('express');
const app = express()
const PORT = process.env.PORT || 80

app.use(express.static(__dirname + '/dist/front-end'))
app.get('/*', ((req, res) => {
  res.sendFile(__dirname + '/dist/front-end/index.html')
}))
app.listen(PORT, () => {
  console.log('Server started at port: ' + PORT)
})
