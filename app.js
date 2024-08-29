const express = require("express")

const app = express()

app.use(express.urlencoded({extended: true}))
let data = {
  "name": "abhay"
};

app.get("/", (req, res) =>{
  
  
  res.json(data||{})
})

app.post("/", async (req, res) =>{
  
   data = await req.body;
    res.redirect("/")
})

const PORT =  3000
app.listen(PORT, () =>{
  console.log(`server up and running on port${PORT}`)
  console.log("stringified: ",JSON.stringify(data))
})

 