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
//  if (name[0] == "a" || name[0] == "b" ||name[0] == "c" ||name[0] == "d") {
//      return "Masuk group pertama"
//  }

 let grupSatu = "Masuk group pertama";
 let grupDua = "Masuk group kedua";
 let grupTerakhir = "Masuk group terakhir";
  switch (name[0]) {
    case "a":
      return grupSatu;
      break;
    case "b":
      return grupSatu;
      break;
    case "c":
      return grupSatu;
      break;
    case "d":
      return grupSatu;
      break;
    case "e":
      return grupDua;
      break;
    case "f":
      return grupDua;
      break;
    case "g":
      return grupDua;
      break;
    case "h":
      return grupDua;
      break;

    default:
      return grupTerakhir;
      break;
  }
}

console.log(firstLetter('yoga')) //Masuk group pertama
console.log(firstLetter('budi'))// Masuk group pertama
console.log(firstLetter('athfal')) //Masuk group kedua
console.log(firstLetter('hary')) //Masuk group kedua
console.log(firstLetter('yupek')) // Masuk group terakhir
console.log(firstLetter('kipli')) // Masuk group terakhir
console.log(firstLetter('songkro')) //Masuk group terakhir