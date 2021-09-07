const arr = [];
let i;
for(i=0; i<100; i++){
    arr.push(i)
}

for(const item of arr){
    console.log(item)
}

for(const [i, el] of arr.entries()){
    console.log(`${i +1}: ${el}`)
}
