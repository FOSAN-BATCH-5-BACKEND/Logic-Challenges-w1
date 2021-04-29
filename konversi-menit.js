/*Problem
Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu dalam menit.
Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut.
Contoh, jika menit adalah 63, maka function akan me-return "1:03".
*/

function konversiMenit(menit) {
  // console.log(menit);
  let waktu = Math.floor(menit / 60) + ":" + ("0" + menit % 60).slice(-2)
  var jam = `${menit/60^0}:`+('0'+ menit%60).slice (-2)
  return jam;
}

// TEST CASES
console.log(konversiMenit(90));
// console.log(konversiMenit(124)); // 2:04
// console.log(konversiMenit(53)); // 0:53
// console.log(konversiMenit(88)); // 1:28
// console.log(konversiMenit(120)); // 2:00