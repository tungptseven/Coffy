/**
 * Created by msi on 03/04/2017.
 */
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

//const location = require('./location');
const search = require('./new_location');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});

app.post('/find/near',(req,res)=>{
    let uLong = req.body['long'],
        uLat = req.body['lat'],
        uType = req.body['type'],
        uR = req.body['r'];
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
