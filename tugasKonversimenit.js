function konversiMenit(menit){

    let jam = Math.floor(menit/60);
    let mnt = menit%60;
    return jam + " : " + mnt;
    
}

console.log(konversiMenit(50));
