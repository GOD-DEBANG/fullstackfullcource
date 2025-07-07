function functionexamples(){
    function x(name){
         return `This is good $(name)`
    }
    //arrow function
    const square = n => n*n;
    //default parameter
    function df(mesg="HII HOW ARE YOU"){
        console.log(mesg);
    }
    //returns object
    function getuser(){
        return {name:"Debang" ,age : 30 };
    }
    //nested function
    function outer(){
        function inner(){

        }

    }
    console.log(x("Hii"));
    console.log(square(5));
    df();
    console.log(getuser());
    console.log(outer());
}
module.exports = functionexamples;