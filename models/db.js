const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/StudentDB',{
    useNewUrlParser: true
},
err => {
    if(!err){
        console.log("connection succeded");
    }
    else{
        console.log("error in connection" +err);
    }
});

require('./student.model');