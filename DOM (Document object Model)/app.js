// DOM-document object model
//making changes in any node is DOM manipulation.  and html is saved in tree format
//4steps-how to select html element in js
//1)how to select element in js
//2)how to change html element/content using js
//3)how to apply css using js
//4)how to apply event on element

// 1)select element in js  ->  1)getElementById() ,2)getElementByClassName() ,3)getElementByTagName() ,4)query select All



//step1 implementation
let button=document.getElementsByTagName('button');
console.log(button);

// let buttonid=document.getElementByIdName('btn');
// console.log(buttonid);

let qq=document.querySelector('.btn');
console.log(qq);


//step2 implementation
let para=document.getElementsByTagName('p');
para.innertext="Hello World";
console.log(para);


para.innerhtml="<h>heading</h>"
console.log(para);


//step3 implementation
para.style.color=pink;

