function getHistory(){
    return document.getElementById("history-value").innerText;

}
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}

function printOutput(num){   
    if (num == "") {
        document.getElementById("output-value").innerText=num;
    }
    else{

        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
    
}

function getFormattedNumber(num){           /**this is the function
                                             that gives the comma sign in the calculator */
 if (num=="-"){
     return "";   //without this condition it shows NaN when we tried backspace on a negative value
 }
var n = Number(num);
 var value = n.toLocaleString("en");
 return value;
}
printOutput("");

/**to manipulate the output we convert the formatted number back to origional form */
function reverseNumberFormat(num){
return Number(num.replace(/,/g,""));
}
//alert(reverseNumberFormat(getOutput()));

//connecting the number and operation button in the calculator
 
 var operator = document.getElementsByClassName("operator");
 //we use for loop to acess the operators in the calculator
 for(var i=0; i<operator.length;i++){
     //then we added a click event listener to all the operators
     operator[i].addEventListener("click", function(){
         //clear button
         if(this.id=="clear"){
             printHistory("");
             printOutput("");
         }

         //backspace
         else if(this.id=="backspace"){
             var output = reverseNumberFormat(getOutput()).toString(); //convert to number format so to avoid tmp with comma
             //then remove the character using substr()
             if(output){   //output has a value..
               output=output.substr( 0, output.length-1);
               printOutput(output);
             
         }
         
        }
         else{
             var output = getOutput();
             var history = getHistory();
             if(output !="") {   //for other operators
               output=reverseNumberFormat(output);  
               history = history+output; //adding the output to the history

               //equal sign
               if(this.id=="equals"){
                 var result = eval(history);
                 printOutput(result);
                 printHistory("");

               }
               else{
                   history = history+this.id;
                   printHistory(history);
                   printOutput("");

            }      
            
            }

            }
        
     });
 }


 var number = document.getElementsByClassName("number ");
 //we use for loop to acess the numbers in the calculator
 for(var i=0; i<number .length;i++){
     //then we added a click event listener to all the numbers
     number[i].addEventListener("click", function(){
        /**alert('the number  click' + this.id); 
         * test if buttons works */
        var output = reverseNumberFormat(getOutput());
        if(output !== NaN){ //check if output is a number then it proceed
           output=output + this.id; //concatenate the ID so that u can have multiple numbers
           printOutput(output);
        }

     });
 }

