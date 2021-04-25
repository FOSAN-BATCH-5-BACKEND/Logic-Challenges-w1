function firstLetter(name){
    if (name[0] === 'a' || name[0] === 'b' || name[0] === 'c' || name[0] === 'd'){
        return 'Masuk group pertama';
    }
    else if (name[0] === 'e' || name[0] === 'f' || name[0] === 'g' || name[0] === 'h'){
        return 'Masuk group kedua';
    }
    else{
        return 'Masuk group terakhir'; 
    }
}

console.log(firstLetter('alwan'));
console.log(firstLetter('bhagas'));
console.log(firstLetter('fitra'));
console.log(firstLetter('hary'));
console.log(firstLetter('yupek'));
console.log(firstLetter('kipli'));
console.log(firstLetter('songkro'));