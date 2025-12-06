import express from 'express';
const app=express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("api success");
})
app.put('/edit-user',(req,res)=>{
    let mydata=req.body;
    console.log(mydata);
    res.end("data edited");
})
app.post('/add-user',(req,res)=>{
    let data=req.body;
    console.log(data);
    //here you should write logic to add data into your database
    res.send("data added");
})
app.listen(7000,()=>{
    console.log("Server is running at port 7000")
})