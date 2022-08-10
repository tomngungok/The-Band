const info = {
    firstName: "tom",
    lastName: "ngungok",
    age: 14,
    male: true,
    caucuamieng: "day di ong chau oi",
}
let undifinedTest= 10;
let tommoihoclaptrinhdc1ngay = null;
switch (info.age) {
    case 14:
        console.log('tommoihoclaptrinhdc1ngay')
        break;
    case 15:
        console.log('nodangprolaptrinh')
        break;
    case 16:
        console.log('nodaprolaptrinh')        
        break;
    default:
        console.log('deo bt')
        break;
}
function showObjectinfo(renderingObj) {
    console.log(renderingObj)
}
showObjectinfo({info, undifinedTest, tommoihoclaptrinhdc1ngay})
//const arr =["anhyeuem"];
//showObjectinfo(arr[2])
//for (let loiyeu = 0;loiyeu<1;loiyeu++) {
//    showObjectinfo(arr{loiyeu})
//}
//let loiyeu = 0
//do{
//    showObjectinfo(arr[0]);
//    loiyeu++
//} while (loiyeu <1)