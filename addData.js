/**
 * Created by msi on 07/04/2017.
 */
var pgp = require('pg-promise')();
var db = pgp('postgres://postgres:admin@163.44.206.220:5432/location');
let data = require('./data.json');
/*let json = {
    1 : {
        'name' : 'samsung galaxy 7',
        'price' : 5700000
    },
    2 : {
        'name' : 'samsung edge 7',
        'price' : 6000000
    }
};*/

for(let count in data){
    db.any('insert into location values (${address}, ${district},${image},${lat},${long},${name},${octime},${rate},${type},${id})',data[count])
        .then(()=>{
        console.log('import succeed');
})
.catch(error => {

    });
}
