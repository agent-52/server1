const express = require("express")

const app = express()

app.use(express.urlencoded({extended: true}))
let data;

app.get("/", (req, res) =>{
  
  res.send(data||"hi")
})

app.post("/", (req, res) =>{
  console.log(req.body)
  data = req.body
  res.redirect("/")
})

const PORT =  3000
app.listen(PORT, () =>{
  console.log(`server up and running on port${PORT}`)
})

