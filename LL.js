let data = [9,45,2,8,45,23,7,78,0,11,41,77]


for(let i = 0; i<data.length; i++){
    document.write(`<li type="disc"> Array [${i}] is ${data[i]} <br>`) 
}

// let x = 5;
// document.write(data[x])

function getElement(){
    let el = document.getElementById('element').value
    if(el===""){
        alert("Please give input!")
    } else if (el< data.length && typeof(parseInt(el)==='number')){
        alert(data[el]);
    }
    else {
        alert("Please give valid input!")
    }
}