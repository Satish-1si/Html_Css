function get_result(arg1,arg){
    let create_ele=document.createElement("h4");
    create_ele.textContent=(arg1+"")+" => "+arg;
    let parent=document.getElementById("abc");
    parent.appendChild(create_ele);
}
//arthimatic operators:
let add=10+20
let sub=20-30;
let mul=20*3;
let que=20/3;
let rem=20%3;
let pow=20**3;


//loose equalto ==>data (same or not)
let result1=(1000)==("1000");
//loose notequalto ==>data (same or not)
let result2=(1000)!=("1000");
//Strict equalto ==>data,datatype ==>checking
let result3=(1000)===("1000");
//Strict notequalto ==>data,datatype ==>checking
let result4=(1000)!==("1000");

//logical operator:-
let and=(true && 0);
let or=(true || 0);
let notEqual=!(true);


//typeof:return datatype 
let datatype=typeof("satish");
//Boolean:return trur/false
let bool=Boolean("satish");



//Number(any_no)
let no=Number("1000");
//parseInt(any_no|no_alpha)
let no1=parseInt("12abc");
//parseInt(any_no|no_alpha)
let no2=parseFloat("12abc");

//==========================================================
//comma operator:
/*syntax: (ele,ele,ele,ele,ele,ele)
            0 ,1  ,2  , 3 ,4  , 5
         ------calcution---------->
result:lastindex_ele
*/
let x=10;
let s1=((x,x++,x++),(x,x--,10));
let s2=(Math.max(((10,100),(1,2))));
//==========================================================
/*(ternary_operator):-Conditional 
syntax:let s=(condition)?ture_data:false_data
                --------------->
                ------------------------->
result:depends upon condition
*/
let data=(10<20)?("satish"):("pondu");
//===============================================================
//delete operator:-delete operator [removes] a object_property_value.
let obj={a:1,b:2};
get_result("object",obj.a);
delete obj.b;
//in operator:- property ==> present in object |Not present in object
let boole="a" in obj;
//=====================================================================
//Grouping operator ( ):- controls the precedence of evaluation
console.log(1 + 2 * 3); // 1 + 6
// Expected output: 7
console.log(1 + (2 * 3)); // 1 + 6
// Expected output: 7
console.log((1 + 2) * 3); // 3 * 3
// Expected output: 9
console.log(1 * 3 + 2 * 3); // 3 + 6
// Expected output: 9
//======================================================================
/*instanceof:-compare the 2object instances(prototypes)==>same or not 
  ===>object(properties)
  ===>car(object_properties+car_properties)
  ==>auto(object_properties+car_properties+auto_properties)
*/
//syntax:child_plan instanceof parent_plan
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const auto = new Car('Honda', 'Accord', 1998);
  
  console.log(auto instanceof Car);
  // Expected output: true
  
  console.log(auto instanceof Object);
  // Expected output: true
//==================================================================================
//new operator:by using new operator ===>to create the new objects 
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  const car1 = new Car('Eagle', 'Talon TSi', 1993);
  
  console.log(car1.make);
  // Expected output: "Eagle"
//=====================================================================================

//yield
//yield*
//void
//super
//this
//Spread syntax (...)
//destruction systax
//Property accessors
//Operator precedence
//Optional chaining (?.)
//Nullish coalescing assignment (??=)
//Nullish coalescing operator (??)
//Unary negation (-)
//Unary plus (+)
get_result("+",add);
get_result("*",mul);
get_result("-",sub);
get_result("**",pow);
get_result("/",que);
get_result("%",rem);
get_result("==",result1);
get_result("!=",result2);
get_result("===",result3);
get_result("!==",result4);
get_result("and",and);
get_result("or",or);
get_result("not equal",notEqual);
get_result("typeof()",datatype);
get_result("Boolean()",bool);
get_result("Number",no);
get_result("parseInt",no1);
get_result("parseFloat",no2);
get_result("comma_operator",s1);
get_result("comma_operator",s2);
get_result("tenary_operator",data);
get_result("delete_operator",obj);
get_result("in_operator",boole);