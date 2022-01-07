const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());


const {selectMsg,addMsg}=require("./user");
app.get("/1",async(req,res)=>
{
    const list=await selectMsg();
    res.json(list);
});

app.post("/add-msg",async(req,res) =>
{
    const user=req.body;
    await addMsg(user);
    res.json({message:"Message stored"});
    });

    app.listen(4000, () => console.log("server started"));
