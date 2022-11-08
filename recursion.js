function fact(item){
    if(item===1){
        return item;
    }
    return item*fact(item-1)
}
console.log(fact(5))
