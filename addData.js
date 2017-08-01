/**
 * Created by msi on 07/04/2017.
 */
var pgp = require('pg-promise')();
var db = pgp('postgres://postgres:admin@163.44.206.220:5432/coffy');
let data = require('./data (1).json');
const myasync = require('async');


for(let count in data){
    db.any('insert into coffy.image(name, id_location) values (${image}, ${id})',data[count])
        .then(()=>{
            console.log('import succeed');
        })
        .catch(error => {
            console.log('error',error);
        });
}



for(let count in data){
    db.any('insert into coffy.location(address, lat, long, name, octime, rate, id_location, id_district, id_type) values (${address},${lat},${long},${name},${octime},${rate},${id},${id_district},${id_type})',data[count])
        .then(()=>{
            console.log('import succeed');
        })
        .catch(error => {
            console.log('error',error);
        });
}