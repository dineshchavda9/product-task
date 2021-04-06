const mongoose = require('mongoose')

// Database connection 
mongoose.connect("mongodb://localhost:27017/Shopping", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify : false,
     useCreateIndex : true
}).then(() => console.log("Connection Succesfull")).catch((err) => console.log(err));