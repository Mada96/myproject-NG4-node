const express = require('express');
const bodyparser = require('body-parser');
const dbConnection = require('./config/config');

//Models Variables
const mymodels = require('./Schema/ClupMemberSchema');
const mongoose = require('mongoose');

//open connection 
dbConnection();

const app = express();
app.use(bodyparser.json());

app.post('/api/db/addClup', (req, res) => {
    console.log(req);
    let name = req.body.name;
    let address = req.body.address;

    var myClup = new mymodels.ClupsModel({
        _id: mongoose.Types.ObjectId(),
        name: name,
        address: address
    });
    myClup.save((err) => {
        if (err == null) {
            res.json({ status: "Saved Successfully" });
        }
        else {
            res.json({ status: "save failure" });
        }
    });
});

app.post('/api/db/addMember', (req, res) => {
    let name = req.body.name;
    let address = req.body.address;
    let age = req.body.age;
    let type = req.body.type;

    var myMember = new mymodels.MembersModel({
        _id: mongoose.Types.ObjectId(), // auto generated
        name: name,
        address: address,
        age: age,
        type: type,
        clup: req.body.id
    });

    myMember.save((err) => {
        if (err == null) {
            mymodels.ClupsModel.findById(req.body.id).lean().exec((err, clup) => {
                clup.members.push(myMember);
                mymodels.ClupsModel.update({ _id: req.body.id }, clup, (err) => {
                    console.log(req.body);
                });
            });
            res.json({ status: "Member added successfully" });
        }
        else {
            res.json({ status: "adding failure" });
        }
    });
});

app.post('/api/db/getClupMembers', (req, res) => {
    mymodels.ClupsModel.findById(req.body.id).lean()
        .populate({path:'members', model: mymodels.MembersModel})
        .exec((err, clup) => {
            res.json({ member_clup: clup });
            console.log(res);
        })
});

app.get('/api/db/getAllClups', (req, res) => {

    mymodels.ClupsModel.find({})
    .populate({path:'members', model: mymodels.MembersModel}).exec((err, data) => {
        res.json({ clups: data });
        console.log(res);
    });
});

//Front-End
app.use('/*', (req, res, next) => {
    res.sendFile(path.join(__dirname, './../dist', 'index.html'));
  });
//PORT
const port = process.env.PORT || 9243;
// listen to the port and logging verifying msg
app.listen(port, () => {
  console.log("server is listening on port: ", port);
});
// app.listen(7777);