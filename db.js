const mongoose= require("mongoose");

async function connectDB(){
    await mongoose.connect('mongodb://localhost:27017/houseapidb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
    }, function(){
        console.log("db connected");
    });
}

module.exports= {connectDB};