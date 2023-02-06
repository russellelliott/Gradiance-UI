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

//iterate through all tables; add border color to those with color
//https://www.freecodecamp.org/news/how-to-loop-through-an-array-in-javascript-js-iterate-tutorial/
var tables = document.getElementsByTagName("table");
for(const table of tables){
    console.log(table);
    //https://www.w3schools.com/jsref/prop_html_innerhtml.asp
    var HTML = table.outerHTML;
    //check if table has background color
    //https://stackoverflow.com/questions/17116909/using-javascript-how-do-i-get-the-background-color-of-a-table-cell-when-i-click
    //https://www.w3schools.com/jsref/jsref_indexof.asp
    var whitelist = ["floralwhite", "navajowhite", "beige", "palegreen", "powderblue", "lemonchiffon", "paleturquoise"];
    //https://sentry.io/answers/string-contains-substring-javascript/
    if(HTML.indexOf("bgcolor")<8 && color(HTML, whitelist)){
        console.log("yes");
        console.log(HTML.indexOf("bgcolor"));
        //https://www.w3schools.com/jsref/jsref_substring.asp
        console.log(HTML.substring(HTML.indexOf("bgcolor")+8,HTML.indexOf("bgcolor")+20));
        //add style
        //https://www.w3schools.com/howto/howto_js_add_class.asp
        table.classList.add("mystyle");
    }
    //get background color
    //https://stackoverflow.com/questions/1887104/how-to-get-the-background-color-of-an-html-element
    //var tableColor = window.getComputedStyle( table ,null).getPropertyValue('bgcolor');
    //console.log(tableColor);

}

function color(string, list){
    for(item of list){
        if(string.indexOf(item)!=-1){
            console.log("should");
            return true;
        }
    }
    return false;
}