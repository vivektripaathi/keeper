const mongoose =  require('mongoose');
const { Schema } = mongoose;

mongoose
.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true})
.then(()=>{
    console.log("Connected to DB");
})
.catch(err => console.log(err))