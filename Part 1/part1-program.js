// REFACTORING OLD CODE (W/ new knowledge of arrays & objects)

// What do we know?
// // Each cell of data will be stored in a variable
// // When you encounter a comma, move to the next cell
// // When you encounter the “\n” sequence, move to the next “row.”
// // This is what we will use to get our output:  console.log(cell1, cell2, cell3, cell4)
// // There will only be 4 cells per row.
// // There will be no escaped characters other than “\n”.

// CSV DATA:
let data =`ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;


// Using "split" string method to create an array
// We will split the data after every "," & "\n"

let dataArray = data.split("," && "\n");


// Set up the cells
let headerCell = dataArray[0] + '\n';
let cell1 = dataArray[1] + '\n';
let cell2 = dataArray[2] + '\n';
let cell3 = dataArray[3] + '\n';
let cell4 = dataArray[4] + '\n';

    
// Utilizing the output format requested
    console.log(headerCell, cell1,  cell2, cell3, cell4);


// Time to test some example data! Review file part1-testexample.js
 