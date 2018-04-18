const  csv2json = require('csvtojson')
const fs = require('fs')
const path = require('path')
var csvFilePath = path.join(__dirname,"customer-data.csv")

csv2json(process.argv[2])
   .fromFile(csvFilePath)
   .on('json',(jsonObj)=>{
       // combine csv header row and csv line to a json object
       // jsonObj.a ==> 1 or 4
       console.log(jsonObj)
       fs.writeFile("outputjson.txt",jsonObj,function(error){
       if (error) return console.error(error)
       
       })
   })
   .on('done',(error)=>{
       console.log('end')
   })

//csv2json(process.argv[2])=>{ csvFilePath = process.argv[2] }

