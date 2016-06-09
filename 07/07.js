function distance(a, b){
   var a = x1, y1;
   var b = x2, y2; 
   var result = Math.abs(x1 - x2) + Math.abs(y1 - y2);
    if(a == b){
        return 0;
    }
    return result;
}