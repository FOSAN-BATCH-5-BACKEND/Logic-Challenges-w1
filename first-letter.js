/**
---------------------
First Letter Grouping
---------------------

Diberikan sebuah variabel `name`. Buatlah sebuah script untuk menampilkan nama tersebut
berada di group ke-berapa, dengan aturan sebagai berikut:
- Jika huruf pertama dari `name` adalah a, b, c, d maka tampilkan 'Masuk group pertama'
- Jika huruf pertama dari `name` adalah e, f, g, h maka tampilkan 'Masuk group kedua'
- Selain itu tampilkan 'Masuk group terakhir'

Contoh:
- `name` = 'alwan', output: 'Masuk group pertama'
- `name` = 'fitra', output: 'Masuk group kedua'
- `name` = 'kipli', output: 'Masuk group terakhir'
- `name` = 'songkro', output: 'Masuk group terakhir'

*/

function firstLetter(name){
    let hurufAwal = name.charAt(0);
    let akhir = `${name} : Masuk group terakhir`;
    
    if (hurufAwal === "a" || hurufAwal === "b"|| hurufAwal === "c" || hurufAwal === "d"){
        return `${name} : Masuk group pertama`;
    } else if (hurufAwal === "e" || hurufAwal === "f"|| hurufAwal === "g" || hurufAwal === "h"){
        return `${name} : Masuk group kedua`;
    } else {
        return akhir;
    }
}

console.log(firstLetter('alwan')) //Masuk group pertama
console.log(firstLetter('bhagas'))// Masuk group pertama
console.log(firstLetter('fitra')) //Masuk group kedua
console.log(firstLetter('hary')) //Masuk group kedua
console.log(firstLetter('yupek')) // Masuk group terakhir
console.log(firstLetter('kipli')) // Masuk group terakhir
console.log(firstLetter('songkro')) //Masuk group terakhir