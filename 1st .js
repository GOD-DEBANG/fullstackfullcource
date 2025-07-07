function arr(){
    var arr1 = [1,2,3,4,5,6,7,8,9,10];
    if(arr1.length % 2 == 0){
        console.log(arr1.length)
    }
    else{
        console.log("Error")
    }
}
module.exports = arr;