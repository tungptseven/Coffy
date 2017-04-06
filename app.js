/**
 * Created by msi on 03/04/2017.
 */
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

//const location = require('./location');
const search = require('./new_location');
<<<<<<< HEAD
const promise = require('./pgp');
=======
>>>>>>> adbaa74ed87397a23f31990cc3f27e02cdda3921

app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});

<<<<<<< HEAD
app.post('/find/near', (req, res) => {
=======
app.post('/find/near',(req,res)=>{
>>>>>>> adbaa74ed87397a23f31990cc3f27e02cdda3921
    let uLong = req.body['long'],
        uLat = req.body['lat'],
        uType = req.body['type'],
        uR = req.body['r'];
<<<<<<< HEAD
    let db = promise.db;
    // db.any("SELECT name, address, district FROM public.location WHERE ST_DWithin(geog, ST_Point(${uLong},${uLat})::geography, ${uR}) AND type = ${uType};", [uLong, uLat, uR, uType])
    db.any("SELECT name, address, district FROM public.location WHERE ST_DWithin(geog, ST_Point(${uLong}, ${uLat})::geography, ${uR}) AND type = ${uType};", {
        uLong: uLong,
        uLat: uLat,
        uR: uR,
        uType: uType
    })
        .then(data => {
            console.log(data);
            res.json(data);
            // success;
        })
        .catch(error => {
            console.log(error);
            // error;
        });
    // let results = search.findLoc(uLat, uLong, uType, uR);
    // console.log(results);
    // res.json(results);
});

app.post('/find/dist', (req, res) => {
    let type = req.body['type'],
        district = req.body['district'];
    let db = promise.db;
    db.any("SELECT name, address, district FROM public.location WHERE type = ${type} AND district = ${district};", {
        district: district,
        type: type
    })
        .then(data => {
            console.log(data);
            res.json(data);
            // success;
        })
        .catch(error => {
            console.log(error);
            // error;
        });
    /*let results = search.findLocInDistrict(type, district);
    console.log(results);
    res.json(results);*/
});

/*app.post('/listAll', function (req, res) {
 let lat = req.body['lat'],
 long = req.body['long'],
 dis = req.body['dis'];
 let result = location.findBasic(lat,long,dis);
 console.log(result);
 });*/
=======
    let results = search.findLoc(uLat,uLong,uType,uR);
    console.log(results);
    res.json(results);
});

app.post('/find/dist',(req,res)=>{
    let type = req.body['type'],
        district = req.body['district'];
    let results = search.findLocInDistrict(type,district);
    console.log(results);
    res.json(results);
});

/*app.post('/listAll', function (req, res) {
    let lat = req.body['lat'],
        long = req.body['long'],
        dis = req.body['dis'];
    let result = location.findBasic(lat,long,dis);
    console.log(result);
});*/
>>>>>>> adbaa74ed87397a23f31990cc3f27e02cdda3921
