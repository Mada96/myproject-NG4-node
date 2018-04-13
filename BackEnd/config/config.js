//Connection to DB
module.exports=  function ConnectMongoDB() {
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://MNasser:Mongolab1021995@ds115729.mlab.com:15729/ismailia_clup');
    
};