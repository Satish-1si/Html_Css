
function random_colr(){
    let no=Math.ceil(Math.random()*100);
    let no1=Math.ceil(Math.random()*50);
    console.log(`hsl(${no-30}, ${no},0)`)
    return `rgb(${no}, ${no1},0)`;
}
function create_ele(ele){
    let e= document.createElement(ele);
    return e;
}

function string(arg,arg1){
    let get=document.getElementsByTagName("body")[0];
    let ele=create_ele("pre");
    ele.textContent=arg+" :=> "+arg1;
    ele.style.backgroundColor=random_colr();
    ele.setAttribute("class","adding");
    get.append(ele, create_ele("br"));
    
    
}
// string concation
let actual_str="   satish is good satish    ";
let stringConcat=actual_str.concat("boy @first");
string("concat",stringConcat);
// string repition
let string_repeat=actual_str.repeat(2);
string("repeat",string_repeat);
// slicling
let string_slicing=actual_str.substring(4);
string("slicing_start",string_slicing);
string_slicing=actual_str.substring(4,9);
string("slicing_start_end-1",string_slicing);
// part_of_char
let part_of_char=actual_str.substr(4,1);
string("part_of_char",part_of_char);
//charcter_conversion:-
let upper=actual_str.toUpperCase();
string("uppercase",upper);
// length
let length=actual_str.length;
string("length",length);
// access
let acess=actual_str[10];
string("string[index]",acess);

// remove leading white spaces
let trim=actual_str.trim();
string("cut_whites",trim);
let trim_end=actual_str.trimEnd();
string("cut_whites_end",trim_end);

let trim_start=actual_str.trimStart();
string("cut_whites_start",trim_start);

//------------checking------------------->
let start_index=actual_str.indexOf("satish");
string("Index",start_index);
start_index=actual_str.indexOf("good",5);
string("Index",start_index);
//<------------checking--------------------
let last_start_index=actual_str.lastIndexOf("satish");
string("LastIndex",last_start_index);
last_start_index=actual_str.lastIndexOf("satish",7);
string("LastIndex",last_start_index);

//split()
let split=actual_str.split(" ");
console.log(split);
string("[break the string_split()]",split)

//adding_str==>actual_str.length+add_str.length==added_length
let add_str="sai".padStart(10,"M-");
string("adding_str_start",add_str);
let add_str_end="sai".padEnd(10,"M-");
string("adding_str_End",add_str_end);


//includes()
let contains="s a t i s h".includes("s a t i");
string("contains",contains);

//  tostring():anydatatype convert into String
let tostring=[1,2,3,4,5].toString();
string("tostring()",tostring);

//valueOf():wrappercalssobject convert into primitiveDatatype
let string_=new String("sairam");
string("wrapper","["+string_.valueOf()+"=>"+typeof(string_)+"]");

//match() matchAll() search()