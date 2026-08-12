

 function moves(move){
     switch(move){
     case "UP":
         console.log("moved up");
         break;
     case "DOWN":
         console.log("moved down");
         break;
    case "LEFT":
        console.log("moved left");
        break;    
    case "RIGHT":
        console.log("moved right");
        break;
}
}

 moves("DOWN");

//----------------------

function fruits(fruit){
    switch(fruit){
        case "apple":
        case "banana":
        case "mango":
        case "orange":
        case "anjir":
        case "jamb":
        case "jamla":
            console.log("Fruit is available");
            break;
        case "grape":
        case "kiwi":
        case "papaya":
            console.log("Fruit is not available");
            break;
    }
}


fruits("jamb");


//calculator------------------------------------------

function calculator(a, b,  operator){
   

    switch(operator){
        case "+":
            console.log(a+b);
            break;
        case "-":
            console.log(a-b);
            break;
        case "*":
            console.log(a*b);
            break;
        case "/":
            if(b==0){
                console.log("division by zero is not possible");
            } else {
                console.log(a/b);
            }
            break;
        default:
            console.log("invalid operator(new operators will be added in next version)");
    }

}

 calculator(40, 3, "/");


//fizzbuzz------------------------------------------

function fizzbuzz(num){
    for(let i=1; i<=num; i++){
        
        if(i==13){
            continue;
        }
        if(i ==25){
            break;
        }
        if(i%3==0 ){
            if(i%5==0){
            console.log("fizzbuzz");
            } else {
                console.log("fizz");
            }
        } else if(i%5==0){
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
}
fizzbuzz(30);



let age =17;
let access  =age >=18 ? "allowed" : "not allowed";
console.log(access);

let access2;
if(age >= 18){
    access2 = "allowed";
}else {
    access2 = "not allowed";
}
console.log(access2);

