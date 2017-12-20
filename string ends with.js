// initial
/*function solution(str, ending){
    var nStr = str.slice((str.length - ending.length));
    return (nStr === ending) ? true : false;
}*/

//  refactored
function solution(str, ending){
    return str.endsWith(ending);
}
