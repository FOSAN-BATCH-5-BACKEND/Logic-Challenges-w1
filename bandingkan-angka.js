/*
Problem
Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka. 
Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya.
Jika kedua angka bernilai sama, function akan me-return -1.
*/

function bandingkanAngka(angka1, angka2) {
    if(angka2 > angka1){
        return "true";
    }else if(angka1 == angka2){
        return "-1";
    }else{
        return "false";
    }
}

// TEST CASES
bandingkanAngka(5, 8); // true
bandingkanAngka(5, 3); // false
bandingkanAngka(4, 4); // -1
bandingkanAngka(3, 3); // -1
bandingkanAngka(17, 2); // false