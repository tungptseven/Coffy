/**
 * Created by msi on 03/04/2017.
 */
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

//const location = require('./location');
const search = require('./new_location');

const promise = require('./pgp');


app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});


app.post('/find/near', (req, res) => {
    let uLong = req.body['long'],
        uLat = req.body['lat'],
        uType = req.body['type'],
        uR = req.body['r'];

    let db = promise.db;
    db.any("SELECT id, name, address, district, octime, rate, lat, long, type FROM public.location WHERE ST_DWithin(geog, ST_Point(${uLong}, ${uLat})::geography, ${uR}) AND type = ${uType};", {
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
    db.any("SELECT id, name, address, district, octime, rate, lat, long, type FROM public.location WHERE type = ${type} AND district = ${district};", {
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


/*app.post('/find/dist', (req, res) => {
    let type = req.body['type'],
        district = req.body['district'];
    let results = search.findLocInDistrict(type, district);
    console.log(results);
    res.json(results);
});*/


