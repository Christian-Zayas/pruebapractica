const mongoose = require('mongoose');
//TODO:'mongodb://localhost/globalprimex' <= This is the default database
mongoose.connect(`mongodb+srv://CristianZayas:${process.env.PASSWORD_DBA}@cluster0.wbhpp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
    useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true, useCreateIndex: true
}).then(result => {
    console.log('Is connection  a mongodb')
}).catch(err => console.log(err))