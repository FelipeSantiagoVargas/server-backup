const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');

let backup = {}

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
// app.use(express.bodyParser());

app.post('/sendBackup', (req, res) => {
  console.log(req.body)
  let now= new Date();
  backup = {"date":now,"info":req.body}
  fs.writeFile(`./server-backup/backups/backup-${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()}-${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}.json`, JSON.stringify(backup), error => {
    if (error)
      res.json({message:"error al guardar la información"})
    else {
      res.json({message:"La copia de seguridad se realizo con exito"})
    }  
  })
})

app.get('/receiveBackup', (req, res) => {
    res.json(backup)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})