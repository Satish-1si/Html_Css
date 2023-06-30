

// //.........................primitive_value convert to wapper_object_value...................................
// // any primitive_data_type ==>covert into ===>object_datatype
// let primitive_to_parentobject1=new Object({});//object
// let primitive_to_parentobject2=new Object("satish");//string object
// let primitive_to_parentobject3=new Object(true);//boolean object
// let primitive_to_parentobject4=new Object(100);//number object
// string("object_create3",[typeof(primitive_to_parentobject1),typeof(primitive_to_parentobject2),typeof(primitive_to_parentobject3)]);

// /*..................................wrapper_class inhert objectClass............................
// #wrapper class
// ..........................parent..............................
// 1.object ==>new Object();
// ............................childs(inherit)........................
//  string   extends  object
//                       ==>new String()  
//  boolean  extends  object
//                       ==>new boolean()  
//  number   extends  object
//                       ==>new number()  
//  Array    extends  object
//                       ==>new Array()   
//  set      extends  object
//                      ==>new set()      
//  function extends  object 
//                     ==>new function()  
// etc...
// */
// // wrapper_class ===> inherhit ====> object class
// let bool_object=new Boolean("sai");
// string("str_object",bool_object);

// let string_object=new String("a","b")
// console.log(string_object)

// let array_object=new Array(1,23,34)
// console.log(array_object)
// //...................................................................................






function random_colr(){
    let no=Math.ceil(Math.random()*100);
    let no1=Math.ceil(Math.random()*50);
    return `rgb(${no}, ${no1},0)`;
}
function create_ele(ele){
    let e= document.createElement(ele);
    return e;
}

function string(arg,arg1){
    console.log(arg1)
    let get=document.getElementsByTagName("body")[0];
    let ele=create_ele("pre");
    ele.textContent=arg+" :=> "+arg1;
    ele.style.backgroundColor=random_colr();
    ele.setAttribute("class","adding");
    get.append(ele, create_ele("br"));
    
    
}
//.........................object creation ...................................

/*way-1:-*/
let object_create1={}//object literal
string("object_create1",object_create1);//{}
// object_create ={name:"suresh",age:25};//add the values
// console.log(object_create)
/*Note:-[object Object] is a string version of an object instance creation*/

/*way-2*/
let object_crete2=new Object();//object constructor
string("object_create2",object_crete2);//{}
// object_crete2.name="sai"
// console.log(object_crete2)

/* way-3 factory function*/
//1way:-(old way)
function data(a,b,c){
    return{
        name:a,
        age:b,
        gender:c
    }
}
let object=data("ramani",26,"female");
string("factory_function1",object)//{name: 'venkat', age: 26, gender: 'male'}
/*2way:-modern way*/
function data1(a,b,c){
    var d={name:"sai",age:24};
    return{
       a,b,c,d
    }
}
let object1=data1("venkat",26,"male");
string("factory_function2",object1)//{a: 'venkat', b: 26, c: 'male'}

/*way-4 constructor function*/
function constructor_function(arg1,arg2,arg3){
    this.arg=arg1;
    this.arg1=arg2;
    this.gender=arg3

}
let obj=new constructor_function("suraya","100","male")
string("constructor_function",obj)//object_create {arg: 'suraya', arg1: '100', gender: 'male'}

//---------------------------------------------------------------------------------
/*add the values*/
let add_values={
    first_name:"sai",
    age:24
}
string("add_values",add_values);//{first_name: 'sai', age: 24}
//---------------------------------------------------------------------------------
/*accessing/modify/update==> object properties:-
1.dot notation
    example:-console.log(add_values.first_name)===>accessing
            add_values.first_name="satish" ===>upadating
            add_values.gender="male"===>adding
2.bracket notation
    example:-add_values["first_name"]
             add_values["first_name"]="prasad"
             add_values["gender"]="male"===>adding
*/
console.log(add_values["first_name"]);//access
add_values["first_name"]="prasad";//updating
add_values["gender"]="male";//adding
//---------------------------------------------------------------------------------
/*add the anomonous_functions in object*/
let person_details={};
let details=function(){
     console.log("satish");
};
person_details.details;
string("add the func ===>in object",person_details)
//---------------------------------------------------------------------------------
