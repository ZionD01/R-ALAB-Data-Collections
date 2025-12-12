// EXPANDING FUNCTIONALITY


// What can we infer?
// // We're going to declare a variable that stores the number of columns in each row of data within the CSV.
// // Your code will exapnd to accept any number of columns
// // This should be calculated dynamically based on the first row of data.
// // For example, if the first row of data (the headings) has eight entries, your program should create eight entries per row.
// // all rows that follow will contain the same number of entries per row.


// Output expected
// // Store your results in a two-dimensional array.
// // Each row should be stored in a parent array, with the heading row located at index 0.
// // Should look like this:
/* [["ID", "Name", "Occupation", "Age"],
 ["42", "Bruce", "Knight", "41"],
 ["57", "Bob", "Fry Cook", "19"],
 ["63", "Blaine", "Quiz Master", "58"],
 ["98", "Bill", "Doctor’s Assistant", "26"]] */


// CSV DATA:
// I adjusted the data to include information that would have to go into another column

// let data = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
   let data = `ID,Name,Occupation,Age,Time\n42,Bruce,Knight,41,8:00AM\n57,Bob,Fry Cook,19,10:00AM\n63,Blaine,Quiz Master,58,4:00AM\n98,Bill,Doctor’s Assistant,26,1:00AM`;


// THE PROGRAM

let dataArray = data.split("," && "\n");


/* Essentially, after the previous step in completed,
   we want the program to count how many entries (elements) are
   in the first row (array). Then take that number and set that
   as the number of entries for each row. ...however read below
*/

//Set Up the cells
// I used the split method to turn the data into arrays and stored them inside of the cells
let headerCell = dataArray[0].split(",");
let cell1 = dataArray[1].split(",");
let cell2 = dataArray[2].split(",");
let cell3 = dataArray[3].split(",");
let cell4 = dataArray[4].split(",");

let finalData = [headerCell, cell1, cell2, cell3, cell4]

   console.log(finalData);

   // After running the program the data printed the requested output
   // Program Success!