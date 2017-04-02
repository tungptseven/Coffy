/**
 * Created by msi on 02/04/2017.
 */
class Location {
    constructor(id, name, address, octime, rate, lat, long) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.octime = octime;
        this.rate = rate;
        this.lat = lat;
        this.long = long;
    }
}


/*let data = [
    1000, 'Cora Cafe', '24 Hòa Mã', '07:00 AM - 11:00 PM', 7.2, 21.01583815, 105.8561032,
    1001, 'Pattern Coffee', "108 K2 Bách Khoa, Ngõ 48 Tạ Quang Bửu", '07:00 AM - 10:00 PM', 7.5, 21.001128, 105.849237,
    1002, 'Starbucks Coffee', '314 Bà Triệu,Hai Bà Trưng', '07:00 AM - 11:30 PM', 7.9, 21.01068, 105.849047,
    1003, 'Kàffe Cây Xăng', "101 E5, Ngõ 29 Tạ Quang Bửu", '08:00 AM - 11:00 PM', 7.1, 21.00184004, 105.8494467,
    1004, 'Greecy - Coffee & Cake', '10 Ngõ 84 Trần Đại Nghĩa', "08:00 AM - 11:00 PM", 6.6, 20.99939609, 105.8453174,
    1005, 'Urban Station Coffee Takeaway', '61 Quang Trung', '07:00 AM - 10:00 PM', 7.6, 21.017249, 105.847081,
    1006, 'Bay Coffee & Tea', '48 Nguyễn Bỉnh Khiêm', "08:00 AM - 11:00 PM", 7.1, 21.015371, 105.848556,
    1007, 'Highlands Coffee - Vincom Bà Triệu', "Tầng 1, Vincom Bà Triệu, 191 Bà Triệu", "08:00 AM - 10:00 PM", 7.3, 21.011441, 105.850038,
    1008, 'Anh Hòa Bakery & Coffee', '48 Trần Đại Nghĩa', '07:00 AM - 11:00 PM', 6.4, 21.00171484, 105.8449808,
    1009, 'Fika Café', '50 Lò Đúc', '07:00 AM - 11:00 PM', 7.5, 21.01608, 105.8563678,
    1010, 'Sky1991 - Coffee & Hot Dog', '111K2 Ngõ 48 Tạ Quang Bửu', "08:00 AM - 11:00 PM", 7.0, 21.00098366, 105.8490054
];*/

let loc = new Location(1000, 'Cora Cafe', '24 Hòa Mã', '07:00 AM - 11:00 PM', 7.2, 21.01583815, 105.8561032);
let loc1 = new Location(1001, 'Pattern Coffee', "108 K2 Bách Khoa, Ngõ 48 Tạ Quang Bửu", '07:00 AM - 10:00 PM', 7.5, 21.001128, 105.849237);
let loc2 = new Location(1002, 'Starbucks Coffee', '314 Bà Triệu,Hai Bà Trưng', '07:00 AM - 11:30 PM', 7.9, 21.01068, 105.849047);
let loc3 = new Location(1003, 'Kàffe Cây Xăng', "101 E5, Ngõ 29 Tạ Quang Bửu", '08:00 AM - 11:00 PM', 7.1, 21.00184004, 105.8494467);
let loc4 = new Location(1004, 'Greecy - Coffee & Cake', '10 Ngõ 84 Trần Đại Nghĩa', "08:00 AM - 11:00 PM", 6.6, 20.99939609, 105.8453174);
let loc5 = new Location(1005, 'Urban Station Coffee Takeaway', '61 Quang Trung', '07:00 AM - 10:00 PM', 7.6, 21.017249, 105.847081);
let loc6 = new Location(1006, 'Bay Coffee & Tea', '48 Nguyễn Bỉnh Khiêm', "08:00 AM - 11:00 PM", 7.1, 21.015371, 105.848556);
let loc7 = new Location(1007, 'Highlands Coffee - Vincom Bà Triệu', "Tầng 1, Vincom Bà Triệu, 191 Bà Triệu", "08:00 AM - 10:00 PM", 7.3, 21.011441, 105.850038);
let loc8 = new Location(1008, 'Anh Hòa Bakery & Coffee', '48 Trần Đại Nghĩa', '07:00 AM - 11:00 PM', 6.4, 21.00171484, 105.8449808);
let loc9 = new Location(1009, 'Fika Café', '50 Lò Đúc', '07:00 AM - 11:00 PM', 7.5, 21.01608, 105.8563678);
let loc10 = new Location(1010, 'Sky1991 - Coffee & Hot Dog', '111K2 Ngõ 48 Tạ Quang Bửu', "08:00 AM - 11:00 PM", 7.0, 21.00098366, 105.8490054);

//console.log(loc,loc1,loc2,loc3,loc4,loc5,loc6,loc7,loc8,loc9,loc10);
let locations = [loc, loc1, loc2, loc3, loc4, loc5, loc6, loc7, loc8, loc9, loc10];
//console.log(locations);

function haversine() {
    let radians = Array.prototype.map.call(arguments, function (deg) {
        return deg / 180.0 * Math.PI;
    });
    let lat1 = radians[0], lon1 = radians[1], lat2 = radians[2], lon2 = radians[3];
    let R = 6372.8; // km
    let dLat = lat2 - lat1;
    let dLon = lon2 - lon1;
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    let c = 2 * Math.asin(Math.sqrt(a));
    return R * c;
}
//console.log(haversine( 21.015208, 105.847244,21.027061, 105.819490));

/*let lat = 21.015208;
let long = 105.847244;*/

//console.log(haversine(loc9.lat,loc9.long,lat,long));

function findLocation(lat, long, distance) {
    for (let i =0; i < locations.length; i++){
        if (haversine(locations[i].lat, locations[i].long, lat, long) <= distance) {
            console.log(locations[i]);
        }
    }
}

findLocation(21.014816,105.846335,1);