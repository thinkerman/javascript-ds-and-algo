let res = []
function  clubs(distance){
    if(distance >= 190  ){
        res.push(5); distance = distance-190;
        return clubs(distance)
    }
    if(distance >=170 && distance < 190){
        res.push(5); distance = distance-170; 
        return clubs(distance)
    } 
    if(distance >= 150 ){
        res.push(4); distance = distance-150;
        return clubs(distance)
    } 
    if(distance >=120 && distance < 150){
        res.push(4); distance = distance-120;
        return clubs(distance)
    } 
    if(distance >=90 ){
        res.push(3); distance = distance-90;
        return clubs(distance)
    } 
    if(distance >=60 && distance < 90){
        res.push(3); distance = distance-60;
        return clubs(distance)
    } 
    if(distance >=50 ){
        res.push(2); distance = distance-50;
        return clubs(distance)
    } 
    if(distance >=20 && distance < 50){
        res.push(2); distance = distance-20;
        return clubs(distance)
    } 
    if(distance >=10 ){
        res.push(1); distance = distance-10;
        return clubs(distance)
    } 
    if (distance >= 1 && distance <10) {
        res.push(1);
    } 
 return res;
} 
console.log(clubs(1000))