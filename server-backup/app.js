const express = require('express')
const app = express()
const port = 6000
const fs = require('fs');

let backup = {}

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// app.use(express.bodyParser());

app.get('/', (req, res) => {
    res.json('hola mundo')
  })

app.post('/sendBackup', (req, res) => {
  console.log(req.body)
  let now= new Date();
  backup = {"date":now,"info":req.body}
  fs.writeFile(`./backups/backup-${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()}:${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}.json`, JSON.stringify(backup), error => {
    if (error)
      console.log(error);
    else
      console.log('Backup guardado en memoria');
  })
  console.log(backup)
  res.json({message:"La copia de seguridad se realizo con exito"})
})

app.get('/receiveBackup', (req, res) => {
    console.log(backup)
    res.json(backup)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})