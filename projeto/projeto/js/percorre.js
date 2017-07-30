
function throughArray(array, aFunction){

    for(var i = 0; i <= array.length - 1; i++){
        
        aFunction(array[i]);
    }
};