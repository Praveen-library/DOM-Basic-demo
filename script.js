// To crate any HTML element Dynamically we need to have 3 steps

// Step 01: use an inbuilt method called document.createElement("elementname");

// Example 2: Create a new HTML element

// //create a new tag
var ele = document.createElement("div");
//add the new content for innerHTML
ele.innerHTML="Praveen Kumar";
//That element display the body side
document.body.append(ele);

// Example 2: Create a new inner level HTML element

//create a new tag
var ele = document.createElement("div");
//add the new content for innerHTML
ele.innerHTML="<span>Designer and Developer</span>";
//That element display the body side
document.body.append(ele);


//Template literal using inner HTML
ele.innerHTML=`<b>Praveen</b> <span>Designer and Developer</span>`;


// // Approach 1 :

var ele = document.createElement("div");
ele.setAttribute("class","main");
ele.innerHTML=`<span class="main1">this is span</span>`;
document.body.append(ele);


// // Approach 2 :

var div = document.createElement("div");
div.setAttribute("class","main1");

var span = document.createElement("span");
span.setAttribute("class","main2");
span.innerHTML="This is span tag"

div.append(span);
document.body.append(div);



// // Dynamic DOM basic example [100 times created the div elements]
function test(){
    for(var i=0;i<100;i++){
        var ele = document.createElement("div");
        ele.setAttribute("class","main");
        ele.innerHTML="<span>this is span</span>";
        document.body.append(ele);
    }
}


    var container = document.createElement("div");
    container.setAttribute("class","container");
    
    var row = document.createElement("div");
    row.setAttribute("class","row");
    
    var col = document.createElement("div");
    col.setAttribute("class","col");
    col.innerHTML="This is col";
//col1
    var col1 = document.createElement("div");
    col1.setAttribute("class","col-1");
    col1.innerHTML="This is col1";
//col2
    var col2 = document.createElement("div");
    col2.setAttribute("class","col-1");
    col2.innerHTML="This is col2";
//parent.append(child);
    row.append(col);
    container.append(row);
//append method can append multiple elements to a single element
row.append(col1,col2);
    document.body.append(container);

    
//Task 1 :Create a HTML Form in DOM
//1.username , 2. password , 3. email, 4. number.

function createlables(tagname,forattr,forval,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(forattr,forval); 
    ele.innerHTML=content;
    return ele;

}

function createinput(tagname,attrname,attrvalue,attrid,attrid){
  
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrid,attrid); 
    return ele;

}
function createlinebreak(tagname){
    var br = document.createElement(tagname);
    return br;

}
//username
var label1 = createlables("label","for","user","Username");
var br1 = createlinebreak("br");
var input1 = createinput("input","type","text","id","user");

//password
var br2 = createlinebreak("br");
var label2 = createlables("label","for","pass","Password");
var br3 = createlinebreak("br");
var input2 = createinput("input","type","password","id","pass");

//email
var br4 = createlinebreak("br");
var label3 = createlables("label","for","email","Email");
var br5 = createlinebreak("br");
var input3 = createinput("input","type","email","id","email");

//number
var br6 = createlinebreak("br");
var label4 = createlables("label","for","number","Number");
var br7 = createlinebreak("br");
var input4 = createinput("input","type","number","id","number");

//view the four form labels and inputs
document.body.append(label1,br1,input1);
document.body.append(br2,label2,br3,input2);
document.body.append(br4,label3,br5,input3);
document.body.append(br6,label4,br7,input4);


//Task 02: Create a HTML Form and validation in JS
//1.firstname,2.Middlename,3.lastname,4.email,5.password


function submit(){
    var username = document.getElementById("fname").value;
    var Middlename = document.getElementById("mname").value;
    var lastname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    console.log(username,Middlename,lastname,email,password);
    
    if(email === "praveendemo@gmail.com" && password === "987654reverse"){
        alert("Welcome Buddy");   
    }
    else{
        alert("Invalid User");
    }

}




//specific class selecto elements
//document.getElementByClassName
var res = document.getElementsByClassName("main");
console.log(res);


// //querySelector --> selecting the html based on their selector property either maybe a class or id or tag selector
// //document.querySelector(.classname/#idname/tagname)
var res = document.querySelector(".main");
console.log(res);


let button = document.createElement("button");
button.innerHTML="Click me";
button.addEventListener("click",display);
//code optimzation using arrow function
// button.addEventListener("click",()=> console.log("Hey Praveen"));
document.body.append(button);

function display(){
    console.log("Hey Hello");
}


// //How to create an HTML element Dynamically ?? on a button click

let button = document.createElement("button");
button.innerHTML="Click me";
button.addEventListener("click",display);
//code optimzation using arrow function
// button.addEventListener("click",()=> console.log("Hey Praveen"));
document.body.append(button);

function display(){
    let ele = document.createElement("div");
    ele.innerHTML="This is div";
    ele.style.color="blue";
    ele.style.fontSize="40";
    document.body.append(ele);
}


// //  Task 03: 

// //1.Create a HTML span element on every button Click it has to display the content "Welcome to Praveen"
// //with a font size of 20px and color must be of the blue

let btn = document.createElement("button");
btn.innerHTML="Click Me";
btn.addEventListener("click", spanelement);
document.body.append(btn);

function spanelement(){
    let ele = document.createElement("span");
    ele.innerHTML="Welcome to Praveen";
    ele.style.fontSize="20px";
    ele.style.color="blue";
    //span tag is inline element so output will come single line so I have mentioned display = "block"
    //Inline to block level element
    ele.style.display="block";
    document.body.append(ele);
}


// Task 04:

//This table is in HTML, create the sasme table With Below Mentioned Information
//Using DOM 
//Remainder:don't use innerHTML propery 1st Method
//function creation for tables using DOM
function createTable(tagele,attrname,attrval){

    let ele = document.createElement(tagele);
    ele.setAttribute(attrname,attrval);
    return ele;
}
function createThead(tagele,attrname,attrval){

let ele = document.createElement(tagele);
ele.setAttribute(attrname,attrval);
return ele;
}

function tr(tagele){
let ele = document.createElement(tagele);
return ele;
}

function th(tagele,attrname,attrval,content){
let ele = document.createElement(tagele);
    ele.setAttribute(attrname,attrval);
    ele.innerHTML=content;
    ele.style.color="white";
    ele.style.backgroundColor = "grey";
    ele.style.width="750px";
    ele.style.borderCollapse="collapse";
    ele.style.height="60px";
    ele.style.paddingTop="10px";
    ele.style.fontSize="40px";
    return ele;
}

function createBody(tagele){
let ele = document.createElement(tagele);
return ele;
}

function td(tagele,content){
let ele = document.createElement(tagele);
ele.innerHTML=content;
ele.style.color="black";
    ele.style.backgroundColor = "white";
    ele.style.width="750px";
    ele.style.borderCollapse="collapse";
    ele.style.height="60px";
    ele.style.paddingTop="10px";
    ele.style.fontSize="40px";
return ele;
}


// Dynamical function call:
let createTable1 = createTable("table","class","table");
let createThead1 = createThead("thead","class","thead-dark");
let createtr1 = tr("tr");
let createth1 =  th("th","scope","col","First");
let createth2 =  th("th","scope","col","Middle");
let createth3 =  th("th","scope","col","Last");
let createtBody = createBody("tbody");
let createtr2 = tr("tr");
let createtd1 = td("td","Mark");
let createtd2 = td("td","Otto");
let createtd3 = td("td","@mdo");

//view the document inside(UI)
createTable1.append(createThead1,createtBody);
createThead1.append(createtr1);
createtr1.append(createth1,createth2,createth3);
createtBody.append(createtr2);
createtr2.append(createtd1,createtd2,createtd3);
document.body.append(createTable1);

let btn = document.createElement("button");
btn.innerHTML="Try this";
btn.addEventListener("click",()=> alert("Hey Praveen Gud try Man"));
document.body.append(btn);








