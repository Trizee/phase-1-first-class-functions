function receivesAFunction(thing){
    return thing()
}

function returnsANamedFunction(){
    return function named(){something}
}

function returnsAnAnonymousFunction(){
    return (function(){})
}