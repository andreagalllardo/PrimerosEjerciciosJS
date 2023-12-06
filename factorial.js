//Encuentre el factorial de cualquier número dado

var numFactorial
function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return(num * factorialize(num - 1));
    }
}
factorialize(8)