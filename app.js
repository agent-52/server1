const express = require("express")

const app = express()

app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) =>{
  res.send("hi")
})

app.post("/", (req, res) =>{
  console.log(req)
  res.redirect("/")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () =>{
  console.log(`server up and running on port${PORT}`)
})

