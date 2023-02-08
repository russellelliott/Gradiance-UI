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

mainTable.setAttribute('class', 'mainTable'); //left column


//set attribute
//https://stackoverflow.com/questions/33682483/adding-class-name-or-id-to-table-with-js
tables[1].setAttribute('class', 'leftColumn'); //left column

//useless tables
//tables[2].setAttribute('class', 'className'); //left column
tables[3].setAttribute('class', 'className'); //left column
//delete annoying dots
//https://stackoverflow.com/questions/3065342/how-do-i-iterate-through-table-rows-and-cells-in-javascript

//tables[4].setAttribute('class', 'rightColumn'); //left column

tables[4].style.width = screen.width*0.85;

//script at end of body so stuff loads before execution
//https://stackoverflow.com/questions/30653081/why-scripts-at-the-end-of-body-tag

//https://stackoverflow.com/questions/3813294/how-to-get-element-by-innertext

for (const a of document.querySelectorAll("b")) {
    if (a.textContent.includes("Help")) {
        console.log(a.textContent); //get text
        //multiline string
        //https://stackoverflow.com/questions/805107/creating-multiline-strings-in-javascript
        a.outerHTML +=
        `
        <br>
        <p></p>
        <a class = 'branding' href = 'https://github.com/russellelliott/Gradiance-UI'>UI Improvement Source Code</a>
        `;
        //a.outerHTML += "<br> <a class = 'branding' href = 'https://github.com/russellelliott/Gradiance-UI'>Source Code</a>";
    }
}

//styling for code
//https://stackoverflow.com/questions/3813294/how-to-get-element-by-innertext
var aTags = document.getElementsByTagName("td");
var searchText = "SearchingText";
var found;

//if all uppercase
//https://futurestud.io/tutorials/check-if-a-string-is-in-lowercase-in-javascript-or-node-js
function isUpperCase (input) {  
    return input === String(input).toUpperCase()
}
//sql keywords
//https://www.w3schools.com/sql/sql_ref_keywords.asp
var keywords = "ADD ADD CONSTRAINT ALL ALTER ALTER COLUMN ALTER TABLE AND ANY AS ASC BACKUP DATABASE BETWEEN CASE CHECK COLUMN CONSTRAINT CREATE CREATE DATABASE CREATE INDEX CREATE OR REPLACE VIEW CREATE TABLE CREATE PROCEDURE CREATE UNIQUE INDEX CREATE VIEW DATABASE DEFAULT DELETE DESC DISTINCT DROP DROP COLUMN DROP CONSTRAINT DROP DATABASE DROP DEFAULT DROP INDEX DROP TABLE DROP VIEW EXEC EXISTS FOREIGN KEY FROM FULL OUTER JOIN GROUP BY HAVING IN INDEX INNER JOIN INSERT INTO INSERT INTO SELECT IS NULL IS NOT NULL JOIN LEFT JOIN LIKE LIMIT NOT NOT NULL OR ORDER BY OUTER JOIN PRIMARY KEY PROCEDURE RIGHT JOIN ROWNUM SELECT SELECT DISTINCT SELECT INTO SELECT TOP SET TABLE TOP TRUNCATE TABLE UNION UNION ALL UNIQUE UPDATE VALUES VIEW WHERE".split(" ");

for (var i = 0; i < aTags.length; i++) {
    var words = aTags[i].textContent.split(" ");
    console.log(words);
    for(var word of words){
        //if(isUpperCase(word) && words.length<20){
            //if(words[0]=="\nINSERT"){
            if(words[0].indexOf("INSERT")!=-1){
                console.log(words[0]);
                console.log("words", words);
                aTags[i].setAttribute('class', 'code');
                //break;
            }
            for(var key of keywords){
                if(words[0].indexOf(key)!=-1){
                    console.log(words[0]);
                    console.log("words", words);
                    aTags[i].setAttribute('class', 'code');
                    //break;
                }
            }

            for (const a of document.querySelectorAll("p")) {
                if (a.textContent.includes("CREATE")) {
                    a.setAttribute('class', 'code');
                }
            }
            /*if(words=="CREATE"){
                aTags[i].setAttribute('class', 'code'); //code style
            }*/
            //aTags[i].setAttribute('class', 'code'); //code style

        //}
    }
  /*if (aTags[i].textContent == searchText) {
    found = aTags[i];
    break;
  }*/
}

for (const a of document.querySelectorAll("td")) {
    if(a.textContent=="&nbsp;&nbsp;&nbsp;&nbsp;&#8226;&nbsp;"){
        a.innerText = "fdsjhgjdfk"
    }
    /*if (a.textContent.includes("&#8226;")) {
        //console.log(a);
        a.innerText = "aaaaaaaaa";
        //a.setAttribute('class', 'code');
    }*/
}

//tables[3].setAttribute('class', 'className'); //left column


//change styling of specific word
//https://stackoverflow.com/questions/67894682/how-to-add-style-for-specific-words-at-html-using-javascript
function Change(word) {
    //find all html elements on the page inside the body tag
    let elems = document.querySelectorAll("body *");
    // get our replacement ready
    let span = "<span class='code'>" + word + "</span>";
    //loop through all the elements
    for (let x = 0; x < elems.length; x++) {
        // for each element, 'split' by the word we're looking for, then 'join' it back with the replacement
        elems[x].innerHTML = elems[x].innerHTML.split(word).join(span);
    }
}
Change('NULL'); //apply code styling to word "NULL"

//remove &nbsp
//https://stackoverflow.com/questions/35810238/how-to-remove-nbsp-by-javascript
document.body.innerHTML = document.body.innerHTML.replace(/&nbsp;/g, '');
document.body.innerHTML = document.body.innerHTML.replace(/&#8226;/, '');

//https://stackoverflow.com/questions/20856197/remove-non-ascii-character-in-string
document.body.innerHTML = document.body.innerHTML.replace(/[\u{0080}-\u{FFFF}]/gu,"");



//remove breaklines
//https://www.textfixer.com/tutorials/javascript-line-breaks.php
//https://stackoverflow.com/questions/10805125/how-to-remove-all-line-breaks-from-a-string
//document.body.innerHTML = document.body.innerHTML.replace(/(\r\n|\n|\r)/gm, "");

//replace little dot
//https://unicode-table.com/en/2022/
//document.body.innerHTML = document.body.innerHTML.replace(/&#8226;/g, "");

//find all html elements on the page inside the body tag
let elems = document.querySelectorAll("body *");
// get our replacement ready
let span = "<span class='code'>" + word + "</span>";
//loop through all the elements
for (let x = 0; x < elems.length; x++) {
    // for each element, 'split' by the word we're looking for, then 'join' it back with the replacement
    //elems[x].innerHTML = elems[x].innerHTML.split(word).join(span);
    //if(elems[x])
    //trim
    //https://stackoverflow.com/questions/2031085/how-can-i-check-if-string-contains-characters-whitespace-not-just-whitespace
    //https://www.w3schools.com/jsref/jsref_trim_string.asp
    console.log("text: ", elems[x].textContent);
    if(elems[x].textContent.trim().length === 0){
        console.log("empty!");
        //if empty, remove the element
        //https://www.w3schools.com/jsref/met_element_remove.asp
        //elems[x].remove();
    }

}