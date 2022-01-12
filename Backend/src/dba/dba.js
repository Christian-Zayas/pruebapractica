const mongoose =  require('mongoose');
mongoose.connect('mongodb://localhost/globalprimex' , {
    useNewUrlParser: true , useFindAndModify: true , useUnifiedTopology: true , useCreateIndex: true
}).then(result => {
    console.log('Is connection  a mongodb')
}).catch(err => console.log(err))