function datatypesexamples() {
    let str = "hii all";
    let number = 20;
    let boolean = 21<20;
    
    const arr= [1,2,3,4,5,6,7,8,9,10];
    const obj = {
        name : "Debang Chowdhury",
        age : 20,
        gender : "male"
    }
    console.log(typeof str, typeof number, typeof boolean, typeof arr, typeof obj)
    console.log(arr[4]);
    console.log(obj.age)
}
module.exports = datatypesexamples;