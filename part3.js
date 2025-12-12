// TRANSFORMING DATA

// ...we will transform our rows into objects

// Output:
// // For each row of data (array): create an object where the key of each value is the heading for that value’s column.
// // Convert these keys to all lowercase letters for consistency.
// // Store these objects in an array, in the order that they were originally listed
// // Should look like:
/*  [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]
*/


let data = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let dataArray = data.split("," && "\n");

let headerCell = dataArray[0].split(",");
let cell1 = dataArray[1].split(",");
let cell2 = dataArray[2].split(",");
let cell3 = dataArray[3].split(",");
let cell4 = dataArray[4].split(",");

let fullDataArray = [headerCell, cell1, cell2, cell3, cell4];

//I'm going to try using the .map() method to assign the first set of elements as properties

const newDataArray = fullDataArray.map((element) => {
    return {
       ID: element[1][0],
       Name: element[1][1],
       Occupation: element[1][2],
       Age: element[1][3]
    };
})

console.log(newDataArray);

// ...In Progress