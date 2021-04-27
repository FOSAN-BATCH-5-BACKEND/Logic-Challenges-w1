/*
Competencies: Function and Conditionals

Instruksi
-------------------------------
Dalam suaru antrian terdapat 3 loket pelayanan 
Loket A akan melayani pelanggan dengan nomor urut 1, 4, 7, 10
Loket B akan melayani pelanggan dengan nomor urut 2, 5, 8, 11
Loket C akan melayani pelanggan dengan nomor urut 3, 6, 9, 12

Dan pada antrian ini hanya ada 12 antrian.

Jika nomor antrian lebih besar dari 12 atau lebih kecil dari 1, maka tampilkan "Nomor antrian invalid"

Buatlah function loketPelayan yang menerima input berupa nomor antrian dan 
mengembalikan Loket yang akan memberikan pelayanan.
Note:
- function locketPelayanan hanya menerima 1 parameter berupa angka
- gunakan conditional, dapat berupa if-else atau switch-case statement 
*/

function loketPelayan(nomorUrut) {
  let loketA = "Layanan Loket A";
  let loketB = "Layanan Loket B";
  let loketC = "Layanan Loket C";
  switch (nomorUrut) {
    case 1:
      return loketA;
      break;
    case 2:
      return loketB;
      break;
    case 3:
      return loketC;
      break;
    case 4:
      return loketA;
      break;
    case 5:
      return loketB;
      break;
    case 6:
      return loketC;
      break;
    case 7:
      return loketA;
      break;
    case 8:
      return loketB;
      break;
    case 9:
      return loketC;
      break;
    case 10:
      return loketA;
      break;
    case 11:
      return loketB;
      break;
    case 12:
      return loketC;
      break;

    default:
      return "Nomor antrian Invalid";
      break;
  }
}

console.log(loketPelayan(14)); // Layanan Loket A
console.log(loketPelayan(3)); // Layanan Loket B
console.log(loketPelayan(6)); // Layanan Loket C
console.log(loketPelayan(13)); // Tidak Masuk ke Loket
