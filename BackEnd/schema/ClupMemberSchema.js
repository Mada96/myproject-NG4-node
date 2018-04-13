const mongoose = require('mongoose');
var schema = mongoose.Schema;
//Clup SCheme
var clupSchema = new schema({
    _id: schema.Types.ObjectId,
    name: String,
    address: String,
    members: [{ type: schema.Types.ObjectId, ref: 'Members' }]
});
//Memeber SCheme
var membersSchema = new schema({
    _id: schema.Types.ObjectId,
    name: String,
    address: String,
    age: Number,
    type: String,
    cluP: { type: schema.Types.ObjectId, ref: 'Clups' }
});
//Export Models
var Members = mongoose.model('membersModel', membersSchema);
var Clups = mongoose.model('cluPsModel', clupSchema);

module.exports = {
    MembersModel: Members,
    ClupsModel: Clups
};

