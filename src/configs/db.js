const mongoose = require("mongoose")

module.exports = () =>{

    return mongoose.connect("mongodb+srv://kishanpp:kishanpp@cluster0.4pm3t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    
}
