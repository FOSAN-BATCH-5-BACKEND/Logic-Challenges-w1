function bandingkanAngka(angka1, angka2){
    if (angka2 > angka1){
        return 'true';
    }
    else if (angka2 < angka1){
        return 'false';
    }
    else if (angka2 == angka1){
        return "-1";
    }
    else{
        return 'masukkan angka untuk dibandingkan';
    }
}
console.log(bandingkanAngka(2, 1));