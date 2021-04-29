/*
Problem
Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka. 
Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya.
Jika kedua angka bernilai sama, function akan me-return -1.
*/

function bandingkanAngka(angka1, angka2) {
    // console.log(angka1, angka2);
    if(angka2 < angka1){
        return true;
    }
    if(angka1 < angka2){
        return false;
    }
    if(angka1 == angka2){
        return -1;
    }
    // }else if(angka2 > angka1){
    //     return true;
    // }
    // if(angka2 > angka1){
    //     return true;
    // }else if(angka1 < angka2){
    //     return false;
    // }else if(angka1 == angka2){
    //     return -1;
    // }else{
    //     return 'error';
    // }
}

// TEST CASES
console.log(bandingkanAngka(8, 5)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(2, 17)); // false