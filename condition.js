function conditionexamples(){
    let score = 7.5;
    if(score >= 9.0){
         console.log("Grade A");
    }
    else if(score >= 7.0){
         console.log("Grade b");
    } 
    else{
        console.log("Grade C");
    }
    let day = "Monday";
    switch(day){
        case "Monday":
            console.log("Start of the day ");
            break;
        case "Sunday":
            console.log("Weekend  ");
            break;
        default:
            console.log("Mid week  ")
    }
    //ternary examples
    let pass = score => 50 ? "passed" : "faild";
}
module.exports = conditionexamples; 