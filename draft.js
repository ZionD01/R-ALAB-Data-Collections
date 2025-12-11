/*  Now that you have knowledge of arrays and objects,
    how would you change your approach to this problem?
    Take a few minutes to examine and refactor the code before continuing.
*/

// Part 1: Refactoring Old Code

// Below is the original code. Following the original code is the refactoring

let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;


//Variables
let cell1 = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';
let commas = 0;

// // cooma - separate cells first
// // '\n' - separate each row/line - second
//  // char - everything else -bottom

for (let i = 0; i < str.length; i++) {

    let current = str[i];

    if (current == ',') {

// Move to next cell

    
        commas++;

    } else if (current == '\n') {

        console.log(cell1, cell2, cell3, cell4);

// Print all cells


        commas = 0;
        cell1 = "";
        cell2 = "";
        cell2 = "";
        cell4 = "";
    } else {

// Add data to cell
        if (commas == 0){
            cell1 += current;

        } else if (commas == 1){
            cell2 += current;

        } else if (commas == 2){
            cell3 += current; 

        } else if (commas == 3){
            cell4 += current; 
        }  
}

if (i == str.length - 1) {

    

   results =  console.log(cell1, cell2, cell3, cell4);
}


}

console.log()