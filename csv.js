/**
 * Created by msi on 03/04/2017.
 */
const parse = require('csv-parse');
const fs = require('fs');


let parser = parse({delimiter: ','}, (err,data) => {
    console.log(data);
    console.log(data.length);
});

fs.createReadStream(__dirname+'/Coffy_data.csv').pipe(parser);
