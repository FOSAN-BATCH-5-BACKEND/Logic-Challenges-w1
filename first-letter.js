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
  if(name[0] == "a" || name[0] == "b" || name[0] == "c" || name[0] == "d"){
      console.log("Masuk grup pertama");
  } else if(name[0] == "e" || name[0] == "f" || name[0] == "g" || name[0] == "h"){
      console.log("Masuk grup kedua");
  }else{
      console.log("Masuk grup terakhir");
  }
}

firstLetter('alwan'); //Masuk group pertama
firstLetter('bhagas');// Masuk group pertama
firstLetter('fitra');//Masuk group kedua
firstLetter('hary'); //Masuk group kedua
firstLetter('yupek'); // Masuk group terakhir
firstLetter('kipli'); // Masuk group terakhir
firstLetter('songkro'); //Masuk group terakhir