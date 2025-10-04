//debugger
function a(b){
    //console.log(typeof b);
    console.dir(b);
    b();
}
a("Hello");
a({userName:"Anurag",userAge:28});
a([1,2,3,4]);

function sayHi(){
    console.log("Hiiiiiiiiiiiii");
}
a(sayHi);

a(function(){
    console.log("hiiiiiiiiii");
});