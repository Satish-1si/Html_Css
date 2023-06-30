function process(arg1,arg){
    let ele_create=document.createElement("h5");
    ele_create.textContent=arg1+" = "+arg;
    let parent=document.getElementById("abc")
    parent.appendChild(ele_create);
   
}
process(".............................1","trusy values...............................")
//trusly values:-all-->primitive,nonprimitive datatypes
process("boolean",Boolean(true));
process("string",Boolean("satish"));
process("number",Boolean(100));
process("list",Boolean([1,2,3]));
process("object",Boolean({a:10}));
process(".............................2","falsly values...................................")
//falsy values:-all:-null,undefined,NaN,0,"",0n,-1
process("boolean",Boolean(null));
process("string",Boolean(undefined));
process("number",Boolean(NaN));
process("list",Boolean(-1));
process("object",Boolean(0));
process("object",Boolean(""));
process("object",Boolean(0n));

