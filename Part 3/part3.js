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


const dataObject = {};