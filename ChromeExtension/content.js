//https://stackoverflow.com/questions/5897122/accessing-elements-by-type-in-javascript
//https://www.w3schools.com/jsref/met_element_getelementsbytagname.asp
var tables = document.getElementsByTagName("table");

//var tables = document.querySelectorAll('table');
var mainTable = tables[0];
console.log(mainTable.innerHTML);

//https://www.geeksforgeeks.org/how-to-remove-column-from-html-table-using-javascript/
// Getting the rows in table.
var row = mainTable.rows; 
// Removing the column at index(1).  
var i = 4; 
for (var j = 0; j < row.length; j++) {

    // Deleting the ith cell of each row.
    row[j].deleteCell(i);
}

//width
//https://www.w3schools.com/js/js_htmldom_css.asp
mainTable.style.width = "100%"

//script at end of body so stuff loads before execution
//https://stackoverflow.com/questions/30653081/why-scripts-at-the-end-of-body-tag

