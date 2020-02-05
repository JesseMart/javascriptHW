// 1. MADLIB
/*function madlib(name, subject){
    console.log(name + "'s favorite subjecct in school is " + subject);
    return
}*/

// 2. TIP CALCULATOR

/*function tipAmount(amount, level){
    if(level == 'good'){
        amount = amount * .20;
        console.log(amount);
    }
    else if(level == 'fair'){
        amount = amount * .15;
        console.log(amount);
    }
    else if(level == 'bad'){
        amount = amount * .10;
        console.log(amount);
    }
    else{
        console.log("Your meal is free.");
    }
}
tipAmount(100, 'good');*/

// 3. TIP CALCULATOR 2

/*function totalAmount(amount, level){
    if(level == 'good'){
        var tipAmount = amount * .20;
        var total = tipAmount + amount;
        console.log(total);
    }
    else if(level == 'fair'){
        var tipAmount = amount * .15;
        var total = tipAmount + amount;
        console.log(total);
    }
    else if(level == 'bad'){
        var tipAmount = amount * .10;
        var total = tipAmount + amount;
        console.log(total);
    }
    else{
        console.log("Your meal is free.");
    }
}
totalAmount(100, 'fair');*/

// 4.  PRINT NUMBERS - WHILE LOOP AND FOR LOOP

/*function printNumbers(start, end){
    while (start < end){
        start++;
        console.log(start)
    }
}*/
/*printNumbers(1, 10);
function printNumbers(start, end){
    for (var i = start;start < end; start++){
        console.log(start);
    }
}
printNumbers(1, 10);*/

// 5. PRINT A SQUARE


/*function drawSquare(size){
    var square="";
    for(i = 0; i < size; i++){    
        for (j = 0; j < size; j++) {
        square += "*";
    }
    console.log(square);
    square="";
    } 
}
drawSquare(5);*/

// 6. PRINT A BOX

/*function printBox(width, height) {
for (let i = 0; i < height; i++) {    
    if (i === 0 || i === height -1) {  
        console.log('*'.repeat(width));  
    }
    else {        
    console.log('*' + ' '.repeat(width-2) + '*');
    }
}
}
printBox(6, 4);*/


// 7. PRINT A BANNER

/*function printBanner(text){
    for (var i = 0; i < text.length; i++){
        console.log("*");
    }
}
printBanner("Welcome to Digital Crafts!");*/




