function greet(callbacks){
    console.log(`Good Morning `);
    callbacks();
    return function(){
        console.log(`See you soon...`);
    }
}
let sayBye = function(){
    console.log(`Bye.. `);
}
greet(sayBye)();