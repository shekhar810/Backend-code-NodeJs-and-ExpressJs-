function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

// module.exports=(add(3,4))
// module.exports=add
// module.exports=sub

module.exports={
    addFn :add,
    subFn :sub
}