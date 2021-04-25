function loketPelayan(nomerUrut){
 
    if (nomerUrut === 1 || nomerUrut === 4 || nomerUrut === 7 || nomerUrut === 10){
        return 'Layanan Loket A'
    }
    else if (nomerUrut === 2 || nomerUrut === 5 || nomerUrut === 8 || nomerUrut === 11){
        return 'Layanan Loket B'
    }
    else if (nomerUrut === 3 || nomerUrut === 6 || nomerUrut === 9 || nomerUrut === 12){
        return 'Layanan Loket C'
    }
    // else if (isNaN(nomerUrut)){
    //     return 'Masukkan Nomer antrian dalam format angka'
    // }
    else{
        return 'Masukkan nomer antrian dalam format angka'
    }
        
}

console.log(loketPelayan());