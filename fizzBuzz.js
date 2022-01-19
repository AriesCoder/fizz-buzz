// Write your solution below this line:
for(let i = 1; i < 50; i++){
    if(i % 3 ===0 && i % 5 ===0){
        console.log(i, "fizzbuzz")
    }else if(i % 3 === 0){
        console.log(i, "fizz")
    }else if(i % 5 === 0){
        console.log(i, "buzz")
    }else{
        console.log(i)
    }
    
}