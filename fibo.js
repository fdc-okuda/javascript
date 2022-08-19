//Fibonacci

var r = 6;
var arrNum = [];

for(i = 0; i < r; i++) {
    if(i == 0){
        arrNum.push(0);
    }
    else if(i == 1){
        arrNum.push(1);
    }
    else if(i == 2){
        arrNum.push(i-1);
    }
    else{
        arrNum.push(arrNum[i-2] + arrNum[i-1]);
    }
}

console.log(arrNum);