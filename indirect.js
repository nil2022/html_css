// let i=0;
// let j=0;
// function apple(){
//     if(i==5) 
//     return;
//     console.log("apple");
//     i++;
//     banana();
// }
// function banana(){
//     if(j==5) 
//     return;
//     console.log("banana");
//     j++;
//     apple();
// }

// apple();

function test(x){
    if(x>0){
        test(x-1)
    }
    console.log(x);
}
test(5);