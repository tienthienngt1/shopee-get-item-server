const express = require("express");
const app = express();
const axios = require("axios");

app.get("/",async (req,res)=>{
  const re = await axios.get("https://shopee.vn/api/v4/item/get?itemid=17689791830&shopid=711707322",{headers:{"af-ac-enc-dat":"null"}})
  res.json(200, {data: re.data})
})

app.listen(3000);
