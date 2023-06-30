
 /*1.spread operator:-unpack the values
   eg:- varible="data"
        ...varible=> data present in varible ==>that time iterable values ni upack cheyadaniki==>spread operator 
   2.rest operator:-pack(group) the values ===>stored in list
    eg:- varible ;
        ...varible=> data not present in varible ==>that time iterable values ni store cheyadaniki==>Rest operator
 
 
 */
//====================================================================================
 /*1.spread operator*/
/* list */
 let list1=[1,2,3,4,5];
 let list2=[5,6,7,8,9,10];
 let group_list=[...list2,11,12,13,14,15]
 console.log(list1,...list2)// [1, 2, 3, 4, 5] 5 6 7 8 9 10
 console.log(group_list)//[5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
/*all list values ==>grouping in single list*/
 let all_lists_stored_in_one_list=[...list1,...list2,...group_list]
 console.log(all_lists_stored_in_one_list)//[5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
 
 
 
 /* object */
 let person1={name:"sai",age:24,gender:"male"}
 let person2={job:"software",role:"developer"}
 let grop_objects={...person1,address:"amp",gender:"male"}
 //console.log(person1,...person2)
 console.log(grop_objects)

 /*all object keys,values ==>gruping in single object*/
 let all_objects_stored_in_one_list={...person1,...person2,...grop_objects}
 console.log(all_objects_stored_in_one_list)


/*list values spread in---> object*/
let list=[1,2,3,"a",true,null]
let object={...list,name:"satish",age:100}
console.log(object)

/*list <------- object keys,values spread in */
     //not possible
// let obj={a:1,b:true}
// let list_result=[...obj,10,20]
// console.log(list_result)//spread.js:39  Uncaught TypeError: obj is not iterable

//====================================================================================
/*2.destructing===>applicable for sequence of charcters */
//list destructuring
let v=[1,2,3,4,5];
[a,b]=v;
console.log(a,b);

[,a,,,b]=v;
console.log(a,b);

[a,b,...c]=v;
console.log(a,b,c);

//string destructuring
let v1="satish";
[a,b]=v1;
console.log(a,b);

[,a,,,b]=v1;
console.log(a,b);

[a,b,...c]=v1;
console.log(a,b,c);

//====================================================================================
//object destructuring
let obj={name:"sai",age:24,height:10};
let {name,age}=obj;
console.log(obj);
console.log(name);
//destructing time lo==>varible name change==>new name assign
let obj1={name1:"sai",age1:24,height1:10};
let {name1,a:age1}=obj1;
console.log(name1,a)
//============================================================================
//functional destructing
function data([a,b,...d]){
    console.log(a,b,d)
}
data([1,2,3,4,5])
//
