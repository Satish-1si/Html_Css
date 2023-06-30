function data(){
    console.log( "sai");
}
data()

//default arguments,spread operator argument==>declare last
function default_arg(c,b=2,a="sai"){
         console.log(a.repeat(b));
}
default_arg(20)

function multple_args(a,b,c,d){
     console.log(arguments)
}
multple_args(1,2,3,4)
//spread operator argument==> declare last
function spread_operator(a,b,...c){
    console.log(a,b,c)
}
spread_operator(10,20,30,40,50,60,70)
//list destruing:-
function argum_ents([a,b,c,...d]){
    console.log(a,b,c)
}
argum_ents([1,2,"a","b","c","f"]);




