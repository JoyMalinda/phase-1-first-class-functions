function receivesAFunction(callback) {
    return callback();
}
function returnsANamedFunction() {
    const myFunction = function(){
        return 'Hello!'
    }
    return myFunction;
}
function returnsAnAnonymousFunction() {
    return function(){
        return 'Wow!'
    }
}